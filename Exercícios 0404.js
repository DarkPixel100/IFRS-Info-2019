//Exercício 1
var pr, pe, f;
pr = Number(prompt("Digite o valor por quilo:"));
pe = Number(prompt("Digite o consumo (em gramas):"));
f = pr * (pe/1000);
alert("O preço a pagar é R$"+f.toFixed(2)+".");

//Exercício 2
var h1, m1, s1, h2, m2, s2, tEM;
h1 = parseInt(prompt("Digite a hora em que o evento começa:"));
m1 = parseInt(prompt("Digite o minuto em que o evento começa:"));
s1 = parseInt(prompt("Digite o segundo em que o evento começa:"));
h2 = parseInt(prompt("Digite a hora em que o evento termina:"));
m2 = parseInt(prompt("Digite o minuto em que o evento termina:"));
s2 = parseInt(prompt("Digite o segundo em que o evento termina:"));
tEM = parseInt(h2*60 + m2 + s2/60) - parseInt(h1*60 + m1 + s1/60);
alert("O evento durará "+tEM+" minutos.");

//Exercício depois do 2 e antes do 4
var x1, y1, x2, y2, d;
x1 = Number(prompt("Digite o módulo da posição do primeiro ponto em relação ao eixo x:"));
y1 = Number(prompt("Digite o módulo da posição do primeiro ponto em relação ao eixo y:"));
x2 = Number(prompt("Digite o módulo da posição do segundo ponto em relação ao eixo x:"));
y2 = Number(prompt("Digite o módulo da posição do segundo ponto em relação ao eixo y:"));
d = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
alert("A distância entre os pontos é de "+d.toFixed(2)+" unidades.")

//Exercício 4
var nome, numC, valVT, salF;
nome = prompt("Digite o nome do empregado");
numC = parseInt(prompt("Digite o número de carros vendidos pelo empregado:"));
valVT = parseFloat(prompt("Digite o valor total das vendas feitas pelo empregado:"));
salF = 500 + (numC*50) + (valVT*5/100);
alert("O salário de "+nome+" será R$" +salF.toFixed(2));

//Exercício 5
var t, p, pA, pP;
t = parseInt(prompt("Digite o tamanho da lista circular:"));
p = parseInt(prompt("Digite a posição atual na lista:"));
pP = (p+1)%t;
pA = (p-1+t)%t;
//Se Math.pow(0,0) desse 0, daria certo: pA = p-1 + (t*(Math.abs(Math.pow(p,0)-1)));
alert("A posição anterior na lista é "+pA+" e a próxima é "+pP+'.');
