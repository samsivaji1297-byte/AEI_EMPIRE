export function generateListicleItems(ir, count, wrapperTitle) {
  // Extract relevant IR fields
  const identity = ir.identityMechanics || [];
  const clusters = ir.psychologicalClusters || [];
  const rootNodes = ir.rootNodes || [];
  const baseNeeds = ir.baseNeeds || [];

  // Combine all IR fragments into a single pool
  const pool = [
    ...identity,
    ...clusters,
    ...rootNodes,
    ...baseNeeds
  ].map(item => clean(item));

  // If pool is empty, fallback to generic bullets
  if (pool.length === 0) {
    return Array.from({ length: count }, (_, i) => 
      `${i + 1}. ${fallbackLine(wrapperTitle)}`
    );
  }

  // Shuffle pool for variety
  const shuffled = shuffle(pool);

  // Take the first N items
  const selected = shuffled.slice(0, count);

  // Convert IR fragments → punchy bullets
  return selected.map(fragment => transform(fragment, wrapperTitle));
}

// --- Helpers ---

function clean(text) {
  return text
    .replace(/[\n\r]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function shuffle(arr) {
  return arr
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(obj => obj.x);
}

function transform(fragment, wrapperTitle) {
  // Hybrid bullet transformation
  return (
    fragment
      .replace(/^[-•*]\s*/, "") // remove bullet chars
      .replace(/\.$/, "")       // remove trailing period
      .trim()
  );
}

function fallbackLine(wrapperTitle) {
  return `A key insight about ${wrapperTitle.toLowerCase()}.`;
}
