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
var sorted;
var vet = [];
var sen = 0;
var aon = 0;
var naa = 0;
var nba = 0;
var tt = 0;
var avr;
var aux;
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
avr = tt/n;
for(j=0;j<n;j++)
{
    if(vet[j]>avr)
    {
        naa++;
    }
    else if(vet[j]<avr)
    {
        nba++;
    }
}
do
{
    sorted = true;
    for(k=0;k<n;k++)
    {
        if(vet[k]>vet[k+1])
        {
            sorted = false;
            aux = vet[k];
            vet[k] = vet[k+1];
            vet[k+1] = aux;
        }
    }
}while(sorted==false)
alert("-Soma dos pares: "+sen+"\n-Quant. de ímpares: "+aon+"\n-Maior valor: "+vet[vet.length-1]+"\n-Menor valor: "+vet[0]+"\n-Média: "+avr+"\n-Qtos acima da média: "+naa+"\n-Qtos abaixo da média: "+nba+"\n-Ordem crescente: "+vet);
