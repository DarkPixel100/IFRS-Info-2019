var promnum, promnum2, promnum3, hiddnum, difficulty, secchance, thchance, hpstring1, hpstring2, nome;
nome = prompt("Digite o seu nome:");
difficulty = parseInt(prompt(nome+", o número correto estará em uma taxa de 1 a x, digite o valor de x:"));
promnum = parseInt(prompt("Digite um número de 1 a "+difficulty+":"));
hiddnum = Math.ceil(Math.random()*difficulty);
if(hiddnum%2 == 0)
{
    hpstring1 = "par.";
}
else
{
    hpstring1 = "ímpar.";
}
if(promnum > hiddnum)
{
    hpstring2 = "menor que o primeiro número que você digitou para teste.";
}
if(promnum < hiddnum)
{
    hpstring2 = "maior que o primeiro número que você digitou para teste.";
}
if(promnum <= difficulty)
{
    if(promnum == hiddnum)
    {
        alert("Você acertou "+nome+", parabéns!");
    }
    else
    {
        secchance = prompt("Você errou, deseja uma segunda chance?");
    }
}
else
{
    alert("O número digitado está fora da taxa de sorteio.");
}
if(secchance == "Sim" || secchance == "sIm" || secchance == "siM" || secchance == "sim" || secchance == "SIM" || secchance == "s" || secchance == "S" || secchance == "y" || secchance == "Y" || secchance == "Yeah" || secchance == "yEah" || secchance == "yeAh" || secchance == "yeaH" || secchance == "yeah" || secchance == "Yea" || secchance == "yEa" || secchance == "yeA" || secchance == "Ye" || secchance == "yE" || secchance == "Yep" || secchance == "yEp" || secchance == "yeP" || secchance == "ye" || secchance == "Ya" || secchance == "yA" || secchance == "ya")
{
    promnum2 = prompt("Ok, lembre-se "+nome+", o número não é "+promnum+" e, como dica, saiba que ele é "+hpstring1+" Digite o novo número:");    
    if(promnum2 <= difficulty)
    {
        if(promnum2 == hiddnum)
        {
            alert("Você acertou "+nome+", parabéns!");
        }
        else
        {
            thchance = prompt("Você errou denovo, deseja uma última chance?");
        }
    }
    else
    {
        alert("O número digitado está fora da taxa de sorteio.");
    }
}
else if (secchance == "Não" || secchance == "nÃo" || secchance == "nãO" || secchance == "não" || secchance == "NÃO" || secchance == "Nao" || secchance == "nAo" || secchance == "naO" || secchance == "n" || secchance == "N" || secchance == "Nah" || secchance == "nAh" || secchance == "naH" || secchance == "nah" || secchance == "Na" || secchance == "nA" || secchance == "na" || secchance == "Nope" || secchance == "nOpe" || secchance == "noPe" || secchance == "nopE" || secchance == "nope")
{
    alert("Ok, o número era "+hiddnum+".");
}
if(thchance == "Sim" || thchance == "sIm" || thchance == "siM" || thchance == "sim" || thchance == "SIM" || thchance == "s" || thchance == "S" || thchance == "y" || thchance == "Y" || thchance == "Yeah" || thchance == "yEah" || thchance == "yeAh" || thchance == "yeaH" || thchance == "yeah" || thchance == "Yea" || thchance == "yEa" || thchance == "yeA" || thchance == "Ye" || thchance == "yE" || thchance == "Yep" || thchance == "yEp" || thchance == "yeP" || thchance == "ye" || thchance == "Ya" || thchance == "yA" || thchance == "ya")
{
    promnum3 = prompt("Ok, lembre-se "+nome+", o número não é "+promnum+" nem "+promnum2+" e, como dica, saiba que ele é "+hpstring2+" Digite o novo número:");    
    if(promnum3 <= difficulty)
    {
        if(promnum3 == hiddnum)
        {
            alert("Você acertou "+nome+", parabéns!");
        }
        else
        {
            alert("Você errou denovo, sem mais chances, o número era "+hiddnum+".");
        }
    }
    else
    {
        alert("O número digitado está fora da taxa de sorteio.");
    }
}
else if (thchance == "Não" || thchance == "nÃo" || thchance == "nãO" || thchance == "não" || thchance == "NÃO" || thchance == "Nao" || thchance == "nAo" || thchance == "naO" || thchance == "n" || thchance == "N" || thchance == "Nah" || thchance == "nAh" || thchance == "naH" || thchance == "nah" || thchance == "Na" || thchance == "nA" || thchance == "na" || thchance == "Nope" || thchance == "nOpe" || thchance == "noPe" || thchance == "nopE" || thchance == "nope")
{
    alert("Ok, o número era "+hiddnum+".");
}
