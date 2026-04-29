const baseUrl = "https://blueslide.gr";

const routes = ["", "/services", "/work", "/about", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
