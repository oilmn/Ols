//dark et light mod:
function toggleDarkLight() {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  };
  //change icon dark light:
let changeIcon = function(icon) {
  icon.classList.toggle("fa-sun");
};
  //swiper:
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
  });
//display => non-block page:
function btn1(){
     document.getElementById("b1").style.display="block";
     document.getElementById("b2").style.display="none";
     document.getElementById("b3").style.display="none";
}
function btn2(){
     document.getElementById("b1").style.display="none";
     document.getElementById("b2").style.display="block";
     document.getElementById("b3").style.display="none";
}
function btn3(){
     document.getElementById("b1").style.display="none";
     document.getElementById("b2").style.display="none";
     document.getElementById("b3").style.display="block";
};//tanbihat za2ir klicki 3la plus  :
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
};//hada landing dyal thmil page :
const b = document.querySelector('body') 
setTimeout(() => b.classList.remove('loading'), 3000)