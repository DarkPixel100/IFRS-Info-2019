//Exercício 1:
var t, s, p;
t = parseInt(prompt("Digite o número de pessoas que clicaram no terceiro link:"));
s = t * 2;
p = s * 2;
alert("O número de pessoas que clicaram no primeiro link é: "+p+".");
//Exercicio 2:
var h1, m1, s1, h2, m2, s2, hR, mR, sR, t1S, t2S, tRS;
h1 = parseInt(prompt("Digite a hora inicial:"));
m1 = parseInt(prompt("Digite o minuto inicial:"));
s1 = parseInt(prompt("Digite o segundo inicial:"));
h2 = parseInt(prompt("Digite a hora final:"));
m2 = parseInt(prompt("Digite o minuto final:"));
s2 = parseInt(prompt("Digite o segundo final:"));
t1S = (h1 * 3600) + (m1 * 60) + s1;
t2S = (h2 * 3600) + (m2 * 60) + s2;
tRS = (t2S - t1S)/2;
hR = Math.floor(tRS/3600);
mR = Math.floor((tRS - (hR*3600))/60);
sR = tRS - (hR * 3600) - (mR * 60);
alert("A metade do intervalo das duas horas é de "+hR+":"+mR+":"+sR+".");
//Exercício 3:
var data, dia, mes, ano;
data = parseInt(prompt("Digite a data no formato DDMMAA:"));
dia = parseInt(data/10000);
mes = parseInt(((data/10000) - (Math.floor(data/10000))) * 100);
ano = parseInt(((data/100) - (Math.floor(data/100))) * 100);
alert("A data no formato AA/MM/DD é "+ano+"/"+mes+"/"+dia+".");
//Exercício 4:
var n, mult;
n = parseInt(prompt("Digite um número:"));
mult = (n - n%5) + 5;
alert("O primeiro número primo posterior ao número digitado é "+mult+".");
//Exercício 5:
var a, b, c, delta, x1, x2;
a = Number(prompt("Digite o a(número que multipica o x²)"));
b = Number(prompt("Digite o b(número que multipica o x)"));
c = Number(prompt("Digite o c(número que não multiplica nenhum x(se não aparecer na equação, digite 0))"));
delta = (Math.pow(b,2) - 4 * a * c);
x1 = ((-b)+Math.sqrt(delta))/(2*a);
x2 = ((-b)-Math.sqrt(delta))/(2*a);
alert("A primeira raíz é "+x1+" e a segunda é "+x2+".");
//Exercício 6:
var t, outros15, fPrice;
t = parseInt(prompt("Digite o tempo de permanência(em minutos):"));
outros15 = Math.ceil((t-30)/15);
fPrice = 20 + (10*outros15);
alert("O preço final será de R$"+fPrice.toFixed(2)+".");
