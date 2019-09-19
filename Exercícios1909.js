//Exercício 1:
var n = parseInt(prompt("Digite a quantidade de números que serão inseridos:"));
var vet = [];
for(i=n-1;i>=0;i--)
{
    vet[i] = Number(prompt("Digite o "+(n-i)+"º número:"));
}
alert("Sequência reversa: "+vet);

//Exercício 2:
var n = parseInt(prompt("Digite a quantidade de times os quais terão as suas pontuações inseridas:"));
var vet = [];
var nc = 0;
for(i=0;i<n;i++)
{
    vet[i] = parseInt(prompt("Digite a pontuação do "+(i+1)+"º time:"));
}
mx = vet[0];
for(j=0;j<n;j++)
{
    if(vet[j]>mx)
    {
    mx = vet[j];
    }
}
for(k=0;k<n;k++)
{
    if(vet[k] == mx)
    {
        nc++;
    }
}
alert("-Pontuação do(s) time(s) campeão/(ões): "+mx+"\n-Número de times campeões: "+nc);

//Exercício 3:
var vet = [];
var sum = 0;
var naa = 0;
for(i=0;i<10;i++)
{
    vet[i] = Number(prompt("Digite o "+(i+1)+"º número:"));
    sum += vet[i];
}
for(j=0;j<10;j++)
{
    if(vet[j] > (sum/10))
    {
        naa++;
    }
}
alert("Média:" +(sum/10)+"\nNúmeros acima da média: "+naa);

//Exercício 4:
var vet = [];
var sump = 0;
var nnn = 0;
for(i=0;i<10;i++)
{
    vet[i] = Number(prompt("Digite o "+(i+1)+"º número:"));
    if(vet[i] < 0)
    {
        nnn++;
    }
    else if(vet[i]>0)
    {
        sump += vet[i];
    }
}
alert("Quantidade de números negativos: "+nnn+"\nSoma dos números positivos: "+sump);

//Exercício 5:
var vet = [];
var mx, mn, pmx, pmn;
for(i=0;i<15;i++)
{
    vet[i] = Number(prompt("Digite o "+(i+1)+"º número:"));
}
mx = vet[0];
pmx = 15;
mn = vet[0];
pmn = 1;
for(j=0;j<15;j++)
{
    if(vet[j]>mx)
    {
        mx = vet[j];
        pmx = j+1;
    }
    if(vet[j]<mn)
    {
        mn = vet[j];
        pmn = j+1;
    }
}
alert("Maior número digitado: "+mx+"(posição "+pmx+")\nMenor número digitado: "+mn+"(posição "+pmn+")");

//Exercício 6:
var veta = [];
var vetb = [];
var vetc = [];
for(i=0;i<10;i++)
{
    veta[i] = Number(prompt("Digite o "+(i+1)+"º número do primeiro conjunto:"));
}
for(j=0;j<10;j++)
{
    vetb[j] = Number(prompt("Digite o "+(j+1)+"º número do segundo conjunto:"));
}
for(k=0;k<10;k++)
{
    vetc[k] = veta[k]+vetb[k];
}
alert("Conjunto das somas: "+vetc);

//Exercício 7:
var a = Number(prompt("Digite o número que multiplicará os elementos do conjunto:"));
var veta = [];
var vetb = [];
for(i=0;i<20;i++)
{
    veta[i] = Number(prompt("Digite o "+(i+1)+"º número do primeiro conjunto:"));
}
for(j=0;j<20;j++)
{
    vetb[j] = veta[j]*a;
}
alert("Novo conjunto: "+vetb);

//Exercício 8:
var veta = [];
var vetb = [];
var mx, pmx;
for(i=0;i<12;i++)
{
    veta[i] = prompt("Digite o nome do "+(i+1)+"º jogador:");
    vetb[i] = prompt("Digite a altura do "+(i+1)+"º jogador(em metros):");
}
mx = vetb[0];
pmx = 0;
for(j=0;j<12;j++)
{
    if(vetb[j]>mx)
    {
        mx = vetb[j];
        pmx = j;
    }
}
alert("O jogador mais alto se chama: "+veta[pmx]+"(Mede: "+mx+"m)");

//Exercício 9:
var veta = [];
var vetb = [];
var vetc = [];
var vetd = [];
for(i=0;i<5;i++)
{
    veta[i] = Number(prompt("Digite o "+(i+1)+"º número do primeiro conjunto:"));
}
for(j=0;j<5;j++)
{
    vetb[j] = Number(prompt("Digite o "+(j+1)+"º número do segundo conjunto:"));
}
for(k=0;k<5;k++)
{
    vetc[k] = Number(prompt("Digite o "+(k+1)+"º número do terceiro conjunto:"));
}
for(l=0;l<5;l++)
{
    vetd[l] = (veta[l]*vetc[l])/vetb[l];
}
alert("Conjunto final: "+vetd);

//Exercício 10:
var ovet = [];
var veto = [];
var vete = [];
for(i=0;i<30;i++)
{
    ovet[i] = Number(prompt("Digite o "+(i+1)+"º número do primeiro conjunto:"));
}
for(j=0;j<15;j++)
{
    if(ovet[j]%2!=0)
    {    
        veto[j] = ovet[j];
    }    
}
if(veto.length >= 15)
{
    alert("O conjunto dos ímpares está cheio");
}
for(k=0;k<15;k++)
{
    if(ovet[k]%2==0)
    {    
        veto[k] = ovet[k];
    }    
}
if(veto.length >= 15)
{
    alert("O conjunto dos pares está cheio");
}
alert("Conjunto dos ímpares: "+veto+"\nConjunto dos pares: "+vete);
