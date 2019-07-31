//Álbum da copa:
var esp = parseInt(prompt("Digite o número de espaços a serem preenchidos:"));
var nfc = parseInt(prompt("Digite o número de figurinhas compradas:"));
var figs = "";
var base = "";
var quant = 0;
for(i=1;i<=nfc;i++)
{
  figs += (parseInt(prompt("Digite o número da "+i+"ª figurinha:")))+" ";
}
for(j=0;j<figs.length;j++)
{
  if(base.indexOf(figs[j]) ==-1)
     {
        base += (figs[j])+" ";
        quant++;
     }
}
alert("Faltam "+(esp-quant)+" figurinhas.");

//Garçom:
 n = parseInt(prompt("Digite o número de bandejas:"));
 var ct = 0;
 for(i=1;i<=n;i++)
 {
 l = parseInt(prompt("Digite o número de latas na "+(i)+"ª bandeja:"));
 c = parseInt(prompt("Digite o número de copos na "+(i)+"ª bandeja:"));
 if(l>c)
 {
 ct += c
 }
 }
 alert(ct+" copos serão quebrados.");

//Escada rolante:
var n = parseInt(prompt("Digite o número de pessoas que utilizaram a escada:"));
var t = 10;
if(n!=0)
{
  var p1 = parseInt(prompt("Digite o instante em que a 1ª pessoa entrou"));
  var p2;
  for(i=1;i<n;i++)
  {
    p2 = parseInt(prompt("Digite o instante em que a "+(i+1)+"ª pessoa entrou"));
    t += (p2-p1);
    p1 = p2;
  }
  alert("A escada ficou ligada por "+t+" segundos.");
}
else
{
  alert("Número inválido");
}
