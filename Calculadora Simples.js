var nome;
var num_1;
var num_2;
var num_f;
var op;

nome = prompt("Digite o seu nome");
alert("Ola "+nome+"! Essa é uma calculadora digital");
alert("Ela realiza as 4 operações básicas(adição, subtração, multiplicação e divisão)");
num_1 = Number(prompt("Primeiro número: "));
op = prompt("operação");
num_2 = Number(prompt("Segundo número: "));

if(op == '+')
{
    num_f = num_1 + num_2;
}
if(op == '-')
{
    num_f = num_1 - num_2;
}
if(op == '*')
{
    num_f = num_1 * num_2;
}
if(op == '/')
{
    num_f = num_1 / num_2;
}
alert("Este é o resultado: " + num_f);
