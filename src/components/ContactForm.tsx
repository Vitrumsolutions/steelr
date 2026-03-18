"use client";

import { useState, FormEvent } from "react";

const labelStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 200,
  fontSize: 9,
  letterSpacing: "0.3em",
  textTransform: "uppercase" as const,
  color: "#8a6f4e",
};

const inputStyle = {
  fontFamily: "var(--font-body), Montserrat, sans-serif",
  fontWeight: 200,
  fontSize: 13,
  color: "#1a1a18",
  background: "transparent",
  border: "1px solid rgba(26, 26, 24, 0.15)",
  padding: "14px 16px",
  width: "100%",
  borderRadius: 0,
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <h3
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 32,
            color: "#1a1a18",
          }}
        >
          Thank you
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body), Montserrat, sans-serif",
            fontWeight: 200,
            fontSize: 14,
            lineHeight: 1.8,
            color: "#8a6f4e",
          }}
        >
          Your enquiry has been received. A member of our team will be in touch
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Full Name */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Full Name</label>
        <input name="name" required style={inputStyle} />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Phone Number</label>
        <input name="phone" type="tel" required style={inputStyle} />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Email Address</label>
        <input name="email" type="email" required style={inputStyle} />
      </div>

      {/* Property Type */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Property Type</label>
        <select name="propertyType" required style={inputStyle}>
          <option value="">Select...</option>
          <option value="New Build">New Build</option>
          <option value="Period Property">Period Property</option>
          <option value="Contemporary Renovation">Contemporary Renovation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Door Style */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Door Style Interest</label>
        <select name="doorStyle" required style={inputStyle}>
          <option value="">Select...</option>
          <option value="Contemporary">Contemporary</option>
          <option value="Traditional">Traditional</option>
          <option value="Double Doors">Double Doors</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label style={labelStyle}>Message</label>
        <textarea name="message" rows={4} style={inputStyle} />
      </div>

      {/* Error */}
      {status === "error" && (
        <p style={{ fontSize: 13, color: "#c44" }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="transition-colors duration-300 hover:bg-cream mt-2"
        style={{
          background: "#c9a96e",
          color: "#1a1a18",
          fontFamily: "var(--font-body), Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: 10,
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
