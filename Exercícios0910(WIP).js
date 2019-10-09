//Exercício 1:
var mat = [[],[],[]];
var soma = [];
var s = "";
var nc = 3;
for(i=0;i<mat.length;i++)
{
    for(j=0;j<nc;j++)
    {
        mat[i][j] = Number(prompt("Digite o "+(j+1)+"º número da "+(i+1)+"ª linha"));
    }
}
for(k=0;k<mat.length;k++)
{
    soma[k] = 0;
    for(l=0;l<nc;l++)
    {
        soma[k] += mat[k][l];
    }
}
for(m=0;m<mat.length;m++)
{
    s += "Soma da linha "+m+": " + soma[m].toString() + "\n";
}
alert(s);

//Exercício 2;
var s1, s2;
var vet = [];
s1 = prompt("Digite qualquer sequência de palavras, separando-as por espaço:");
s2 = prompt("Digite qualquer outra sequência de palavras, separando-as por espaço:");
s1 = s1.split(" ");
s2 = s2.split(" ");
for(i=0;i<s2.length;i++)
{
    if(s1.indexOf(s2[i]) == -1)
    {
        vet.push(s2[i]);
    }
}
alert(vet.join(", "));

//Exercício 3:
var op = prompt("Digite a operação que será realizada com os conjuntos(\"u\" para união, \"i\" para intersecção e \"d\" para fazer conjunto1\conjunto2)");
var n1 = parseInt(prompt("Digite o número de elementos do conjunto 1:"));
var n2 = parseInt(prompt("Digite o número de elementos do conjunto 2:"));
var vet1 = [];
var vet2 = [];
for(i=0;i<n1;i++)
{
    vet1[i] = Number(prompt("Digite o "+(i+1)+"º elemento do conjunto 1"));
}
for(j=0;j<n2;j++)
{
    vet2[j] = Number(prompt("Digite o "+(j+1)+"º elemento do conjunto 2"));
}
