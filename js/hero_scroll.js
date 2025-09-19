const hero = document.querySelector(".hero");
const quote = document.querySelector(".hero-big-quote");

const heroFadeStart = 0;     // scroll px where hero starts disappearing
const heroFadeEnd = 300;     // scroll px where hero stops disappearing
const quoteFadeStart = 50;   // scroll px where quote starts fading
const quoteFadeEnd = 300;    // scroll px where quote fully fades

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // --- Hero background disappearing (clip-path) ---
  let heroClip;
  if (scrollY <= heroFadeStart) {
    heroClip = 0;
  } else if (scrollY >= heroFadeEnd) {
    heroClip = heroFadeEnd - heroFadeStart;
  } else {
    heroClip = scrollY - heroFadeStart;
  }
  hero.style.clipPath = `inset(0 0 ${heroClip}px 0)`; // bottom-up disappearing

  // --- Quote fade out ---
  let opacity;
  if (scrollY <= quoteFadeStart) {
    opacity = 1;
  } else if (scrollY >= quoteFadeEnd) {
    opacity = 0;
  } else {
    opacity = 1 - (scrollY - quoteFadeStart) / (quoteFadeEnd - quoteFadeStart);
  }
  quote.style.opacity = opacity;
});
