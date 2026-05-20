"use client";

import { useEffect } from "react";

// Tiny client component whose sole job is to toggle `body[data-scrolled]` so
// the server-rendered Nav can theme itself via CSS without bringing the whole
// nav into the client JS bundle.
//
// Default state. The body ships with `data-scrolled` attribute server-side
// (set in src/app/layout.tsx). This means the SSR HTML on every page is
// already in the cream/dark-text "scrolled" theme, which is the correct
// resting state on every route except the homepage. No flash of invisible
// nav between paint and hydration on the 312 non-homepage routes.
//
// Homepage behaviour. The homepage renders a `#hero` element. This component
// observes it and *removes* the attribute while the hero is intersecting the
// viewport, returning the nav to the transparent/light theme that sits over
// the hero image. Once the user scrolls past the hero, the attribute is
// reinstated and the nav resumes the cream/dark theme.
//
// Non-homepage behaviour. No `#hero` exists, so the observer is never set up.
// The body attribute stays as-is from the SSR render and the nav stays in
// the cream/dark theme.
export default function NavScrollState() {
  useEffect(() => {
    const set = (val: boolean) => {
      if (val) {
        document.body.dataset.scrolled = "true";
      } else {
        delete document.body.dataset.scrolled;
      }
    };

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => set(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return null;
}
