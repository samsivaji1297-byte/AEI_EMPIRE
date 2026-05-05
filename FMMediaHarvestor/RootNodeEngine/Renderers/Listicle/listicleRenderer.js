export function renderListicle({ title, items, cta, bio }) {
  return {
    type: "listicle",
    slides: [
      {
        title,
        items,
        cta,
        bio
      }
    ]
  };
}
