import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahmed Adel Goda — Portfolio",
    short_name: "Ahmed Adel Goda",
    description:
      "Full-stack, machine learning, and embedded systems projects by Ahmed Adel Goda.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#2563eb",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
