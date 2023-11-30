document.addEventListener("DOMContentLoaded", revealText);
window.addEventListener("load", revealText);

// Add a scroll event listener
window.addEventListener('scroll', function() {
  revealTextOnScroll();
});

function revealText() {
  const slogans = document.querySelectorAll(".slogan, .heading, .great");

  slogans.forEach((slogan, index) => {
    setTimeout(() => {
      slogan.style.opacity = "1";
    }, index * 1000); // Adjust the delay (1000ms = 1s) as needed
  });
}

function revealTextOnScroll() {
  const revealTrigger = document.querySelector("#revealTrigger");

  if (isElementInViewport(revealTrigger)) {
    revealText();
    // Remove the scroll event listener once the text is revealed (optional)
    window.removeEventListener('scroll', revealTextOnScroll);
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    function handleScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                (scrollPosition > sectionTop - window.innerHeight + sectionHeight / 2) &&
                (scrollPosition < sectionTop + sectionHeight)
            ) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    // Initial check in case elements are already visible on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
});
