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
