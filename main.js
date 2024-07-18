var randomNumber1 = Math.floor(Math.random() * 6) + 1;//genarates random number from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png-dice6.png
var RandomImageSource = "images/" + randomDiceImage;//images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var RandomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomImageSource2);
// this code is same as upper one//



if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else 
{
    document.result = "Draw!"
}
