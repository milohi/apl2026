var pics = [
    "Mamiya/Mamiya 1.png",
    "Mamiya/Mamiya 2.png",
    "Mamiya/Mamiya 3.png",
    "Mamiya/Mamiya 4.png",
    "Mamiya/Mamiya 5.jpg",
    "Mamiya/Mamiya 6.jpg",
    "Mamiya/Mamiya 7.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
    if (counter === 7) {
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
    
});
