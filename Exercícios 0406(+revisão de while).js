//Exemplo de while(true):
alert("Digite 0 para sair:");
while(true)
{
    var num = Number(prompt("Número: "));
    if(num == 0 || isNaN(num))
    {
        var sair = prompt("Deseja sair?");
        if(sair == 'S' || sair == 's')
        {
            break;
        }
        else
        {
            continue;
        }
    }
    if(num%2 == 0)
    {
        alert("O dobro de "+num+" é: "+num*2);
    }
    else
    {
        alert("O triplo de "+num+" é: "+num*3);
    }
}
alert("FIM");

//Quando for um contador com um número fixo de repetições, usar "for", quando for algo ilimitado, como uma pergunta, usar "while".
//Contador até 10
//While
var c = 1;
while(c<=10)
{
    console.log(c);
    c++;
}

//Do...While:
var c = 1;
do
{
    console.log(c);
    c++;
}while(c<=10)

//For
for(c=0;c<=10;c++)
{
    console.log(c);
}

//Exercício 1:
for(var c1=1;c1<=10;c1++)
{
    console.log("Tabuada do "+c1+":");
    for(var c2=1;c2<=10;c2++)
    {
        console.log(c1+" X "+c2+" = "+c1*c2);
    }
}
//Exercício 2:
for(n = parseInt(prompt("Digite um número:")), s = "", c = 1;c <= n;c++)
{
    s += "*";
    console.log(s);
}
//Exercício 3:
for(n = parseInt(prompt("Digite um número:")), s = "", c = 1;c <= n;c++)
{
    s += "*";
    console.log(s);
}
//Exercício 4:
var n = parseInt(prompt("Digite um número:"));
var soma = 0;
var s = "";
for(c=n-1;c>=1;c--)
{
    if(n%c==0)
    {
        soma += c;
        s = c+" " + s;
    }
}
if(soma == n)
{
    alert("Esse número é perfeito, os seus divisores são: "+s+".");
}
else
{
    alert("Esse número não é perfeito, os seus divisores são: "+s+".");
}
