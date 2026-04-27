"use client";

import { useEffect } from "react";

/**
 * Tiny client island (~20 lines of runtime) that toggles
 * `data-nav-scrolled="true"` on the <body> element based on whether the
 * homepage hero is in view.
 *
 * The Nav itself is a pure server component. All visual state changes
 * (background colour, blur, border, link colour, hamburger colour) are
 * driven by CSS selectors on `body[data-nav-scrolled="true"]`. This
 * component carries zero rendering responsibility, so its bundle cost
 * is dominated by React + the IntersectionObserver call.
 *
 * On any page WITHOUT a `#hero` element, we eagerly set
 * `data-nav-scrolled="true"` so the nav is always solid (matches the
 * pre-fix behavior where Nav.tsx fell back to setScrolled(true)).
 */
export default function NavScrollState() {
  useEffect(() => {
    const body = document.body;
    const hero = document.getElementById("hero");
    if (!hero) {
      body.setAttribute("data-nav-scrolled", "true");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        body.setAttribute(
          "data-nav-scrolled",
          entry.isIntersecting ? "false" : "true"
        );
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return null;
}
