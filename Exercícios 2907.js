//Álbum da copa:
var esp = parseInt(prompt("Digite o número de espaços a serem preenchidos:"));
var nfc = parseInt(prompt("Digite o número de figurinhas compradas:"));
var c = 0;
while(c<nfc)
{
  parseInt(prompt("Digite o número da figurinha:"));
}
alert("Faltam "(+esp-nfc)+" figurinhas.");

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
