var imgs=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var points=[1,2,3,4,5,6]
var p1=Math.floor(Math.random()*imgs.length);
var p2=Math.floor(Math.random()*imgs.length);

document.querySelector(".img1").setAttribute("src",imgs[p1]);
document.querySelector(".img2").setAttribute("src",imgs[p2]);  
var pp1=points[p1];
var pp2=points[p2];
if (pp1>pp2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if (pp1===pp2){
    document.querySelector("h1").innerHTML="Its a tie!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won";
}

    
