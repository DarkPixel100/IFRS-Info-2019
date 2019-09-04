//Exercício 1:
var n1, n2, res;
n1 = parseInt(prompt("Digite o primeiro número:"));
n2 = parseInt(prompt("Digite o segundo número:"));
if(n1 > n2)
{
    res = n1 - n2;
}
if(n2 > n1)
{
    res = n2 - n1;
}
alert("A diferença do maior pelo menor é "+res);
//Exercício 2:
var num;
num = parseInt(prompt("Digite um número(Faixa permitida: entre 1-9)"));
if(num<=9 && num>=1)
{
    alert("O valor está na faixa permitida");
}
else
{
    alert("O valor está fora da faixa permitida");
}
//Exercício 3:
var num;
num = parseInt(prompt("Digite um número de 0 a 10:"));
if(num >= 0 && num <=10)
{
    if(num == 0)
    {
        alert("O número por extenso é Zero");
    }
    else if(num == 1)
    {
        alert("O número por extenso é Um");
    }
    else if(num == 2)
    {
        alert("O número por extenso é Dois");
    }
    else if(num == 3)
    {
        alert("O número por extenso é Três");
    }
    else if(num == 4)
    {
        alert("O número por extenso é Quatro");
    }
    else if(num == 5)
    {
        alert("O número por extenso é Cinco");
    }
    else if(num == 6)
    {
        alert("O número por extenso é Seis");
    }
    else if(num == 7)
    {
        alert("O número por extenso é Sete");
    }
    else if(num == 8)
    {
        alert("O número por extenso é Oito");
    }
    else if(num == 9)
    {
        alert("O número por extenso é Nove");
    }
    else
    {
        alert("O número por extenso é Dez");
    }
    }
    else
    {
        alert("O número não está na faixa de 0 a 10");
    }
//Exercício 4:
var age;
age = parseInt(prompt("Digite a idade da pessoa:"));
if(age<16)
{
alert("Não eleitor");
}
else if(age<65 && age>=18)
{
alert("Eleitor obrigatório");
}
else if(age>=16 && age<18 || age>=65)
{
alert("Eleitor facultativo");
}
//Exercício 5:
var n1, n2, n3, n4;
var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;
n1 = parseInt(prompt("Digite o primeiro número:"));
n2 = parseInt(prompt("Digite o segundo número:"));
n3 = parseInt(prompt("Digite o terceiro número:"));
n4 = parseInt(prompt("Digite o quarto número:"));
if(n1%2==0 || n1%3==0)
{
    b1 = true;
}
if(n2%2==0 || n2%3==0)
{
    b2 = true;
}
if(n3%2==0 || n3%3==0)
{
    b3 = true;
}
if(n4%2==0 || n4%3==0)
{
    b4 = true;
}
if(b1 && b2 && b3 && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+", "+n2+", "+n3+" e "+n4);
}
else if (b1 && b2 && b3 && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+", "+n2+" e "+n3);
}
else if (b1 && b2 && b3 == false && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+" e "+n2);
}
else if (b1 && b2 == false && b3 == false && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1);
}
else if (b1 == false && b2 ==false && b3 == false && b4 == false)
{
    alert("Não existem números por 2 ou 3 dentre os citados");
}
else if (b1 == false && b2 ==false && b3 == false && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n4);
}
else if (b1 == false && b2 ==false && b3 && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n3+" e "+n4);
}
else if (b1 == false && b2 && b3 && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n2+", "+n3+" e "+n4);
}
else if (b1 && b2 && b3 == false && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+", "+n2+" e "+n4);
}
else if (b1 && b2 ==false && b3 && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+", "+n3+" e "+n4);
}
else if (b1 && b2 == false && b3 == false && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n2+" e "+n3);
}
else if (b1 == false && b2 && b3 && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n2+" e "+n3);
}
else if (b1 == false && b2 ==false && b3 && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n3);
}
else if (b1 == false && b2 && b3 == false && b4 == false)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n2);
}
else if (b1 == false && b2 && b3 == false && b4)
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n2+" e "+n4);
}
else
{
    alert("Os números divisíveis por 2 ou por 3 são: "+n1+" e "+n3);
}
//Exercício 6:
var num, nhalf, nsqrd;
num = parseFloat(prompt("Digite um número:"));
nhalf = num/2;
nsqrd = Math.pow(num,2);
if(num>0)
{
    alert(nhalf);
}
if(num<0)
{
    alert(nsqrd);
}
//Exercício 7:
var n1, n2, n3, n4, n5, maior, menor;
n1 = parseInt(prompt("Digite o primeiro número:"));
n2 = parseInt(prompt("Digite o segundo número:"));
n3 = parseInt(prompt("Digite o terceiro número:"));
n4 = parseInt(prompt("Digite o quarto número:"));
n5 = parseInt(prompt("Digite o quinto número:"));
/*maior = Math.max(n1, n2, n3, n4, n5);
menor = Math.min(n1, n2, n3, n4, n5);*/
if((n1>n2 && n1>n3 && n1>n4 && n1>n5) && (n2<n1 && n2<n3 && n2<n4 && n2<n5)){}
if((n1>n2 && n1>n3 && n1>n4 && n1>n5) && (n3<n1 && n3<n2 && n3<n4 && n3<n5)){}
if((n1>n2 && n1>n3 && n1>n4 && n1>n5) && (n4<n1 && n4<n3 && n4<n2 && n4<n5)){}
if((n1>n2 && n1>n3 && n1>n4 && n1>n5) && (n5<n1 && n5<n3 && n5<n4 && n5<n2)){}

if((n2>n1 && n2>n3 && n2>n4 && n2>n5) && (n1<n2 && n2<n3 && n2<n4 && n2<n5)){}
if((n2>n1 && n2>n3 && n2>n4 && n2>n5) && (n3<n1 && n3<n2 && n3<n4 && n3<n5)){}
if((n2>n1 && n2>n3 && n2>n4 && n2>n5) && (n4<n1 && n4<n3 && n4<n2 && n4<n5)){}
if((n2>n1 && n2>n3 && n2>n4 && n2>n5) && (n5<n1 && n5<n3 && n5<n4 && n5<n2)){}
alert("O maior número entre os digitados é "+maior+" e o menor é "+menor+".");
//Exercício 8:
var num;
num = parseInt(prompt("Digite um número:"));
if (num<=3)
{
    alert(num);
}
//Exercício 9:
var ano;
ano = parseInt(prompt("Digite um ano:"));
if(ano>1584 && ano%4==0 && ano%100!=0 || ano%400==0)
{
    alert("É bissexto.");
}
else
{
    alert("Não é bissexto.");
}
//Exercício 10:
var price, code;
price = parseFloat(prompt("Digite o preço do produto:"));
code = parseFloat(prompt("Digite o código do produto:"));
if(code == 1)
{
    alert("O preço do produto é R$"+price.toFixed(2)+" e ele vem do Norte.");
}
else if(code == 2 || code == 5 || code== 9)
{
    alert("O preço do produto é R$"+price.toFixed(2)+" e ele vem do Sul.");
}
else if(code == 3 || (code>=10 && code<=15))
{
    alert("O preço do produto é R$"+price.toFixed(2)+" e ele vem do Leste.");
}
else if(code == 7 || code == 20)
{
    alert("O preço do produto é R$"+price.toFixed(2)+" e ele vem do Oeste.");
}
else
{
    alert("O preço do produto é R$"+price.toFixed(2)+" e ele é importado.");
}
//Exercício 11:
var num;
num = Number(prompt("Digite um número:"));
if (num%3==0)
{
    alert("É múltiplo de 3");
}
else
{
    alert("Não é múltiplo de 3");
}
/*
var num, aux;
num = Number(prompt("Digite um número:"));
aux = Math.round(Math.random());
if (aux == 0)
{
    alert("É múltiplo de 3");
}
else
{
    alert("Não é múltiplo de 3");
}
*/
//Exercício 12:
var n1, n2;
n1 = Number(prompt("Digite o primeiro número:"));
n2 = Number(prompt("Digite o segundo número:"));
if ((n1/n2)==parseInt(n1/n2))
{
    alert("A divisão de "+n1+" por "+n2+" é exata");
}
//Exercício 13:
var price, svalue;
price = parseFloat(prompt("Digite o preço do produto;"));
if(price < 20)
{
    svalue = price + ((price*45)/100);
}
else
{
    svalue = price + ((price*30)/100);
}
alert("O valor da venda deverá ser R$"+svalue.toFixed(2)+".");
//Exercício 14:
var satm, pctg, nsal;
satm = parseFloat(prompt("Digite o salário do funcionário:"));
if (satm >=0 && satm <= 400)
{
pctg = 15;
}
if (satm >400 && satm <= 700)
{
pctg = 12;
}
if (satm >700 && satm <= 1000)
{
pctg = 10;
}
if (satm >1000 && satm <= 1800)
{
pctg = 7;
}
if (satm >1800 && satm <= 2500)
{
pctg = 5;
}
if (satm >2500)
{
pctg = 0;
}
nsal = satm + ((satm*pctg)/100);
alert("A porcentagem de aumento do salário será de "+pctg+"% e o novo salário será de R$"+nsal+".");
//Exercício 15:
var sal, vprest;
sal = parseFloat(prompt("Digite valor do salário bruto"));
vprest = parseFloat(prompt());
if(sal*0.30 >= vprest)
{
    alert("O emprestimo pode ser feito.")
}
else
{
    alert("O emprestimo não pode ser feito");
}
