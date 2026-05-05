import { interpretWrapper } from "./Listicle/wrapperInterpreter.js";
import { generateListicleItems } from "./Listicle/listicleGenerator.js";
import { renderListicle } from "./Listicle/listicleRenderer.js";
import { renderCarousel } from "./Carousel/carouselRenderer.js";

export function renderContent({ wrapper, ir }) {
  // 1. Interpret wrapper
  const interpretation = interpretWrapper(wrapper);

  // If wrapper contains a number → listicle mode
  if (interpretation.format === "listicle") {
    const { count, title } = interpretation;

    // 2. Generate listicle items
    const items = generateListicleItems(ir, count, title);

    // 3. Build CTA (simple for now)
    const cta = "Follow for daily identity upgrades";

    // 4. Render single-slide listicle
    return renderListicle({
      title,
      items,
      cta,
      bio: "@yourhandle"
    });
  }

  // Otherwise → fallback to carousel mode
  return renderCarousel(ir);
}
