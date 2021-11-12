function move_to_right() {
    
    document.getElementById("sliderImg").src="";
}

function moveToLeft() {
    document.getElementById("sliderImg").src ="./images/99d61c75cf0714b3a913571b36eff76b.jpg";
}
let counter = 0;
let maximSetInterval = setInterval(() => {
    console.log(counter);
    counter++;
    if (counter >= 8) {
        clearInterval(maximSetInterval);
    }
}, 1000);