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
function filterCertificates(){
  let dropdown = document.getElementById('certificates');
  let value = dropdown.options[dropdown.selectedIndex].value;
  let showFrontEnd = document.getElementsByClassName("front-end");
  let showBackEnd = document.getElementsByClassName("back-end");
  let showFullStack = document.getElementsByClassName("full-stack");
  let showSEO = document.getElementsByClassName("SEO");
  if(value == 'frontend'){
    for(var i = 0; i <showBackEnd.length; i++){
      showBackEnd[i].classList.add('hidden');
    }
    for(var i = 0; i <showSEO.length; i++){
      showSEO[i].classList.add('hidden');
    }

    for(var i = 0; i <showFullStack.length; i++){
      showFullStack[i].classList.add('hidden');
    }

    console.log(showFrontEnd);
  } else if(value == 'backend'){
    //display only those with the class back-end
    for(var i = 0; i <showFrontEnd.length; i++){
      showFrontEnd[i].classList.add('hidden');
    }
    for(var i = 0; i <showSEO.length; i++){
      showSEO[i].classList.add('hidden');
    }

    for(var i = 0; i <showFullStack.length; i++){
      showFullStack[i].classList.add('hidden');
    }
  } else if(value == "SEO"){
    //display only those with the class SEO
    for(var i = 0; i <showFrontEnd.length; i++){
      showFrontEnd[i].classList.add('hidden');
    }
    for(var i = 0; i <showBackEnd.length; i++){
      showBackEnd[i].classList.add('hidden');
    }

    for(var i = 0; i <showFullStack.length; i++){
      showFullStack[i].classList.add('hidden');
    }
  } else if(value =="fullstack"){
    //display only those with the class of fullstack
    for(var i = 0; i <showFrontEnd.length; i++){
      showFrontEnd[i].classList.add('hidden');
    }
    for(var i = 0; i <showBackEnd.length; i++){
      showBackEnd[i].classList.add('hidden');
    }

    for(var i = 0; i <showSEO.length; i++){
      showSEO[i].classList.add('hidden');
    }
  } else {
    //display all
  }
}

function resetCertificates() {
  location.reload();
}