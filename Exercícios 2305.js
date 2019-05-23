//Exercício 1:
var dia;
var n = parseInt(prompt("Digite um número de 0 a 6:"));
switch(n)
{
	case 0:
		dia = "Domingo";
		break;
	case 1:
        dia  = "Segunda";
        break;
    case 2:
        dia  = "Terça";
        break;
    case 3:
        dia  = "Quarta";
        break;
    case 4:
        dia  = "Quinta";
        break;
    case 5:
        dia  = "Sexta";
        break;
    case 6:
        dia  = "Sábado";
        break;
}
alert(dia);

//Exercício 2:
var text;
var d = parseInt(prompt("Digite um número de 0 a 6:"));
switch(d)
{
    case 1:
    case 2:
    case 3:
    default:
        text = "Não é fim de semana!";
        break;
    case 4:
    case 5:
        text = "Perto do fim de semana";
    case 0:
    case 6:
        text = "Fim de Semana";
}
alert(text);

//Exercício 3(calculadora com switch):
var nome;
var num_1;
var num_2;
var num_f;
var op;

nome = prompt("Digite o seu nome:");
alert("Ola "+nome+"! Essa é uma calculadora digital.");
alert("Ela realiza adição(+), subtração(-), multiplicação(*), divisão(/), potenciação(^) e raídicição (v ou V).");
op = prompt("Operação:");
switch(op)
{
    case '+':
        num_1 = Number(prompt("Primeiro número:"));
        num_2 = Number(prompt("Segundo número:"));
        num_f = num_1 + num_2;
        break;

    case '-':
        num_1 = Number(prompt("Primeiro número:"));
        num_2 = Number(prompt("Segundo número:"));
        num_f = num_1 - num_2;
        break;

    case '*':
        num_1 = Number(prompt("Primeiro número:"));
        num_2 = Number(prompt("Segundo número:"));
        num_f = num_1 * num_2;
        break;

    case '/':
        num_1 = Number(prompt("Primeiro número:"));
        num_2 = Number(prompt("Segundo número:"));
        num_f = num_1 / num_2;
        break;

    case '^':
        num_1 = Number(prompt("Primeiro número:"));
        num_2 = Number(prompt("Segundo número:"));
        num_f = Math.pow(num_1,num_2);
        break;

    case 'v':
    case 'V':
        num_1 = Number(prompt("Índice da raíz:"));
        num_2 = Number(prompt("Número dentro da raíz:"));
        num_f = Math.pow(num_2,(1/num_1));
        break;
}
alert("O resultado é " + num_f);

//Exercício 4:
var m = parseInt(prompt("Digite o mês(1-12):"));

switch(m)
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Esse mês tem 31 dias.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Esse mês tem 30 dias.");
        break;
    case 2:
        alert("Esse mês tem 28 dias.");
        break;
    default:
        alert("Esse número não representa nenhum mês.")
}
