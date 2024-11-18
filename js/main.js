(() => {
    console.log("IIFE Fired");

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


    const hotspots = document.querySelectorAll(".Hotspot");
  
    function showInfo(e) {

      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);

      gsap.to(selected, 1, {autoAlpha: 1});
    }
  
    function hideInfo(e) {

      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      gsap.to(selected, 1, {autoAlpha: 0});
    }
  
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  

  //3d model view arrey

  const hotspot = [
    {
        id: 'hotspot1',
        h2: 'Pulsebeats',
        p: 'Feel the pulse',
        image: 'images/EARBUDS.jpg',
    },
    {
        id: 'hotspot2',
        h2: 'Charging Points',
        p: 'Battery lasts up to 24 hours',
    },
    {
        id: 'hotspot3',
        h2: 'Premium Quality',
        p: 'Soft buds for comfort',
    },
    {
        id: 'hotspot4',
        h2: 'Microphone',
        p: 'With noise cancellation features',
    }
];

// Function to set header and text

hotspot.forEach(hotspot => {
    const button = document.getElementById(hotspot.id);
    if (button) {
        button.innerHTML = `
            <div class="HotspotAnnotation">
                ${hotspot.image ? `<img src="${hotspot.image}" alt="${hotspot.h2} image">` : ''}<br>
                <strong>${hotspot.h2}</strong><br>
                ${hotspot.p}
            </div>
        `;
    }
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




  })();