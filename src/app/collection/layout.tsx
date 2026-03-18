import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Door Designs | SteelR Collection",
  description:
    "Browse the full SteelR collection of bespoke steel entrance doors. Contemporary and traditional designs fully bespoke to your specification. Nationwide installation.",
};

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
