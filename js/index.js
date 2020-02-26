var randvar=Math.random(1,6);
randvar=Math.floor(randvar*6)+1;
var randvar1=Math.random(1,6);
randvar1=Math.floor(randvar1*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randvar+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randvar1+".png");
if(randvar>randvar1)
{
  document.querySelector("h1").innerHTML="🎆Player1 Wins";
}
else if(randvar<randvar1)
{
    document.querySelector("h1").innerHTML="Player2 Wins🎆";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
