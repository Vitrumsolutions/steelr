"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── shared styles (matching ContactForm) ── */
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

/* ── types ── */
interface FormData {
  /* Step 1 */
  propertyType: string;
  projectType: string;
  doorQuantity: string;
  installationType: string;
  /* Step 2 */
  width: string;
  height: string;
  colour: string;
  colourOther: string;
  glazing: string;
  hardware: string;
  security: string;
  fireRating: string;
  /* Step 3 */
  postcode: string;
  timeline: string;
  budget: string;
  /* Step 4 */
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const initial: FormData = {
  propertyType: "",
  projectType: "",
  doorQuantity: "",
  installationType: "",
  width: "",
  height: "",
  colour: "",
  colourOther: "",
  glazing: "",
  hardware: "",
  security: "",
  fireRating: "",
  postcode: "",
  timeline: "",
  budget: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

const STEPS = ["Project Type", "Door Specification", "Site Details", "Your Details"];

/* ── helpers ── */
function Select({
  id,
  label,
  value,
  onChange,
  options,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={inputStyle}
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Input({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
    </div>
  );
}

/* ── page component ── */
export default function DesignEstimatePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set<K extends keyof FormData>(key: K) {
    return (value: string) => setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Capture UTM params for lead source tracking
      const submitData: Record<string, unknown> = { ...form };
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const utmSource = params.get("utm_source");
        const utmMedium = params.get("utm_medium");
        const utmCampaign = params.get("utm_campaign");
        if (utmSource) submitData.utm_source = utmSource;
        if (utmMedium) submitData.utm_medium = utmMedium;
        if (utmCampaign) submitData.utm_campaign = utmCampaign;
      }

      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });
      if (res.ok) {
        setStatus("success");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /* ── step indicator ── */
  function StepIndicator() {
    return (
      <div className="flex items-center justify-center gap-0 mb-12">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center">
            {/* dot + label */}
            <div className="flex flex-col items-center">
              <div
                className="flex items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  width: 36,
                  height: 36,
                  border: i <= step ? "2px solid #c9a96e" : "2px solid rgba(26,26,24,0.15)",
                  background: i < step ? "#c9a96e" : i === step ? "transparent" : "transparent",
                  color: i < step ? "#1a1a18" : i === step ? "#c9a96e" : "rgba(26,26,24,0.3)",
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: 13,
                }}
              >
                {i + 1}
              </div>
              <span
                className="mt-2 hidden sm:block"
                style={{
                  fontFamily: "var(--font-body), Montserrat, sans-serif",
                  fontWeight: 300,
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: i <= step ? "#6b5a42" : "rgba(26,26,24,0.3)",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
            {/* connector */}
            {i < STEPS.length - 1 && (
              <div
                className="hidden sm:block"
                style={{
                  width: 48,
                  height: 1,
                  background: i < step ? "#c9a96e" : "rgba(26,26,24,0.15)",
                  marginLeft: 8,
                  marginRight: 8,
                  marginBottom: 18,
                }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  /* ── nav buttons ── */
  function NavButtons({ showBack = true, showNext = true, nextLabel = "Next" }: { showBack?: boolean; showNext?: boolean; nextLabel?: string }) {
    return (
      <div className="flex justify-between mt-10">
        {showBack ? (
          <button
            type="button"
            onClick={back}
            className="transition-opacity duration-300 hover:opacity-70"
            style={{
              fontFamily: "var(--font-body), Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "16px 32px",
              border: "1px solid rgba(26,26,24,0.15)",
              background: "transparent",
              color: "#1a1a18",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        ) : (
          <div />
        )}
        {showNext && (
          <button
            type="button"
            onClick={next}
            className="transition-colors duration-300 hover:opacity-90"
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
              cursor: "pointer",
            }}
          >
            {nextLabel}
          </button>
        )}
      </div>
    );
  }

  /* ── summary row ── */
  function SummaryRow({ label, value }: { label: string; value: string }) {
    if (!value) return null;
    return (
      <div className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(26,26,24,0.08)" }}>
        <span
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6b5a42",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 300,
            fontSize: 14,
            color: "#1a1a18",
          }}
        >
          {value}
        </span>
      </div>
    );
  }

  /* ── success state ── */
  if (status === "success") {
    return (
      <>
        <section
          className="flex items-center justify-center"
          style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
        >
          <p
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: 48,
              color: "#f5f0e8",
              textAlign: "center",
            }}
          >
            Design &amp; Estimate
          </p>
        </section>
        <section className="ribbon-bg bg-cream py-20 md:py-32 px-6 md:px-16">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: 40,
                color: "#1a1a18",
              }}
            >
              Thank you
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#6b5a42",
              }}
            >
              Your design estimate request has been received. A member of our team
              will review your specification and be in touch within one working day
              on the number provided.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero banner */}
      <section
        className="flex items-center justify-center"
        style={{ height: 200, background: "#1a1a18", paddingTop: 80 }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 48,
            color: "#f5f0e8",
            textAlign: "center",
          }}
        >
          Design &amp; Estimate
        </p>
      </section>

      <section className="ribbon-bg bg-cream py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal direction="up">
            <StepIndicator />

            {/* ──────── STEP 1 — Project Type ──────── */}
            {step === 0 && (
              <div className="flex flex-col gap-6">
                <Select
                  id="propertyType"
                  label="Property Type"
                  value={form.propertyType}
                  onChange={set("propertyType")}
                  options={["New Build", "Period Property", "Contemporary Renovation", "Flat/Apartment", "Commercial", "Other"]}
                  required
                />
                <Select
                  id="projectType"
                  label="Project Type"
                  value={form.projectType}
                  onChange={set("projectType")}
                  options={["Single Door", "Double Doors", "Door with Sidelights", "Multiple Doors"]}
                  required
                />
                {form.projectType === "Multiple Doors" && (
                  <Input
                    id="doorQuantity"
                    label="Number of Doors"
                    value={form.doorQuantity}
                    onChange={set("doorQuantity")}
                    type="number"
                    placeholder="e.g. 3"
                  />
                )}
                <Select
                  id="installationType"
                  label="New Installation or Replacement?"
                  value={form.installationType}
                  onChange={set("installationType")}
                  options={["New Installation", "Replacement"]}
                  required
                />
                <NavButtons showBack={false} />
              </div>
            )}

            {/* ──────── STEP 2 — Door Specification ──────── */}
            {step === 1 && (
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="width"
                    label="Approximate Width (mm)"
                    value={form.width}
                    onChange={set("width")}
                    type="number"
                    placeholder="e.g. 900"
                  />
                  <Input
                    id="height"
                    label="Approximate Height (mm)"
                    value={form.height}
                    onChange={set("height")}
                    type="number"
                    placeholder="e.g. 2100"
                  />
                </div>
                <Select
                  id="colour"
                  label="Preferred Colour"
                  value={form.colour}
                  onChange={set("colour")}
                  options={["Black", "Grey", "Navy", "Green", "Cream", "Other"]}
                />
                {form.colour === "Other" && (
                  <Input
                    id="colourOther"
                    label="Specify Colour"
                    value={form.colourOther}
                    onChange={set("colourOther")}
                    placeholder="e.g. Anthracite Grey RAL 7016"
                  />
                )}
                <Select
                  id="glazing"
                  label="Glazing Preference"
                  value={form.glazing}
                  onChange={set("glazing")}
                  options={["No Glazing", "Clear Glass", "Frosted Glass", "Decorative", "Not Sure"]}
                />
                <Select
                  id="hardware"
                  label="Hardware Finish"
                  value={form.hardware}
                  onChange={set("hardware")}
                  options={["Chrome", "Brushed Satin", "Brass", "Matt Black", "Not Sure"]}
                />
                <Select
                  id="security"
                  label="Security Rating Required"
                  value={form.security}
                  onChange={set("security")}
                  options={["PAS 24", "SR3 (Standard)", "SR4 / LPS 1175 (Commercial-Grade Upgrade)", "Not Sure"]}
                />
                <Select
                  id="fireRating"
                  label="Fire Rating Required"
                  value={form.fireRating}
                  onChange={set("fireRating")}
                  options={["None", "FD30", "FD60", "Not Sure"]}
                />
                <NavButtons />
              </div>
            )}

            {/* ──────── STEP 3 — Site Details ──────── */}
            {step === 2 && (
              <div className="flex flex-col gap-6">
                <Input
                  id="postcode"
                  label="Property Location / Postcode"
                  value={form.postcode}
                  onChange={set("postcode")}
                  placeholder="e.g. SW1A 1AA"
                />
                <Select
                  id="timeline"
                  label="Preferred Installation Timeline"
                  value={form.timeline}
                  onChange={set("timeline")}
                  options={["ASAP", "1-3 months", "3-6 months", "6+ months", "Just exploring"]}
                />
                <Select
                  id="budget"
                  label="Budget Indication"
                  value={form.budget}
                  onChange={set("budget")}
                  options={["Under \u00a35,000", "\u00a35,000-\u00a38,000", "\u00a38,000-\u00a312,000", "\u00a312,000+", "Prefer not to say"]}
                />
                <NavButtons />
              </div>
            )}

            {/* ──────── STEP 4 — Your Details + Review ──────── */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Input id="name" label="Full Name" value={form.name} onChange={set("name")} required />
                <Input id="phone" label="Phone Number" value={form.phone} onChange={set("phone")} type="tel" required />
                <Input id="email" label="Email Address" value={form.email} onChange={set("email")} type="email" required />
                <div className="flex flex-col gap-2">
                  <label htmlFor="notes" style={labelStyle}>
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    value={form.notes}
                    onChange={(e) => set("notes")(e.target.value)}
                    rows={4}
                    placeholder="Anything else we should know about your project"
                    style={inputStyle}
                  />
                </div>

                {/* Summary */}
                <div className="mt-6">
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 12,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#b8943f",
                    }}
                  >
                    Your Specification
                  </p>
                  <div
                    style={{
                      background: "rgba(26,26,24,0.02)",
                      border: "1px solid rgba(26,26,24,0.08)",
                      padding: "16px 20px",
                    }}
                  >
                    <SummaryRow label="Property Type" value={form.propertyType} />
                    <SummaryRow label="Project Type" value={form.projectType} />
                    {form.doorQuantity && <SummaryRow label="Number of Doors" value={form.doorQuantity} />}
                    <SummaryRow label="Installation" value={form.installationType} />
                    {form.width && <SummaryRow label="Width" value={`${form.width} mm`} />}
                    {form.height && <SummaryRow label="Height" value={`${form.height} mm`} />}
                    <SummaryRow label="Colour" value={form.colour === "Other" ? form.colourOther || "Other" : form.colour} />
                    <SummaryRow label="Glazing" value={form.glazing} />
                    <SummaryRow label="Hardware" value={form.hardware} />
                    <SummaryRow label="Security" value={form.security} />
                    <SummaryRow label="Fire Rating" value={form.fireRating} />
                    <SummaryRow label="Location" value={form.postcode} />
                    <SummaryRow label="Timeline" value={form.timeline} />
                    <SummaryRow label="Budget" value={form.budget} />
                  </div>
                </div>

                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#c44" }}>
                    Something went wrong. Please call us on 0800 861 1450.
                  </p>
                )}

                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={back}
                    className="transition-opacity duration-300 hover:opacity-70"
                    style={{
                      fontFamily: "var(--font-body), Montserrat, sans-serif",
                      fontWeight: 400,
                      fontSize: 11,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      padding: "16px 32px",
                      border: "1px solid rgba(26,26,24,0.15)",
                      background: "transparent",
                      color: "#1a1a18",
                      cursor: "pointer",
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-cta transition-colors duration-300 hover:bg-cream"
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
                    {status === "sending" ? "Sending..." : "Submit Estimate Request"}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
