export function generateListicleItems(ir, count, title) {
  const identity = ir.identityMechanics || [];
  const clusters = ir.psychologicalClusters || [];
  const rootNodes = ir.rootNodes || [];
  const baseNeeds = ir.baseNeeds || [];

  const pool = [
    ...identity,
    ...clusters,
    ...rootNodes,
    ...baseNeeds
  ]
    .map(clean)
    .filter(Boolean);

  if (pool.length === 0) {
    return Array.from({ length: count }, () =>
      `A core insight about ${title.toLowerCase()}.`
    );
  }

  const shuffled = shuffle(pool);
  const selected = shuffled.slice(0, count);

  return selected.map(fragment => transform(fragment));
}

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

function transform(fragment) {
  return fragment
    .replace(/^[-•*]\s*/, "")
    .replace(/\.$/, "")
    .trim();
}
