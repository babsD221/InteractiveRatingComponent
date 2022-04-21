
const ratings = document.querySelectorAll(".numberCircle");

ratingSelected = false;
ratings.forEach((element) => {
    element.addEventListener("click",() => {
        for(let rate of ratings) {
            if(rate.classList.contains("numberCircleSelected")) {
                rate.classList.remove("numberCircleSelected");
            }
        }
        console.log(element);
        element.classList.add("numberCircleSelected");
        ratingSelected = true;
    });
});


document.querySelector("button").addEventListener("click",()=>{
    if(!ratingSelected) {
        alert("Please select a rating");
        
    }
    else {
        document.querySelector(".ratings").classList.add("hideRatings");
        document.querySelector(".thanking").classList.remove("hideThanking");
    }

});