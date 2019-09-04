var s = prompt("Digite o numero romano, ele será convertido para decimal:").toUpperCase();
var bs = "IVXLC";
var value = 0;
var inv = false;

for(i=s.length-1;i>=0;i--)
{

    if((s[i] == s[i-1] && s[i] == s[i-2] && s[i] == s[i-3]))
    {
        alert("Esse número é inválido, tente novamente.");
        inv = true;
        //comando pra repetir
        break;
    }
    if(bs.indexOf(s[i]) > bs.indexOf(s[i-1]) && s[i-1] != "V")
    {
        
    }
}
if(inv == false)
{
    alert(value);
}
