const hamburgur = document.getElementById("hamburgur");
console.log(hamburgur);

hamburgur.addEventListener("click", function(){
    hamburgur.classList.toggle("active");
});