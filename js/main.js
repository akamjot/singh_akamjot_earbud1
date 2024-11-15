(() => {
    console.log("IIFE Fired");

    
  //variables
    const hotspots = document.querySelectorAll(".Hotspot");

  
    //functions
  
    function showInfo(e) {

      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);

      gsap.to(selected, 1, {autoAlpha: 1});
    }
  
    function hideInfo(e) {

      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      gsap.to(selected, 1, {autoAlpha: 0});
    }
  
    //eventlisteners
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  


  const hotspot = [
    {
        id: 'hotspot1',
        h2: 'Pulsebeats',
        p: 'Feel the pulse',
        img: 'img/EARBUDS.jpg',
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
                ${hotspot.img ? `<img src="${hotspot.img}" alt="${hotspot.h2} image">` : ''}<br>
                <strong>${hotspot.h2}</strong><br>
                ${hotspot.p}
            </div>
        `;
    }
});

    const divisor = document.querySelector('#divisor');
    const slider = document.querySelector('#slider');
    const xray = document.querySelector('#xray');

    function moveDivisor() {
        console.log(slider.value);
        divisor.style.width = slider.value + '%';

    }

    slider.addEventListener("input", moveDivisor);

  })();