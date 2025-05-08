const texts = ["Self[Tutorial]-Taught Web-developer.", "Professional code breaker aka Mr 404.", "I build projects."];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 50; // Speed of erasing
const delayBetweenTexts = 2000; // Delay between texts
const typingTextElement = document.getElementById("typing-text");

function type() {
  if (charIndex < texts[index].length) {
    typingTextElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typingTextElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenTexts);
});