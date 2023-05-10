const h1 = document.getElementById("h1"),
  h4 = document.getElementById("h4");


/* price cards scroll animations*/


function revealPrice1() {
  var reveals = document.querySelectorAll(".revealPrice1");

  reveals.forEach(reveal => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 470;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

function revealPrice2() {
  var reveals = document.querySelectorAll(".revealPrice2");

  reveals.forEach(reveal => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 480;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}


/* scroll progress bar */
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = winScroll / height * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onscroll = function() {
  myFunction();
};

/* reveal of product container (first one)*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal-bottom");

  reveals.forEach(reveal => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 370;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

/*reveal for second product container*/

function reveal2() {
  var reveals = document.querySelectorAll(".reveal-bottom2");

  reveals.forEach(reveal => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 320;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}

/* reveal bottom for third product*/

function reveal3() {
  var reveals = document.querySelectorAll(".reveal-bottom3");

  reveals.forEach(reveal => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 390;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}


/*header paralax */

const onScrollH1 = event => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 350) {
    h1.style.opacity = 0;
    h1.style.translate = "0 -50px";
    h1.style.scale = "0.9";
  } else {
    h1.style.opacity = 1;
    h1.style.translate = 0;
    h1.style.scale = 1;
  }
};

const onScrollH4 = event => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 340) {
    h4.style.opacity = 0;
    h4.style.translate = "0 -20px";
    h4.style.scale = "0.8";
  } else {
    h4.style.opacity = 1;
    h4.style.translate = 0;
    h4.style.scale = 1;
  }
};

document.addEventListener("scroll", onScrollH1);
document.addEventListener("scroll", onScrollH4);

window.addEventListener("scroll", revealPrice1);
window.addEventListener("scroll", revealPrice2);

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
