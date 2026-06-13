window.addEventListener("load",()=>{
  const text1 = document.querySelector(".text-h2-0");
  const wipe1 = document.querySelector(".wipe1");
  const text2 = document.querySelector(".text-h2-1");
  const wipe2 = document.querySelector(".wipe2");
  wipe1.classList.add("show");
  wipe2.classList.add("show");


  setTimeout(()=>{
    text1.classList.add("show");
    wipe1.classList.add("hide");
    text2.classList.add("show");
    wipe2.classList.add("hide");

  },600);
});