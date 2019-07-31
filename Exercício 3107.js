//Inverta uma palavra:
var x = prompt("Digite uma palavra:");
var y = "";
for(i=0;i<x.length;i++)
{
  y += x[x.length-(i+1)];
}
alert(y);
