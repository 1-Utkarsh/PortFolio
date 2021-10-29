 const slider1 = document.querySelector(".firstCarousel");
    const nextBtn1 = document.querySelector(".next-btn1");
    const prevBtn1 = document.querySelector(".prev-btn1");
    const slides1 = document.querySelectorAll(".slide1");
    const slideIcons1 = document.querySelectorAll(".slide-icon1");
    const numberOfSlides1 = slides1.length;
    var slideNumber1 = 0;

    //image slider next button
    nextBtn1.addEventListener("click", () => {
      slides1.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons1.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber1++;

      if(slideNumber1 > (numberOfSlides1 - 1)){
        slideNumber1 = 0;
      }

      slides1[slideNumber1].classList.add("active");
      slideIcons1[slideNumber1].classList.add("active");
    });

    //image slider previous button
    prevBtn1.addEventListener("click", () => {
      slides1.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons1.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber1--;

      if(slideNumber1 < 0){
        slideNumber1 = numberOfSlides1 - 1;
      }

      slides1[slideNumber1].classList.add("active");
      slideIcons1[slideNumber1].classList.add("active");
    });

    //image slider autoplay
    var playSlider1;

    var repeater1 = () => {
      playSlider1 = setInterval(function(){
        slides1.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons1.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber1++;

        if(slideNumber1 > (numberOfSlides1 - 1)){
          slideNumber1 = 0;
        }

        slides1[slideNumber1].classList.add("active");
        slideIcons1[slideNumber1].classList.add("active");
      }, 4000);
    }
    repeater1();

    //stop the image slider autoplay on mouseover
    slider1.addEventListener("mouseover", () => {
      clearInterval(playSlider1);
    });

    //start the image slider autoplay again on mouseout
    slider1.addEventListener("mouseout", () => {
      repeater1();
    });


    //-------------2---------------

    const slider2 = document.querySelector(".secondCarousel");
    const nextBtn2 = document.querySelector(".next-btn2");
    const prevBtn2 = document.querySelector(".prev-btn2");
    const slides2 = document.querySelectorAll(".slide2");
    const slideIcons2 = document.querySelectorAll(".slide-icon2");
    const numberOfSlides2 = slides2.length;
    var slideNumber2 = 0;

    //image slider next button
    nextBtn2.addEventListener("click", () => {
      slides2.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons2.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber2++;

      if(slideNumber2 > (numberOfSlides2 - 1)){
        slideNumber2 = 0;
      }

      slides2[slideNumber2].classList.add("active");
      slideIcons2[slideNumber2].classList.add("active");
    });

    //image slider previous button
    prevBtn2.addEventListener("click", () => {
      slides2.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons2.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber2--;

      if(slideNumber2 < 0){
        slideNumber2 = numberOfSlides2 - 1;
      }

      slides2[slideNumber2].classList.add("active");
      slideIcons2[slideNumber2].classList.add("active");
    });

    //image slider autoplay
    var playSlider2;

    var repeater2 = () => {
      playSlider2 = setInterval(function(){
        slides2.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons2.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber2++;

        if(slideNumber2 > (numberOfSlides2 - 1)){
          slideNumber2 = 0;
        }

        slides2[slideNumber2].classList.add("active");
        slideIcons2[slideNumber2].classList.add("active");
      }, 4000);
    }
    repeater2();

    //stop the image slider autoplay on mouseover
    slider2.addEventListener("mouseover", () => {
      clearInterval(playSlider2);
    });

    //start the image slider autoplay again on mouseout
    slider2.addEventListener("mouseout", () => {
      repeater2();
    });

    //--------------3---------------------
     const slider3 = document.querySelector(".thirdCarousel");
    const nextBtn3 = document.querySelector(".next-btn3");
    const prevBtn3 = document.querySelector(".prev-btn3");
    const slides3 = document.querySelectorAll(".slide3");
    const slideIcons3 = document.querySelectorAll(".slide-icon3");
    const numberOfSlides3 = slides3.length;
    var slideNumber3 = 0;

    //image slider next button
    nextBtn3.addEventListener("click", () => {
      slides3.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons3.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber3++;

      if(slideNumber3 > (numberOfSlides3 - 1)){
        slideNumber3 = 0;
      }

      slides3[slideNumber3].classList.add("active");
      slideIcons3[slideNumber3].classList.add("active");
    });

    //image slider previous button
    prevBtn3.addEventListener("click", () => {
      slides3.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons3.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber3--;

      if(slideNumber3 < 0){
        slideNumber3 = numberOfSlides3 - 1;
      }

      slides3[slideNumber3].classList.add("active");
      slideIcons3[slideNumber3].classList.add("active");
    });

    //image slider autoplay
    var playSlider3;

    var repeater3 = () => {
      playSlider3 = setInterval(function(){
        slides3.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons3.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber3++;

        if(slideNumber3 > (numberOfSlides3 - 1)){
          slideNumber3 = 0;
        }

        slides3[slideNumber3].classList.add("active");
        slideIcons3[slideNumber3].classList.add("active");
      }, 4000);
    }
    repeater3();

    //stop the image slider autoplay on mouseover
    slider3.addEventListener("mouseover", () => {
      clearInterval(playSlider3);
    });

    //start the image slider autoplay again on mouseout
    slider3.addEventListener("mouseout", () => {
      repeater3();
    });

    let homeLink = document.querySelector("#homeButton");
    let homeItem = document.querySelector("#home");

    let eduLink = document.querySelector("#eduButton");
    let eduItem = document.querySelector(".education");

    let projLink = document.querySelector("#projButton");
    let projItem = document.querySelector(".projects");

    let expLink = document.querySelector("#expButton");
    let expItem = document.querySelector(".experience");

    let galLink = document.querySelector("#galButton");
    let galItem = document.querySelector(".photoGallery");

    let perLink = document.querySelector("#perButton");
    let perItem = document.querySelector(".video-container");

    homeLink.addEventListener("click", goHome, false);
    function goHome(e) {
      homeItem.scrollIntoView({behavior: "smooth"});
    };
    
    eduLink.addEventListener("click", goEdu, false);
    function goEdu(e) {
      eduItem.scrollIntoView({behavior: "smooth"});
    };
    
    projLink.addEventListener("click", goProj, false);
    function goProj(e) {
      projItem.scrollIntoView({behavior: "smooth"});
    };
    
    expLink.addEventListener("click", goExp, false);
    function goExp(e) {
      expItem.scrollIntoView({behavior: "smooth"});
    };
    
    galLink.addEventListener("click", goGal, false);
    function goGal(e) {
      galItem.scrollIntoView({behavior: "smooth"});
    };
    
    perLink.addEventListener("click", goPer, false);
    function goPer(e) {
      perItem.scrollIntoView({behavior: "smooth"});
    };

// Drop Down in mobile responsive

function dropDownMenu() {
  var x = document.getElementById("myNav");

  if(x.className==="navbar")
  {
    x.className += " responsive"
  }
  else
  {
    x.className = "navbar";
  }
}