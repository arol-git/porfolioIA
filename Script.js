// Typing effect
const text = "Étudiant en informatique / Développeur web";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

typeEffect();
// Animation au scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
  },
  {
    threshold: 0.1
  }
);
sections.forEach(section => {
  observer.observe(section);
});