var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const faders=document.querySelectorAll('.hideme');

const appearOptions = {};

const appearOnScroll = new IntersectionObserver(function(enteries,appearOnScroll) {
  enteries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});