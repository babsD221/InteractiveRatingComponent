
for(let i = 0;i<5;i++) {
    document.querySelectorAll(".numberCircle")[i].addEventListener("click",
    function(){
        document.querySelectorAll(".numberCircle")[i].classList.add("numberCircleSelected");
    });
}