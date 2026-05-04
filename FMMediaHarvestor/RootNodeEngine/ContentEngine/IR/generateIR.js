export function generateIR({
    baseNeed,
    rootNode,
    psychologicalCluster,
    surfaceOverlay,
    wrapper,
    format,
    identityMechanic,
    distributionPhysics
}) {
    // -----------------------------
    // 1. Narrative Sequence
    // -----------------------------
    const narrativeSequence = {
        pain: `You’re dealing with: ${rootNode}.`,
        catalyst: `This happens because of: ${psychologicalCluster}.`,
        action: `Here’s how to move forward through the lens of ${surfaceOverlay}.`,
        transformation: `This shift activates: ${identityMechanic}.`,
        cta: `Apply this now to break the cycle.`
    };

    // -----------------------------
    // 2. Psychological Breakdown
    // -----------------------------
    const psychologicalBreakdown = {
        emotionalTruth: rootNode,
        identityShift: identityMechanic,
        competenceSignal: `This builds competence through ${surfaceOverlay}.`,
        progressSignal: `This creates measurable progress via ${format.type}.`,
        belongingTrigger: `People who resonate with ${rootNode} share this widely.`
    };

    // -----------------------------
    // 3. Renderer Mapping
    // -----------------------------
    const rendererMapping = {
        singlePage: {
            body: `
${wrapper}

1. ${narrativeSequence.pain}
2. ${narrativeSequence.catalyst}
3. ${narrativeSequence.action}
4. ${narrativeSequence.transformation}
5. ${narrativeSequence.cta}
            `.trim()
        },

        carousel: {
            slide1: wrapper,
            slide2: narrativeSequence.pain,
            slide3: narrativeSequence.catalyst,
            slide4: narrativeSequence.action,
            slide5: narrativeSequence.transformation,
            slide6: narrativeSequence.cta
        },

        reel: {
            scene1: wrapper,
            scene2: narrativeSequence.pain,
            scene3: narrativeSequence.action,
            scene4: narrativeSequence.transformation,
            scene5: narrativeSequence.cta
        },

        edit: {
            timeline: [
                { time: 0.0, text: wrapper },
                { time: 1.2, text: narrativeSequence.pain },
                { time: 2.4, text: narrativeSequence.action },
                { time: 3.6, text: narrativeSequence.transformation },
                { time: 4.8, text: narrativeSequence.cta }
            ]
        }
    };

    // -----------------------------
    // 4. Final IR Object
    // -----------------------------
    return {
        baseNeed,
        rootNode,
        psychologicalCluster,
        surfaceOverlay,
        wrapper,
        format,
        identityMechanic,
        distributionPhysics,
        narrativeSequence,
        psychologicalBreakdown,
        rendererMapping
    };
}
