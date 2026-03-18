"use client";

import { useState, FormEvent } from "react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const body = new URLSearchParams();
      formData.forEach((value, key) => body.append(key, value.toString()));

      const res = await fetch("/form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
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
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 1.8,
            color: "#6b5a42",
          }}
        >
          We will be in touch shortly on the number provided.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input id="name" name="name" required placeholder="Your full name" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" style={labelStyle}>Phone Number</label>
        <input id="phone" name="phone" type="tel" required placeholder="Your phone number" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" style={labelStyle}>Email Address</label>
        <input id="email" name="email" type="email" required placeholder="Your email address" style={inputStyle} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="propertyType" style={labelStyle}>Property Type</label>
        <select id="propertyType" name="propertyType" required style={inputStyle}>
          <option value="">Select...</option>
          <option value="New Build">New Build</option>
          <option value="Period Property">Period Property</option>
          <option value="Contemporary Renovation">Contemporary Renovation</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="doorStyle" style={labelStyle}>Door Style Interest</label>
        <select id="doorStyle" name="doorStyle" required style={inputStyle}>
          <option value="">Select...</option>
          <option value="Contemporary">Contemporary</option>
          <option value="Traditional">Traditional</option>
          <option value="Double Doors">Double Doors</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea id="message" name="message" rows={4} placeholder="Tell us about your project" style={inputStyle} />
      </div>

      {status === "error" && (
        <p style={{ fontSize: 13, color: "#c44" }}>
          Something went wrong. Please call us on 0800 861 1450.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="transition-colors duration-300 hover:bg-cream mt-2"
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
