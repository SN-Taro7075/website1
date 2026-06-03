const hamburgur = document.getElementById("hamburgur");
console.log(hamburgur);

hamburgur.addEventListener("click", function(){
    hamburgur.classList.toggle("active");
});
window.addEventListener("load", () => {
    const titles = document.querySelector(".titles");
    titles.classList.add("show");
});