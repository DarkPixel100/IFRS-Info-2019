var nome;
var num_1;
var num_2;
var num_f;
var op;

nome = prompt("Digite o seu nome");
alert("Ola "+nome+"! Essa é uma calculadora digital");
alert("Ela realiza adição(+), subtração(-), multiplicação(*), divisão(/), potenciação(^) e raídicição (v ou V).");
op = prompt("Operação:");

if(op == '+' || op == "adição" || op == "Adição" || op == "adicão" || op == "Adicão" || op == "adicao" || op == "Adicao")
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 + num_2;
}
if(op == '-' || op == "subtração" || op == "Subtração" || op == "subtracão" || op == "Subtracão" || op == "subtracao" || op == "Subtracao")
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 - num_2;
}
if(op == '*' || op == "multiplicação" || op == "Multiplicação" || op == "multiplicacão" || op == "Multiplicacão" || op == "multiplicacao" || op == "Multiplicacao")
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 * num_2;
}
if(op == '/' || op == "divisão" || op == "Divisão" || op == "divisao" || op == "Divisao")
{
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = num_1 / num_2;
}
if (op == '^' || op == "potenciação" || op == "Potenciação" || op == "potenciacão" || op == "Potenciacão" || op == "potenciacao" || op == "Potenciacao") {
    num_1 = Number(prompt("Primeiro número:"));
    num_2 = Number(prompt("Segundo número:"));
    num_f = Math.pow(num_1,num_2);
}
if (op == 'v' || op == 'V' || op == "radiciação" || op == "Radiciação" || op == "radiciacão" || op == "Radiciacão" || op == "radiciacao" || op == "Radiciacao") {
    num_1 = Number(prompt("Índice da raíz:"));
    num_2 = Number(prompt("Número dentro da raíz:"));
    num_f = Math.pow(num_2,(1/num_1));
}
alert("O resultado é " + num_f);
