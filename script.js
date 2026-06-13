const hamburgur = document.getElementById("hamburgur");
console.log(hamburgur);

hamburgur.addEventListener("click", function(){
    hamburgur.classList.toggle("active");
});
window.addEventListener("load", () => {
    const titles = document.querySelector(".titles");
    titles.classList.add("show");
});

window.addEventListener("scroll",()=>{
    
  const scrollanimation = document.querySelector(".scrollanimation");
  const fadestick=document.querySelector(".fade-stick");
  const fadestick2=document.querySelector(".fade-stick2");
  const Quority = document.querySelector(".Quority");
  const rect = scrollanimation.getBoundingClientRect();
  const Quorityimage = document.querySelector(".Quorityimage");
  const Quoritytext = document.querySelector(".Quority-text");
  if(rect.top <= 100){
    const sectionTop = scrollanimation.offsetTop;
    const progress=(window.scrollY-sectionTop)/800;
    const fixedprogress = Math.max(0,Math.min(1,progress));
    fadestick.style.transform =`scaleX(${fixedprogress})`;
    fadestick2.style.transform =`scaleX(${fixedprogress})`;
    Quority.style.transform =`scaleX(${fixedprogress})`;
    Quorityimage.style.opacity =`${fixedprogress}`;
    Quorityimage.style.transform=`translateY(${50-fixedprogress*50}px)`
    Quoritytext.style.opacity=`${fixedprogress}`;
    Quoritytext.style.transform =`translateY(${50-fixedprogress*50}px)`



  }})