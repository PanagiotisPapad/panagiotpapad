export default function manifest() {
  return {
    name: "Blue Slide Studio",
    short_name: "Blue Slide",
    description:
      "Digital presence, branding, websites, software, and growth systems for modern brands with culture.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f5ee",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
