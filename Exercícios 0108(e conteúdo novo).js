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

//Lista:
//Exercício 1:
var ms = prompt("Digite uma palavra:").toLowerCase();
alert(ms.substr(1) + ms[0] + "ay");

//Exercício 2:
var s = prompt("Digite uma palavra").toLowerCase();
var l = prompt("Digite uma letra:").toLowerCase();
var q = 0;
var pa = -1;
for(i=0;i<s.length;i++)
{
  if(s.indexOf(l, pa+1)!=-1)
  {
    q++;
    pa = s.indexOf(l, pa+1);
  }
}
alert(q);

//Exercício 3:
var s = prompt("Digite uma palavra:");
alert(s[0].toUpperCase()+(s.slice(1)).toLowerCase());

//Exercício 4:
var ddd = prompt("Digite um DDD");
var nt = prompt("Digite um número de telefone");
alert("("+ddd+")"+nt.slice(0,4)+"-"+nt.slice(4));

//Exercício 5:
var ni = prompt("Digite um número no formato \"(DDD)NNNN-NNNN\":");
var ddd = ni.substr(0,4);
var nf = (ni.substr(4)).trim();
if(ddd[0] != "(" || ddd.indexOf(" ") != -1 || isNaN(Number(ddd.substr(1,2))) || ddd[3] != ")" || nf.indexOf(" ") != -1 || isNaN(Number(nf.substr(0,4))) || nf[4] != "-" || isNaN(Number(nf.substr(5))))
{
  alert("Número de telefone incorreto.");
}
else
{
  alert("DDD: "+ddd.substr(1,2)+"\nNúmero: "+nf);
}

//Exercício 6:
