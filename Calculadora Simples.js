var nome;
var num_1;
var num_2;
var num_f;
var op;

nome = prompt("Digite o seu nome");
alert("Ola "+nome+"! Essa é uma calculadora digital");
alert("Ela realiza adição(+), subtração(-), multiplicação(*), divisão(/), potenciação(^) e raíz quadrada(R).");
op = prompt("Operação:");

if(op == '+')
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 + num_2;
}
if(op == '-')
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 - num_2;
}
if(op == '*')
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 * num_2;
}
if(op == '/')
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 / num_2;
}
if (op == '^') {
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = Math.pow(num_1,num_2);
}
if (op == 'R') {
    num_1 = Number(prompt("Número:"));
    num_f = Math.sqrt(num_1);
}
alert("O resultado é " + num_f);
