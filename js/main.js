(() => {
    console.log("IIFE Fired");


    
    
  //variables
    const hotspots = document.querySelectorAll(".Hotspot");
    //console.log(hotspots);
  
  
    //functions
  
    function showInfo(e) {
      //console.log("showInfo called");
      //console.log(e.currentTarget.slot);
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      //console.log(selected);
      gsap.to(selected, 1, {autoAlpha: 1});
    }
  
    function hideInfo(e) {
      //console.log("hideInfo called");
      let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
      gsap.to(selected, 1, {autoAlpha: 0});
    }
  
    //eventlisteners
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  
  })();