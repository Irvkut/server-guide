document.addEventListener("DOMContentLoaded", () => {

  const carousel =
    document.querySelector(
      "[data-server-carousel]"
    );

  if (!carousel) return;


  document
    .querySelector("[data-carousel-left]")
    ?.addEventListener(
      "click",
      () => {

        carousel.scrollBy({
          left: -440,
          behavior: "smooth"
        });

      }
    );


  document
    .querySelector("[data-carousel-right]")
    ?.addEventListener(
      "click",
      () => {

        carousel.scrollBy({
          left: 440,
          behavior: "smooth"
        });

      }
    );


  carousel.addEventListener(
    "wheel",
    event => {

      if (
        Math.abs(event.deltaY) >
        Math.abs(event.deltaX)
      ) {

        event.preventDefault();

        carousel.scrollLeft +=
          event.deltaY;

      }

    },
    { passive: false }
  );

});
