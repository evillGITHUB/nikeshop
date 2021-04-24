window.onload = function(){
    gsap.from(".nike",{
      delay:0.5,
      duration:1,
      y:700,
      ease:"elastic"
    });

  gsap.to(".logo",{
    delay:0.5,
      duration:1,
      y:1,
      ease:"elastic"
  });

    gsap.to(".b1",{
      delay:0.5,
      duration:1,
      y:150,
      ease:"elastic"
    });
    gsap.to(".b2",{
      delay:1,
      duration:1,
      y:150,
      ease:"elastic"
    });
    gsap.to(".b3",{
      delay:1.5,
      duration:1,
      y:150,
      ease:"elastic"
    })
}


