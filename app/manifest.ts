import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HuskyNZ | Peter Gallwas",
    short_name: "HuskyNZ",
    icons: [
      {
        src: "https://serv.husky.nz/logo/default.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
  };
}
