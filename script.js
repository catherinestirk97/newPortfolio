let i = 0;
let txt = "Hi, I'm Cat."; /* The text */
let speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animated-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function scrollToAbout() {
    document.querySelector('.about').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
}

function scrollToProjects() {
    document.querySelector('.projects').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
}

function scrollToContact() {
    document.querySelector('.contact').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
}