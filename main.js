let randomNumber1 = Math.floor((Math.random()*6) + 1);
let randomNumber2 = Math.floor((Math.random()*6) + 1);

let randomImage = "./images/dice" + randomNumber1 + ".png";
let randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src" , randomImage);
document.querySelector(".img2").setAttribute("src" , randomImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "It's a Tie!"
}
