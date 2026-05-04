export function renderCarousel(ir) {
    const slides = [];

    slides.push({
        title: ir.wrapper,
        body: ir.narrativeSequence.pain
    });

    slides.push({
        title: "Why this happens",
        body: ir.narrativeSequence.catalyst
    });

    slides.push({
        title: "What to do now",
        body: ir.narrativeSequence.action
    });

    slides.push({
        title: "What changes after",
        body: ir.narrativeSequence.transformation
    });

    slides.push({
        title: "Do this next",
        body: ir.narrativeSequence.cta
    });

    return slides;
}
