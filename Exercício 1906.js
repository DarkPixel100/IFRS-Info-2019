//Exercício 1(em aula):
var numl = parseInt(prompt("Digite um número:"));
var qi = 0;
var qt = 0;
var sp = 0;
var st = 0;
var med;
while (numl != 0)
{
  if (numl % 2 != 0)
  {
    qi++;
  }
  else if (numl % 2 == 0)
  {
    sp += numl;
  }
  qt++;
  st += numl;
  numl = parseInt(prompt("Digite um número:"));
}
med = st/qt;
alert("A soma de todos os pares digitados é igual a " + sp);
alert("A quantidade de números ímpares digitados é igual a " + qi);
alert("A média de todos os números digitados é igual a " + med);
//Lista:
//Exercício 1:
var num;
var sum;
var aux = 0;
while(aux<10)
{
  num = parseInt(prompt("Digite um número"));
  sum += num;
}
alert("A soma de todos os números digitados é igual a "+sum);
