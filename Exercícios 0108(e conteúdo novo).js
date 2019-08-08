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
var s = prompt("Digite uma palavra em inglês:").toLowerCase();
if(s.endsWith("o") || s.endsWith("ch") || s.endsWith("sh") || s.endsWith("ss") || s.endsWith("x") || s.endsWith("z"))
{
  s += "es";
}
else if(s.endsWith("y"))
{
  s = s.slice(0,s.length-1) + "ies";
}
else
{
  s += "s";
}
alert(s);

//Exercício 7 e 8 juntos:
var si = prompt("Digite uma data no formato DD/MM/AAAA:");
var sf;
if (isNaN(Number(si.slice(0, 2))) == false && (si[2] = "/" || si[2] == "-" || si[2] == ".") && isNaN(Number(si.slice(3, 5))) == false && (si[5] == "/" || si[5] == "-" || si[5] == ".") && isNaN(Number(si.slice(6, 10))) == false)
{
    if (Number(si.slice(6, 10)) > 1584 && Number(si.slice(6, 10)) % 100 != 0 && (Number(si.slice(6, 10)) % 400 == 0 || Number(si.slice(6, 10)) % 4 == 0))
    {
        if (Number(si.slice(3, 5)) == 1)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de janeiro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 2)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 29)
            {
                sf = si.slice(0, 2) + " de fevereiro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 3)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de março de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 4)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de abril de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 5)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de maio de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 5)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de maio de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 6)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de junho de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 7)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de julho de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 8)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de agosto de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 9)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de setembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 10)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de outubro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 11)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de novembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 12)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de dezembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else
        {
            alert("A data é inválida");
        }
    }
    else {
        if (Number(si.slice(3, 5)) == 1)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de janeiro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 2)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 28)
            {
                sf = si.slice(0, 2) + " de fevereiro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 3)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de março de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 4)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de abril de " + si.slice(6, 10);
            }
            else {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 5)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de maio de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 5)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de maio de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 6)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de junho de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 7)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de julho de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 8)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de agosto de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 9)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de setembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 10)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de outubro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 11)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 30)
            {
                sf = si.slice(0, 2) + " de novembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else if (Number(si.slice(3, 5)) == 12)
        {
            if (Number(si.slice(0, 2)) >= 1 && Number(si.slice(3, 5)) <= 31)
            {
                sf = si.slice(0, 2) + " de dezembro de " + si.slice(6, 10);
            }
            else
            {
                alert("A data é inválida");
            }
        }
        else
        {
            alert("A data é inválida");
        }
    }
}
else
{
    alert("A data é inválida");
}
alert("Data válida:\n" + sf);

//Exercício 9:
