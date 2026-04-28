"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import FileUpload from "./FileUpload";

const labelStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 300,
  fontSize: 11,
  letterSpacing: "0.3em",
  textTransform: "uppercase" as const,
  color: "#6b5a42",
};

const inputStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 300,
  fontSize: 14,
  color: "#1a1a18",
  background: "transparent",
  border: "1px solid rgba(26, 26, 24, 0.15)",
  padding: "14px 16px",
  width: "100%",
  borderRadius: 0,
};

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [files, setFiles] = useState<File[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    // FormData lets us submit text fields + uploaded files in one request.
    // Server detects multipart/form-data and parses accordingly. Browser sets
    // the Content-Type with boundary automatically — do NOT set it manually.
    const fd = new FormData(form);
    fd.delete("form-name");
    fd.delete("bot-field");

    // Tag the lead with the form's source so the email subject becomes
    // "New Enquiry [contact-page] - SteelR" (parity with QuickEnquiry).
    fd.set("source", "contact-page");

    // Capture lead source from URL
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get("utm_source");
      const ref = params.get("ref");
      if (utmSource) fd.set("utm_source", utmSource);
      if (ref) fd.set("utm_source", ref === "ol" ? "outreach" : ref);
      if (params.get("utm_medium")) fd.set("utm_medium", params.get("utm_medium")!);
      if (params.get("utm_campaign")) fd.set("utm_campaign", params.get("utm_campaign")!);
    }

    // Append uploaded files as repeated `files` entries
    for (const f of files) fd.append("files", f, f.name);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });

      if (res.ok) {
        // Redirect to /thank-you so ThankYouTracking.tsx fires the GA4
        // generate_lead event. Without this redirect (the previous inline
        // success message) GA4 saw no conversion event from this form.
        router.push("/thank-you?source=contact-page");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >

      <div className="flex flex-col gap-2">
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input id="name" name="name" required placeholder="Your full name" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" style={labelStyle}>Phone Number</label>
        <input id="phone" name="phone" type="tel" required placeholder="Your phone number" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" style={labelStyle}>Email Address <span style={{ textTransform: "none", letterSpacing: "normal", color: "#8a6f4e" }}>(optional)</span></label>
        <input id="email" name="email" type="email" placeholder="Your email address" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="propertyType" style={labelStyle}>Property Type <span style={{ textTransform: "none", letterSpacing: "normal", color: "#8a6f4e" }}>(optional)</span></label>
        <select id="propertyType" name="propertyType" style={inputStyle}>
          <option value="">Skip — I&apos;ll explain when you call</option>
          <option value="New Build">New Build</option>
          <option value="Period Property">Period Property</option>
          <option value="Contemporary Renovation">Contemporary Renovation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="doorStyle" style={labelStyle}>Door Style Interest <span style={{ textTransform: "none", letterSpacing: "normal", color: "#8a6f4e" }}>(optional)</span></label>
        <select id="doorStyle" name="doorStyle" style={inputStyle}>
          <option value="">Skip — I&apos;ll explain when you call</option>
          <option value="Contemporary">Contemporary</option>
          <option value="Traditional">Traditional</option>
          <option value="Double Doors">Double Doors</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" style={labelStyle}>Message <span style={{ textTransform: "none", letterSpacing: "normal", color: "#8a6f4e" }}>(optional)</span></label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your project — door style, dimensions, deadline, anything useful" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Photos or PDF <span style={{ textTransform: "none", letterSpacing: "normal", color: "#8a6f4e" }}>(optional)</span></label>
        <FileUpload files={files} onChange={setFiles} idPrefix="contact-form" />
      </div>

      {status === "error" && (
        <p style={{ fontSize: 13, color: "#c44" }}>
          Something went wrong. Please call us on 0800 861 1450.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-cta transition-colors duration-300 hover:bg-cream mt-2"
        style={{
          background: "#c9a96e",
          color: "#1a1a18",
          fontFamily: "var(--font-body), Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          padding: "16px 40px",
          border: "none",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.6 : 1,
        }}
      >
        {status === "sending" ? "Sending..." : "Request a Consultation"}
      </button>
    </form>
  );
}
