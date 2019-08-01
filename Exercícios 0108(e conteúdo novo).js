//"123456789".substr(6) = "6789";
//"123456789".substr(6,3) = "678";
//                   ^
//                   a partir dessa, n(nesse caso 3) characters a frente
                     
//"123456789".substring(6) = "6789"; ======================"123456789".slice(6) = "6789"
//"123456789".substring(6,9) = "678"; ======================"123456789".slice(6,9) = "678"
//                      ^
//                      a partir dessa até a n(nesse caso 9) posição
                        
//"123456789".replace("789","jooj") = "123456jooj";

//"     hey      ".trim() = "hey";

//Lista
//Exercício 1:
var ms = prompt("Digite uma palavra:").toLowerCase();
alert(ms.substr(1) + ms[0] + "ay");
//Exercício 2:
var s = prompt("Digite uma palavra").toLowerCase();
var l = prompt("Digite uma letra:").toLowerCase();
var q = 0;
for(i=0;i<s.length;i++)
{
  if(s.indexOf(l)!=-1)
  {
    q++;
    s[s.indexOf(l)].replace("");
  }
}
alert(q);
