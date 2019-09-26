var vet = ["raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel","raquel"];
var sortn, sortw, swlen, auxst, scrmw, rescr, pa, att, satt, vic, score, strsn;
alert("Olá, este jogo se chama SCRAMBLE, nele, uma palavra será sorteada e você precisa descobri-la. Você terá 10 tentativas; quando faltarem 3 tentativas, será possível escolher reembaralhar a palavra sorteada. Cada palavra correta adivinhada valerá 1 ponto, o objetivo é conseguir 5 pontos. Caso uma palavra não seja descoberta dentre as 10 tentativas oferecidas, o jogo terminará (é possível escolher jogar novamente, começando do zero)");
do
{
    score = 0;
    strsn = "";
    if(pa == "s")
    {
        do
        {
            srul = ((prompt("Gostaria de ler as regras/instruções novamente?(Digite \"Sim\" ou \"Não\")")).trim()).toLowerCase();
            if(srul != "sim" && srul != "s" && srul != "nao" && srul != "não" && srul != "n")
            {
                alert("Resposta inválida, digite novamente");
            }
        }while(srul != "sim" && srul != "s" && srul != "nao" && srul != "não" && srul != "n")
        if(srul == "sim" || srul == "s")
        {
            alert("Uma palavra será sorteada e você precisa descobri-la. Você terá 10 tentativas; quando faltarem 3 tentativas, será possível escolher reembaralhar a palavra sorteada. Cada palavra correta adivinhada valerá 1 ponto, o objetivo é conseguir 5 pontos. Caso uma palavra não seja descoberta dentre as 10 tentativas oferecidas, o jogo terminará (é possível escolher jogar novamente, começando do zero)");
        }
    }
    for(i=0;i<5;i++)
    {
        sortn = Math.floor(Math.random()*(vet.length));
        while(strsn.indexOf(sortn) != -1)
        {
            sortn = Math.floor(Math.random()*(vet.length));
        }
        strsn += sortn.toString()+" ";
        sortw = vet[sortn];
        swlen = sortw.length;
        scrmw = "";
        satt = "";
        for(j=0;j<swlen;j++)
        {
            auxst = Math.floor(Math.random()*sortw.length)
            scrmw += sortw[auxst];
            sortw = sortw.replace(sortw[auxst],"");
        }
        for(k=10;k>0;k--)
        {
            if(k==10)
            {
                do
                {
                    att = prompt("A palavra embaralhada: "+scrmw+"\nNúmero de pontos: "+score+"\nVocê tem "+k+" tentativas restantes. Digite a seu chute:");
                    if(att.length != swlen)
                    {
                        alert("Número de letras incompatível, tente novamente");
                    }
                }while(att.length != swlen)
            }
            else
            {
                if(k == 3)
                {
                    do
                    {
                        rescr = ((prompt("Gostaria de reembaralhar a palavra?(Digite \"Sim\" ou \"Não\")")).trim()).toLowerCase();
                        if(rescr != "sim" && rescr != "s" && rescr != "nao" && rescr != "não" && rescr != "n")
                        {
                            alert("Resposta inválida, digite novamente");
                        }
                    }while(rescr != "sim" && rescr != "s" && rescr != "nao" && rescr != "não" && rescr != "n")
                    if(rescr == "sim" || rescr == "s")
                    {
                        sortw = vet[sortn];
                        scrmw = "";
                        for(l=0;l<swlen;l++)
                        {
                            auxst = Math.floor(Math.random()*sortw.length)
                            scrmw += sortw[auxst];
                            sortw = sortw.replace(sortw[auxst],"");
                        }
                    }
                }
                do
                {
                    att = prompt("Você errou. A palavra embaralhada: "+scrmw.toUpperCase()+"\nNúmero de pontos: "+score+"\nVocê tem "+k+" tentativas restantes. Tentativas anteriores:\n"+satt+"Digite a seu chute:");
                    if(att.length != swlen)
                    {
                        alert("Número de letras incompatível, tente novamente");
                    }
                    else if(satt.indexOf(att) != -1)
                    {
                        alert("Essa palavra já foi digitada, tente novamente");
                    }
                }while(att.length != swlen || satt.indexOf(att) != -1)
            }
            satt += att+"\n";
            if(att == vet[sortn])
            {
                score++;
                vic = true;
                alert("Parabéns, você acertou a palavra. Vamos para a próxima");
                break;
            }
        }
        if(vic != true)
        {
            break;
        }
        vic = false;
    }
    if(score == 5)
    {
        pa = ((prompt("Parabéns, você ganhou! Deseja jogar novamente?(Digite \"Sim\" ou \"Não\")")).trim()).toLowerCase();
        while(pa != "s" && pa != "sim" && pa != "nao" && pa != "não" && pa != "n")
        {
            alert("Resposta inválida digite novamente");
            pa = ((prompt("Deseja jogar novamente?(Digite \"Sim\" ou \"Não\")")).trim()).toLowerCase();
        }
    }
    else
    {
        pa = ((prompt("Você perdeu, que pena. Foram marcados "+score+" pontos. Deseja jogar novamente?(Digite \"Sim\" ou \"Não\")")).trim());
        while(pa != "s" && pa != "sim" && pa != "nao" && pa != "não" && pa != "n")
        {
            alert("Resposta inválida digite novamente");
            pa = ((prompt("Deseja jogar novamente?(Digite \"Sim\" ou \"Não\")")).trim()).toLowerCase();
        }
    }
}while(pa == "sim" || pa == "s")
