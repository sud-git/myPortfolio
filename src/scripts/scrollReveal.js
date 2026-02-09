import ScrollReveal from "scrollreveal";

export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

  const sr = ScrollReveal(defaultProps);

  targetElements.forEach(({ element, animation }) => {
    sr.reveal(element, animation);
  });
}
