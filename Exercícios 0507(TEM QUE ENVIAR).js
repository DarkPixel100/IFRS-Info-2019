//Mostrar os N primeiros números primos:
var n = parseInt(prompt("Digite um número:"));
var nprim = 0;
var s = "";
var ndiv;
for(i=1;nprim<n;i++)
{
    ndiv = 0;    
	for(j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            ndiv++;
        }
    }
    if(ndiv==2)
    {
        nprim++;
        s += i+" ";
    }
}
alert(s);
//Os divisores de 12 são: 1, 2, 4, 6 e 12. O maior divisor de 12 que não excede a raís quadrada de 12 é 3. Podemos chamar o maior divisor de um inteiro N que não excede a raís quadrada de N, de pseudoraíz quadrada(PRQ) de N, por exemplo: PRQ de 3102 = 47. Faça um programa que que calcule o prq de um número sem usar Nath.sqrt
var n = parseInt(prompt("Digite um número:"))
var raiz;
for(c=1;c<=n;c++)
{
    if(n%c==0 && c*c <= n)
    {
        raiz = c;
    }
}
alert("A pseudo-raiz quadrada desse número é: "+raiz+".");

//Calcular potenciação sem usar função matemática
var base = parseInt(prompt("Digite a base da potência:"));
var ind = parseInt(prompt("Digite o expoente:"));
var res = 1;
for(c=0;c<ind;c++)
{
    res *= base;
}
alert(base+"^("+ind+") = "+res);
