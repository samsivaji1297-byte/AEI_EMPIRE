export function renderCarousel(ir) {
  const slides = [];

  slides.push({
    title: ir.wrapper,
    items: [
      ir.narrativeSequence.pain,
      ir.psychologicalBreakdown.emotionalTruth
    ],
    cta: ""
  });

  slides.push({
    title: "Why this keeps happening",
    items: [
      ir.narrativeSequence.catalyst,
      ir.psychologicalBreakdown.belongingTrigger
    ],
    cta: ""
  });

  slides.push({
    title: "What to do now",
    items: [
      ir.narrativeSequence.action,
      ir.psychologicalBreakdown.competenceSignal
    ],
    cta: ""
  });

  slides.push({
    title: "What changes after",
    items: [
      ir.narrativeSequence.transformation,
      ir.psychologicalBreakdown.identityShift
    ],
    cta: ""
  });

  slides.push({
    title: "Do this next",
    items: [
      ir.narrativeSequence.cta,
      "Anchor this as your new default identity."
    ],
    cta: "The reset is in my bio."
  });

  return slides;
}
