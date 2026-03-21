"use client";

import { useState, ReactNode } from "react";

interface ImageSkeletonProps {
  children: (props: {
    loaded: boolean;
    onLoad: () => void;
  }) => ReactNode;
  className?: string;
}

export default function ImageSkeleton({ children, className }: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className || ""}`}>
      {!loaded && (
        <div className="absolute inset-0 skeleton-shimmer rounded" />
      )}
      {children({
        loaded,
        onLoad: () => setLoaded(true),
      })}
    </div>
  );
}
