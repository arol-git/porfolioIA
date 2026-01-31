// Animation au scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
// Effet clic sur la photo
const photo = document.querySelector(".profile-photo");

photo.addEventListener("click", () => {
  photo.classList.toggle("active");
});
const projectButtons = document.querySelectorAll(".btn-outline");

projectButtons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    alert("🚧 Projet en cours de développement !");
  });
});
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
