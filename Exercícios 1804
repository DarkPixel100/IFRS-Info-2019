//Exercício 1:
var num;
num = Number(prompt("Digite um número:"));
if(num == 0)
{
	alert("É zero");
}
alert("O número digitado foi: "+num+'.');

//Exercício 2:
var nota1, nota2, nota3, nota4, freq;
nota1 = parseFloat(prompt("Digite a nota 1:"));
nota2 = parseFloat(prompt("Digite a nota 2:"));
nota3 = parseFloat(prompt("Digite a nota 3:"));
nota4 = parseFloat(prompt("Digite a nota 4:"));
freq = parseFloat(prompt("Digite a porcentagem de frequência:"));
if((nota1+nota2+nota3+nota4)/4 >= 7 && freq >= 75)
{
	alert("Você passou");
}
if((nota1+nota2+nota3+nota4)/4 < 7 || freq < 75)
{
	alert("Você rodou");
}

/*Exercício 3: Leia o nome de 2 times e o número de vitórias, empates e derrotas que estes times tiveram no campenonato, 
quem teve mais pontos? Mostre na tela, quem e quantos pontos o time ganhador teve.*/
var n1, n2, v1, e1, d1, v2, e2, d2, points1, points2;
n1 = prompt("Digite o nome do time 1:");
n2 = prompt("Digite o nome do time 2:");
v1 = parseInt(prompt("Digite o número de vitórias do "+n1+":"));
e1 = parseInt(prompt("Digite o número de empates do "+n1+":"));
d1 = parseInt(prompt("Digite o número de derrotas do "+n1+":"));
v2 = parseInt(prompt("Digite o número de vitórias do "+n2+":"));
e2 = parseInt(prompt("Digite o número de empates do "+n2+":"));
d2 = parseInt(prompt("Digite o número de derrotas do "+n2+":"));
points1 = v1*3 + e1;
points2 = v2*3 + e2;
if(points1 > points2)
{
    alert("O time "+n1+" ganha, tendo "+points1+" pontos.");
}
if(points1 < points2)
{
    alert("O time "+n2+" ganha, tendo "+points2+" pontos.");
}
if(points1==points2)
{
alert("Foi empate, ambos tiveram "+points1+" pontos.");
}
