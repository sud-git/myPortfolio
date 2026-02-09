import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");

  if (elements.length) {
    VanillaTilt.init(elements);
  }
}
