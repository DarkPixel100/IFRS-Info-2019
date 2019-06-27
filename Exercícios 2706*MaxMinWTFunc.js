//Exercício 1:
var c = 1;
var auxS = "1";
var n = parseInt(prompt("Digite um número natural(Será apresentada uma sequencia de 1² a N²):"));
while(c<n)
{
  c++;
  auxS += ", "+c*c;
}
alert(auxS);
//Exercício 2(MaxMinWTFunc):
var n = parseInt(prompt("Digite um número:"));
var max = n;
var min = n;
while(n != 0)
{
  if(n > max)
  {
    max = n;
  }
  else if(n < min)
  {
    min = n;
  }
  n = parseInt(prompt("Digite um número:"));
}
alert("Menor:"+min+" Maior:"+max);
