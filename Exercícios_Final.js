//Exercício 1
var raio;
var area;

raio = Number(prompt("Digite o raio do circulo:"));
area = (raio * raio) * 3.14159;
alert ("A area é: " +area".");

//Exercício 2
var salliq;
var salbrut;
var vha;
var htm;
var pdinss;
var valdesc;

vha = Number(prompt ("Digite o valor da hora-aula:"));
htm = Number(prompt ("Digite as horas trabalhadas por mês:"));
pdinss = Number(prompt("Digite o percentual de desconto do INSS:"));
salbrut = vha * htm;
valdesc = pdinss / 100 * salbrut;
salliq = salbrut - valdesc;
alert ("Esse é o seu salário líquido: "+ salliq".");

//Exercício 3
var tempC;
var tempF;

tempC = Number(prompt("Digite a temperatura em celsius:"));
tempF = (tempC * 9 + 160) / 5;
alert ("Essa é a temperatura em farenheit " +tempF".");

//Exercício 4
var tempF;
var tempC;

tempF = Number(prompt("Digite a temperatura em farenheit:"));
tempC = 5 * (tempF - 32) / 9;
alert ("Essa é a temperatura em celsius: " +tempC".");

//Exercício 5
var raio;
var altura;
var volume;

raio = Number(prompt("Digite o raio da lata:"));
altura = Number(prompt("Digite a altura da lata:"));
volume = 3.14159 * altura * raio;
alert ("Esse é o volume da lata: "+volume+"m³.");

//Exercício 6
var lt;
var tvtH;
var tvH;
var tvM;
var tvS;
var vmv;
var distk;

tvH = parseInt(prompt("Digite as horas de viagem:"));
tvM = parseInt(prompt("Digite os minutos de viagem:"));
tvS = parseInt(prompt("Digite os segundos de viagem:"));
vmv = Number(prompt("Digite a velocidade média da viagem em kilômetros por hora:"));
tvtH = (tvH * 3600 + tvM * 60 + tvS) / 3600;
distk = tvtH * vmv;
lt = distk / 12;
alert ("Sua velocidade média era de: " +vmv+ "Km/h. Você levou: " +tvH+ "h " +tvM + "m " +tvS+ "s. Você percorreu uma distância de: " +distk+ "Km. Esta é a quantidade de litros gasta na viagem: "+lt+"L.");

//Exercício 7
var valprestnew;
var valprestant;
var jurtax;
var tempM;

valprestant = Number(prompt("Escreva o valor original da prestação em R$:"));
jurtax = Number(prompt("Escreva a taixa de juros:"));
tempM = parseInt(prompt("Escreva o tempo de atraso em meses:"));
valprestnew = valprestant + (valprestant * jurtax / 100) * tempM;
alert ("Este é o novo valor da prestação: R$" +valprestnew".");

//Exercício 8
var vol;
var comp;
var larg;
var alt;

comp = Number(prompt("Digite o comprimento da caixa:"));
larg = Number(prompt("Digite a largura da caixa:"));
alt = Number(prompt("Digite a altura da caixa:"));
vol = comp * alt * larg;
alert ("Este é o volume da caixa: " +vol+ "m³.");

//Exercício 9
var CDol;
var QDol;
var QReal;

CDol = Number(prompt("Digite a cotacao do dólar:"));
QDol = Number(prompt("Digite a quantidade de dólares:"));
QReal = QDol * CDol;
alert ("Você tem: R$" +QReal+".")

//Exercício 10
var CDol;
var QDol;
var QReal;

CReal = Number(prompt("Digite a cotacao do real:"));
QReal = Number(prompt("Digite a quantidade de reais:"));
QDol = QReal * CReal;
alert ("Você tem: $" +QDol+".")

//Exercício 11
var a;
var b;
var c;

a = Number(prompt("Escreva o primeiro valor:"));
b = Number(prompt("Escreva o segundo valor:"));
c = a;
a = b;
b = c;
alert ("Esses são os novos valores: " +a+ " e " +b+".");

//Exercício 12
var a;
var b;
var c;

a = Number(prompt("Digite o primeiro valor:"));
b = Number(prompt("Digite o segundo valor:"));
c = (a-b) * (a-b);
alert ("O quadrado da diferença dos valores é: " +c+".");

//Exercício 13
var a;
var b;
var c;
var d;

a = Number(prompt("Escreva o primeiro valor:"));
b = Number(prompt("Escreva o segundo valor:"));
c = Number(prompt("Escreva o terceiro valor:"));
d = a * a + b * b + c * c;
alert ("A soma dos quadrados dos valores é: " +d+".");

//Exercício 14
var a;
var b;
var c;
var d;

a = Number(prompt("Escreva o primeiro valor:"));
b = Number(prompt("Escreva o segundo valor:"));
c = Number(prompt("Escreva o terceiro valor:"));
d = (a + b + c) * (a + b + c);
alert ("O quadrado da soma dos valores é: " +d+".");

//Exercício 15
var a;
var b;
var c;
var d;
var e;
var f;

a = Number(prompt("Escreva o primeiro valor:"));
b = Number(prompt("Escreva o segundo valor:"));
c = Number(prompt("Escreva o terceiro valor:"));
d = Number(prompt("Escreva o quarto valor:"));
e = a * c;
f = b + d;
alert ("Esse é o produto do primeiro valor pelo terceiro: " +e+". Essa é a soma do segundo valor com o quarto: " +f+".");

//Exercício 16
var SalM;
var PReaj;
var NovoSal;

SalM = Number(prompt("Escreva o salário mensal:"));
PReaj =Number (prompt("Escreva o percentual de reajuste"));
NovoSal = SalM + PReaj / 100 * SalM;
alert ("Esse é o novo valor do salário: " +NovoSal+".");

//Exercício 17
var a;
var b;
var c;
var nulos;
var branco;
var eleitores;
var pa;
var pb;
var pc;
var pnulos;
var pbranco;

a = parseInt(prompt("Digite o número de votos do candidado A:"));
b = parseInt(prompt("Digite o número de votos do candidado B:"));
c = parseInt(prompt("Digite o número de votos do candidado C:"));
nulos = parseInt(prompt("Digite o número de votos Nulos:"));
branco = parseInt(prompt("Digite o número de votos em Branco:"));

eleitores = a + b + c + nulos + branco;

pa = a * 100 / eleitores;
pb = b * 100 / eleitores;
pc = c * 100 / eleitores;
pnulos = nulos * 100 / eleitores;
pbranco = branco * 100 / eleitores;

alert("Esse é o número de votos totais: " + eleitores + ". Esse é o percentual de votos do candidato A em relação aos votos totais: " + pa + "%. Esse é o percentual de votos do candidato B em relação aos votos totais: " + pb + "%. Esse é o percentual de votos do candidato C em relaçãpo aos votos totais: " + pc + "%. Esse é o percentual de votos nulos em relação aos votos totais: " + pnulos + "%. Esse é o percentual de votos em branco em relação aos votos totais: " + pbranco + "%.");

//Exercício 18
     const VLatas = 50;
    const CLatas = 5;
    const DPpLemM = 3;
    var qLitros;
    var qLatas;
    var areaCil;
    var raioCil;
    var altCil;
    var vTotal;

    raioCil = Number(prompt("Digite o raio do cilíndro em metros"));
    altCil = Number(prompt("Digite a altura do cilíndro em metros"));
    areaCil = 2 * 3.14159 * raioCil * (altCil + raioCil);
    qLitros = areaCil / DPpLemM;
    qLatas = qLitros / CLatas;
    vTotal = qLatas * VLatas;
alert("Você utilizará " + qLatas + " latas. O valor total será de R$" + vTotal + ".");
//FIM DO SCRIPT!!!