//Exercício 1:
var n_nam = parseInt(prompt("Digite a quantidade de nomes que você quer inserir"));
var vet = [];
for(i=0;i<n_nam;i++)
{
    vet[i] = prompt("Digite o nome da posição "+(i+1)+":");
}
alert(vet);

//Exercício 2:
var vet = [];
for(i=0;i<10;i++)
{
    vet[i] = parseInt(prompt("Digite o "+(i+1)+"º número"));
}
alert(vet[0]+vet[9]);

//Exercício 3:
var vet = [];
var num_n = parseInt(prompt("Digite o número de números que serão inseridos"));
for(i=0;i<num_n;i++)
{
    vet[i] = parseInt(prompt("Digite o "+(i+1)+"º número"));
}
alert(vet[0]+vet[vet.length-1]);

//Exercício 4:
var vet = [];
var num_n = parseInt(prompt("Digite o número de números que serão inseridos"));
for(i=0;i<num_n;i++)
{
    vet[i] = parseInt(prompt("Digite o "+(i+1)+"º número"));
}
alert(vet[0]+vet[vet.length-1]);

//Exercício 5:
var n = parseInt(prompt("Digite a quantidade de números que serão inseridos:"));
var vet = [];
var sen = 0;
var aon = 0;
var naa = 0;
var nba = 0;
var tt = 0;
var avr;
var aux;
var mx;
var mn;
var s;
for(i=0;i<n;i++)
{
    vet[i] = parseInt(prompt("Digite o "+(i+1)+"º número:"));
    if(vet[i]%2 == 0)
    {
        sen += vet[i];
    }
    else
    {
        aon++;
    }
    tt += vet[i];
}
mx = vet[0];
mn = vet[0];
for(j=0;j<n;j++)
{
    if(vet[j]>mx)
    {
    mx = vet[j];
    }
    if(vet[j]<mn)
    {
    mn = vet[j];
    }
}
avr = tt/n;
for(k=0;k<n;k++)
{
    if(vet[k]>avr)
    {
        naa++;
    }
    else if(vet[k]<avr)
    {
        nba++;
    }
}
s = "-Soma dos pares: "+sen+"\n-Quant. de ímpares: "+aon+"\n-Maior valor: "+mx+"\n-Menor valor: "+mn+"\n-Média: "+avr+"\n-Qtos acima da média: "+naa+"\n-Qtos abaixo da média: "+nba+"\n-Ordem crescente: ";
for(l=0;l<n**2;l++)
{
    for(m=0;m<n;m++)
    {
        if(vet[m]>vet[m+1])
        {
            aux = vet[m];
            vet[m] = vet[m+1];
            vet[m+1] = aux;
        }
    }
}
alert(s+vet);
