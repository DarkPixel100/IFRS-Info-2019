/*Dado um número de 3 algarismos N = CDU (onde C é o algarismo das centenas, D é o algarismo das dezenas e U, o das unidades). Considere no número M, constituído pelos algarismos de N em ordem inversa, isto é M = UDC. Gerar M a partir de N.
Exemplo:
N = 321, M = 123*/
var n, m, c, d, u;
n = (prompt("Digite um número de 3 algarismos:"));
c = (n - n%100)/100
d = ((n - c*100) - ((n-c*100)%10))/10;
u = n - c*100 - d*10;
alert("Esse é o número invertido: " +u+ +d+ +c);

//Truncar um número decimal N em C casas decimais*/
var n, c, r;
n = parseInt(prompt("Digite um número inteiro:"));
c = parseInt(prompt("Digite um número inteiro:"));
r = n*Math.pow(10,-c);
alert("Resposta: " +r);

//Descobrir o número de movimentos em relação ao número de discos em uma torre de Hanoi;
var n, m;

n = parseInt(prompt("Digite um número inteiro:"));
m = Math.pow(2,n)-1;
alert("O númerod de moviemntos é: " +m);
