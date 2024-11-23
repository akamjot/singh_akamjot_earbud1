(() => {
    console.log("IIFE Fired");

    // ScrollTo Plugin

    gsap.registerPlugin(ScrollToPlugin);

    const navLinks = document.querySelectorAll("#main-header nav ul li a");

    function scrollLink(e) {
        console.log(e.currentTarget.hash);
       
        e.preventDefault();
        let selectedLink = e.currentTarget.hash;
        gsap.to(window , {duration: 1, scrollTo:{y: `${selectedLink}` , offsetY: 100}});
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", scrollLink);
    })

    // Animation

    const canvas = document.querySelector("#animation-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 185; //how many frame do we have

    const images = [];  //array to hold all images

    //create an object called buds to hold the current frame 
    const buds = {
        frame: 0
    }

    // run a for loop to populate image array
    for(let i =0; i < frameCount; i++){
        const img = new Image();
        img.src =`images/Untitled${(i + 1).toString().padStart(4, '0')}.png`;
        images.push(img)

    }

    // console.table(images);

    gsap.to(buds, {
        frame: 184,
        snap: "frame",
        scrollTrigger: {
            trigger: "#animation-view",
            pin: true,
            scrub: 1,
            markers: false,
            start: "top top"
        },
        onUpdate: render
    })
    images[0].addEventListener("load", render);

    function render(){
        context.clearRect(0,0, canvas.width, canvas.height);
        // console.log(buds.frame);
        console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }




  //3D model view 


//variables
const hotspots = document.querySelectorAll(".Hotspot");
  
const infoBoxes = [
  {
    title: 'Pulsebeats',
    text: 'Feel the pulse',
    image: 'images/logo_image.png'
  },
  {
    title: 'Charging Points',
    text: 'Battery lasts up to 24 hours',
    image: 'images/charging_point.png'
  },
  {
    title: 'Premium Quality',
    text: 'Soft buds for comfort',
    image: 'images/buds.png'
  },
  {
    title: 'Microphone',
    text: 'With noise cancellation features',
    image: 'images/mic.png'
  },
]

//functions

function loadInfo() {

  infoBoxes.forEach((infoBox, index) => {
  //console.log(index+1);
  let selected = document.querySelector(`#hotspot-${index+1}`);
  //console.log(selected);
  const titleElement = document.createElement("h2");
  titleElement.textContent = infoBox.title;

  const textElement = document.createElement("p");
  textElement.textContent = infoBox.text;

  const imageElement = document.createElement("img");
  imageElement.src = infoBox.image;

  selected.appendChild(titleElement);
  selected.appendChild(textElement);
  selected.appendChild(imageElement);



    //use slot vs id
    gsap.set(selected, { autoAlpha: 0, scale: 0.8 });
});
}

loadInfo();

function showInfo() {
let selected = document.querySelector(`#${this.slot}`);
gsap.to(selected, {
  duration: 1,
  autoAlpha: 1, // Fade in
  scale: 1,     // Scale up to normal size
  ease: "power2.out" // Smooth easing
});
}

function hideInfo() {
let selected = document.querySelector(`#${this.slot}`);
gsap.to(selected, {
  duration: 1,
  autoAlpha: 0, // Fade out
  scale: 0.8,   // Scale down slightly
  ease: "power2.in" // Smooth easing
});
}

// Add event listeners to hotspots
hotspots.forEach((hotspot) => {
hotspot.addEventListener("mouseenter", showInfo);
hotspot.addEventListener("mouseleave", hideInfo);
});

//Slider functionality

    const divisor = document.querySelector('#divisor');
    const slider = document.querySelector('#slider');
    const xray = document.querySelector('#xray');

    function moveDivisor() {
        console.log(slider.value);
        divisor.style.width = slider.value + '%';

    }

    slider.addEventListener("input", moveDivisor);



    window.addEventListener('DOMContentLoaded', () => {
        const paragraphs = document.querySelectorAll('.about-pulsebeats p, .about-case p, .about-xray p, .contact p');

        const images = document.querySelectorAll('.about-pulsebeats img, .xray img');

        const form = document.querySelectorAll('#form input[type="submit"], #form form input[type="text"], #form form textarea');
    
        paragraphs.forEach((paragraph) => {
          gsap.from(paragraph, {
            duration: 1,
            x: 200,
            autoAlpha: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none none',
            }
          });
        });

        images.forEach((image) => {
            gsap.from(image, {
              duration: 1,
              x: -200,
              autoAlpha: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none none',
              }
            });
          });

          form.forEach((form) => {
            gsap.from(form, {
              duration: 1,
              x: 200,
              autoAlpha: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: form,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none none',
              }
            });
          });
      });


  })();