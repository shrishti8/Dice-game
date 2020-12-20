var n=Math.floor(Math.random()*6)+1;
var m=Math.floor(Math.random()*6)+1;
if(n==1)
{
document.querySelector(".img1").setAttribute("src","dice1.png");
}
else if(n==2)
{
  document.querySelector(".img1").setAttribute("src","dice2.png");
}
else if(n==3)
{
  document.querySelector(".img1").setAttribute("src","dice3.png");
}
else if(n==4)
{
  document.querySelector(".img1").setAttribute("src","dice4.png");
}
else if(n==5)
{
  document.querySelector(".img1").setAttribute("src","dice5.png");
}
else if(n==6)
{
  document.querySelector(".img1").setAttribute("src","dice6.png");
}
if(m==1)
{
document.querySelector(".img2").setAttribute("src","dice1.png");
}
else if(m==2)
{
  document.querySelector(".img2").setAttribute("src","dice2.png");
}
else if(m==3)
{
  document.querySelector(".img2").setAttribute("src","dice3.png");
}
else if(m==4)
{
  document.querySelector(".img2").setAttribute("src","dice4.png");
}
else if(m==5)
{
  document.querySelector(".img2").setAttribute("src","dice5.png");
}
else if(m==6)
{
  document.querySelector(".img2").setAttribute("src","dice6.png");
}
if(n>m)
{
  document.querySelector("h1").textContent="🚩 Player 1 wins";
}
else if(m>n)
{
  document.querySelector("h1").textContent="🚩 Player 2 wins";
}
else
{
  document.querySelector("h1").textContent="It's a tie";
}
