import { interpretWrapper } from "./Listicle/wrapperInterpreter.js";
import { generateListicleItems } from "./Listicle/listicleGenerator.js";
import { renderListicle } from "./Listicle/listicleRenderer.js";
import { renderCarousel } from "./Carousel/carouselRenderer.js";

export function renderContent({ wrapper, ir }) {
  const interp = interpretWrapper(wrapper);

  if (interp.format === "listicle") {
    const items = generateListicleItems(ir, interp.count, interp.title);

    return renderListicle({
      title: `${interp.count} ${interp.title}`,
      items,
      cta: "Follow for daily identity upgrades",
      bio: "@yourhandle"
    });
  }

  return renderCarousel(ir);
}
