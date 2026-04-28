"use client";

import { useCallback, useRef, useState } from "react";

/**
 * FileUpload — reusable drag-drop + click-to-pick file input for SteelR
 * enquiry forms. Sibling of the Vitrums FileUpload but styled in SteelR's
 * cream/gold/ink palette with sharp corners.
 *
 * Constraints (mirror the server-side validator in /api/contact/route.ts):
 *   - Max 3 files
 *   - Per-file max 4MB (post-compression for images)
 *   - Total payload max 4MB (Vercel Hobby plan body limit is 4.5MB)
 *   - Allowed types: image/jpeg, image/png, image/webp, application/pdf
 *
 * Image compression: any image > 800KB is downscaled to max 1920px on the
 * longest edge and re-encoded as JPEG at quality 0.85. Steel door buyers
 * routinely send phone photos of existing door + frame measurements;
 * without this step, a single iPhone photo could exceed the per-file cap.
 * iOS Safari's `accept="image/jpeg"` triggers auto-conversion of HEIC →
 * JPEG on pick, so we don't need a HEIC decoder in the bundle.
 */

const MAX_FILES = 3;
const PER_FILE_MAX_BYTES = 4 * 1024 * 1024;
const TOTAL_MAX_BYTES = 4 * 1024 * 1024;
const COMPRESS_THRESHOLD = 800 * 1024;
const MAX_IMAGE_DIMENSION = 1920;
const COMPRESSION_QUALITY = 0.85;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "application/pdf"] as const;
const ACCEPT_ATTR = ACCEPTED_TYPES.join(",");

type AcceptedType = (typeof ACCEPTED_TYPES)[number];
function isAccepted(type: string): type is AcceptedType {
  return (ACCEPTED_TYPES as readonly string[]).includes(type);
}

function fmtBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 102.4) / 10} KB`;
  return `${Math.round(bytes / (1024 * 102.4)) / 10} MB`;
}

async function compressImage(file: File): Promise<File> {
  if (file.type === "application/pdf" || file.size <= COMPRESS_THRESHOLD) return file;
  if (typeof document === "undefined") return file;

  const dataUrl: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("read failed"));
    reader.readAsDataURL(file);
  });

  const img: HTMLImageElement = await new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.onerror = () => reject(new Error("decode failed"));
    i.src = dataUrl;
  });

  const longest = Math.max(img.width, img.height);
  const scale = longest > MAX_IMAGE_DIMENSION ? MAX_IMAGE_DIMENSION / longest : 1;
  const w = Math.round(img.width * scale);
  const h = Math.round(img.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(img, 0, 0, w, h);

  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), "image/jpeg", COMPRESSION_QUALITY)
  );
  if (!blob) return file;
  const newName = file.name.replace(/\.(png|webp|heic|heif|jpe?g)$/i, "") + ".jpg";
  return new File([blob], newName, { type: "image/jpeg", lastModified: Date.now() });
}

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
  idPrefix?: string;
  /** Compact variant for tight inline forms (QuickEnquiry). */
  compact?: boolean;
}

const labelTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 400,
  fontSize: 11,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  color: "#8a6f4e",
};

export default function FileUpload({ files, onChange, idPrefix = "fu", compact = false }: Props) {
  const inputId = `${idPrefix}-input`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string>("");

  const addFiles = useCallback(
    async (incoming: FileList | File[]) => {
      setError("");
      setBusy(true);
      try {
        const arr = Array.from(incoming);
        const valid: File[] = [];
        for (const f of arr) {
          if (!isAccepted(f.type)) {
            setError(`"${f.name}" is not a supported file type. JPEG, PNG, WebP, or PDF only.`);
            continue;
          }
          const processed = await compressImage(f).catch(() => f);
          if (processed.size > PER_FILE_MAX_BYTES) {
            setError(`"${f.name}" is too large (${fmtBytes(processed.size)}). Max 4MB per file.`);
            continue;
          }
          valid.push(processed);
        }
        const combined = [...files, ...valid];
        if (combined.length > MAX_FILES) {
          setError(`Max ${MAX_FILES} files. Drop or remove some.`);
          onChange(combined.slice(0, MAX_FILES));
          return;
        }
        const totalSize = combined.reduce((sum, f) => sum + f.size, 0);
        if (totalSize > TOTAL_MAX_BYTES) {
          setError(`Total file size ${fmtBytes(totalSize)} exceeds 4MB cap. Remove a file.`);
          onChange(combined);
          return;
        }
        onChange(combined);
      } finally {
        setBusy(false);
      }
    },
    [files, onChange]
  );

  function removeAt(idx: number) {
    setError("");
    onChange(files.filter((_, i) => i !== idx));
  }

  return (
    <div>
      <label
        htmlFor={inputId}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          if (e.dataTransfer.files?.length) void addFiles(e.dataTransfer.files);
        }}
        style={{
          display: "block",
          width: "100%",
          cursor: "pointer",
          padding: compact ? "12px 14px" : "16px",
          border: dragActive
            ? "1px dashed #c9a96e"
            : "1px dashed rgba(26,26,24,0.25)",
          background: dragActive ? "rgba(201,169,110,0.06)" : "transparent",
          transition: "background 150ms ease, border-color 150ms ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 32,
              height: 32,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#c9a96e",
              color: "#1a1a18",
            }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#1a1a18",
                lineHeight: 1.3,
              }}
            >
              {busy
                ? "Processing…"
                : files.length === 0
                ? "Attach photos or PDF (optional)"
                : `${files.length} file${files.length > 1 ? "s" : ""} attached`}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 11,
                color: "#8a6f4e",
                marginTop: 2,
              }}
            >
              {compact ? "Up to 3 files · 4MB total" : "Drag & drop or click · JPEG, PNG, WebP, PDF · max 3 files, 4MB total"}
            </div>
          </div>
        </div>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={ACCEPT_ATTR}
          multiple
          style={{ position: "absolute", left: -9999, opacity: 0, pointerEvents: "none" }}
          onChange={(e) => {
            if (e.target.files?.length) void addFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>

      {files.length > 0 && (
        <ul style={{ marginTop: 8, listStyle: "none", padding: 0 }}>
          {files.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 12px",
                background: "rgba(245,240,232,0.5)",
                border: "1px solid rgba(26,26,24,0.08)",
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#1a1a18" }}>
                {f.name}
              </span>
              <span style={{ fontSize: 11, color: "#8a6f4e", flexShrink: 0 }}>{fmtBytes(f.size)}</span>
              <button
                type="button"
                onClick={() => removeAt(i)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#8a6f4e",
                  padding: "0 4px",
                  flexShrink: 0,
                }}
                aria-label={`Remove ${f.name}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p
          style={{
            ...labelTextStyle,
            marginTop: 8,
            color: "#b03a2e",
            letterSpacing: "0.05em",
            textTransform: "none",
            fontSize: 12,
          }}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
