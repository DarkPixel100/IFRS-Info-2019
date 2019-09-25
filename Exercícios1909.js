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
    if(ovet[i]%2!=0 && vete.length < 15)
    {    
        vete[vete.length] = ovet[i];
    }
    else if (veto.length < 15)
    {
        veto[veto.length] = ovet[i];
    }
}
if(vete.length >= 15)
{
    alert("O conjunto dos ímpares está cheio");
}
if(veto.length >= 15)
{
    alert("O conjunto dos pares está cheio");
}
alert("Conjunto dos ímpares: "+veto+"\nConjunto dos pares: "+vete);

//Exercício 11:
var vet = [];
var aux;
for(i=0;i<20;i++)
{
    vet[i] = prompt("Digite algo para ser inserido na posição "+(i+1)+" do conjunto:");
}
alert("Conjunto digitado:\n"+vet);
for(j=0;j<10;j++)
{
    aux = vet[j];
    vet[j] = vet[19-j];
    vet[19-j] = aux;
}
alert("Novo conjunto:\n"+vet);

//Exercício 12:
var gab = [];
var tent = [];
var sa = "";
var nc = 0;
for(i=0;i<6;i++)
{
    gab[i] = parseInt(prompt("Digite o "+(i+1)+"° número do gabarito"));
}
for(j=0;j<10;j++)
{
    tent[j] = parseInt(prompt("Digite o "+(j+1)+"° número da tentativa"));
}
for(k=0;k<6;k++)
{
    for(l=0;l<10;l++)
    {
        if(tent[l] == gab[k] && sa.indexOf(tent[l]) == -1)
        {
            nc++;
            sa += tent[l]+" ";
        }
    }
    sa = sa.trim();
}
if(nc < 4)
{
    alert("Número de acertos: "+nc);
}
else if(nc == 4)
{
    alert("Número de acertos: "+nc+" (quadra)");
}
else if(nc == 5)
{
    alert("Número de acertos: "+nc+" (quina)");
}
else if(nc == 6)
{
    alert("Número de acertos: "+nc+" (sena)");
}
