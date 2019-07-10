//1. Mostrar os n primeiros números primos:
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
alert("Os "+n+" primeiros números primos são: "+s+".");

//2. Os divisores de 12 são: 1,2,3,4,6 e 12. O maior divisor de 12 que não excede a raiz quadrada de 12 é 3. Podemos chamar o maior divisor de um inteiro n que não excede a raiz quadrada de n de pseudo raiz quadrada (PRQ) de n. Por exemplo, PRQ(3102)=47. Faça um programa que calcule a pseudo raiz quadrada de um número inteiro, sem utilizar as funções matemáticas:
var n = parseInt(prompt("Digite um número:"))
var raiz;
for(c=1;c*c<=n;c++)
{
    if(n%c==0)
    {
        raiz = c;
    }
}
alert("A pseudo-raiz quadrada desse número é: "+raiz+".");

//3. Calcular a potenciação, sem usar funções matemática. Ler dois números e mostrar o resultado do primeiro elevado ao segundo:
var base = parseInt(prompt("Digite a base da potência:"));
var ind = parseInt(prompt("Digite o expoente:"));
var res = 1;
for(c=0;c<ind;c++)
{
    res *= base;
}
alert(base+"^("+ind+") = "+res);
