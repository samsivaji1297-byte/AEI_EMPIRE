export function interpretWrapper(wrapper) {
  if (!wrapper || typeof wrapper !== "string") {
    return { format: "carousel", title: "", count: null };
  }

  const trimmed = wrapper.trim();

  // Extract number (e.g., "5 signs your identity is outdated")
  const numberMatch = trimmed.match(/^\s*(\d+)\s+/);
  const count = numberMatch ? parseInt(numberMatch[1], 10) : null;

  // Clean title (remove number if present)
  const title = count
    ? trimmed.replace(/^\s*\d+\s*/, "").trim()
    : trimmed;

  return {
    format: count ? "listicle" : "carousel",
    title,
    count
  };
}
