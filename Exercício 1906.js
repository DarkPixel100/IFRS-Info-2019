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
var sum = 0;
var aux = 0;
while(aux<10)
{
  num = Number(prompt("Digite um número"));
  sum += num;
  aux++;
}
alert("A soma de todos os números digitados é igual a "+sum);
//Exercício 2:
var med, c;
var sum = 0;
var sqsum = 0;
var aux = 1;
c = parseInt(prompt("Digite até onde irá a contagem, partindo de 1:"));
while(aux <= c)
{
    sum += aux;
    sqsum += Math.pow(aux,2);
    aux++;
}
med = sum/c;
alert("A soma de todos os números até o que vc digitou é igual a "+sum+". A soma dos quadrados é igual a "+sqsum+". E a média desses números é igual a "+med+".");
//Exercício 3:
var sq;
var c = Number(prompt("Digite um número. Caso ele seja positivo, o seu quadrado será apresentado, caso seja negativo, nada será apresentado e o programa terminará."));
while(c >= 0)
{
    sq = Math.pow(c,2);
    alert("O quadrado do número digitado é igual a "+sq+".");
    c = Number(prompt("Digite um número. Caso ele seja positivo, o seu quadrado será apresentado, caso seja negativo, nada será apresentado e o programa terminará."));
}
//Exercício 4:
var x, y;
x = Number(prompt("Digite um X para a função F(x)=x-5x+6"));
while(x != 0)
{
    y = ((-4*x) + 6);
    alert("F(x) = "+y+".");
    x = Number(prompt("Digite um X para a função F(x)=x-5x+6"));
}
//Exercício 5:
var nome, quantT, quantPM, price;
var tprice= 0;
var aux = 0;
quantT = parseInt(prompt("Digite a quantidade total de mercadorias vendidas no mês:"));
while(aux < quantT)
{
    nome = prompt("Digite o nome da mercadoria:");
    quantPM = parseInt(prompt("Digite a quantidade dessa mercadoria vendida:"));
    price = parseFloat(prompt("Digite o preço unitário dessa mercadoria:"));
    tprice += (price*quantPM);
    aux += quantPM;
    if(aux > quantT)
    {
        alert("A quantidade de vendas digitada é incompatível com a quantidade máxima de vendas do mês.");
        break;
    }
}
alert("O faturamento total do Mês será de R$"+tprice.toFixed(2)+".");
//Exercício 6:
var num = 15;
while(num <= 200)
{
    alert("O quadrado de "+num+" é igual a "+Math.pow(num,2)+".");
    num++;
}
//Exercício 7:
var num = parseInt(prompt("Digite um número de 1 a 10"));
var aux = 1;
while(aux <= 10)
{
    alert(num+"x"+aux+"="+num*aux);
    aux++;
}
//Exercício 8:
var c = 1;
var sum = 0;
while(c <= 500)
{
    if(c%2 == 0)
    {
        sum += c;
    }
    c++;
}
alert("A soma de todos os valores pares dos números de 1 a 500 é igual a "+sum+".");
//Exercício 9:
alert("Esse programa mostrará todos os números ímpares de 0 a 20.");
var c = 0;
while(c<=20)
{
    if(c%2 != 0)
    {
        alert(c);
    }
    c++;
}
//Exercício 10:
alert("Esse programa apresentará todas as potências de 3, com o expoente variano de 0 até 15.");
var exp = 0;
while(exp <=15)
{
    alert(Math.pow(3,exp));
    exp++
}
//Exercício 11:
var n = parseInt(prompt("Digite um número. Será apresentado N!"));
var c = 1;
var aux = 1;
if(n == 0)
{
    alert("1");
}
else
{
    while(c <= n)
    {
        aux *= c;
        c++;
    }
    alert(aux);
}
//Exercício 12:
var n;
var h = 0;
var c = 1;
n = parseInt(prompt("Digite um número, será apresentado um valor representado por 1 + 1/2 + 1/3... + 1/N"));
while(c <= n)
{
    h += (1/c);
    c++;
}
alert(h);
