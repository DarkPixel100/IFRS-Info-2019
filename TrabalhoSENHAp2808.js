var bdez = "|amor|cota|coxo|mito|soar|zelo|pose|agir|rude|traz|logo|seio|frio|suar|item|tema|isso|sair|fuga|luta|hoje|indo|meia|usar|fome|alfa|dano|peso|aula|show|";
var bdmd = "|mexer|sagaz|fazer|ideia|poder|honra|muito|pesar|dizer|comum|louco|sonho|gerar|forte|ainda|pedir|favor|falar|amigo|forma|casal|ameno|havia|fator|vendo|citar|temer|sendo|servo|mundo|";
var bdhd = "|casual|hostil|ocioso|julgar|acento|maroto|diante|origem|embuste|empatia|contudo|indagar|coragem|modesto|piedade|vermelho|conserto|proceder|relativo|processo|problema|segmento|generoso|excitado|elemento|surpresa|trabalho|interação|nostalgia|consertar|";
var stword, tries, pchsorted, tyword, letters, st1, st2, clet, plet;
var rexp = "s";
var ng = "s";
while (ng == "sim" || ng == "s")
{
    if(rexp == "sim" || rexp == "s")
    {

    }
    var diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
    while (diff != 'f' && diff != '1' && diff != 'm' && diff != '2' && diff != 'd' && diff != '3')
    {
        alert("O character digitado é inválido, digite novamente.");
        diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
    }
    if (diff == 'f' || diff == '1')
    {
        tries = 10;
        pchsorted = Math.round(Math.random() * 145);
        stword = bdez.substring(bdez.indexOf('|', pchsorted) + 1, bdez.indexOf('|', bdez.indexOf('|', pchsorted) + 1));
    }
    else if (diff == 'm' || diff == '2')
    {
        tries = 15;
        pchsorted = Math.round(Math.random() * 174);
        stword = bdmd.substring(bdmd.indexOf('|', pchsorted) + 1, bdmd.indexOf('|', bdmd.indexOf('|', pchsorted) + 1));
    }
    else if (diff == 'd' || diff == '3')
    {
        tries = 15;
        pchsorted = Math.round(Math.random() * 240);
        stword = bdhd.substring(bdhd.indexOf('|', pchsorted) + 1, bdhd.indexOf('|', bdhd.indexOf('|', pchsorted) + 1));
    }
    letters = stword.length;
    st1 = "Digite uma palavra de " + letters + " letras, você tem "
    st2 = " tentativas\nPalavra-Letras certas-Letras na posição certa\n";
    while (tries >= 1)
    {
        srl = "";
        tyword = prompt(st1 + tries + st2);
        clet = 0;
        plet = 0;
        for(i=0;i<letters;i++)
        {
            pind = 0;
            while(stword.indexOf(tyword[i],pind) != -1 && srl.indexOf(tyword[i]) == -1)
            {
                pind = stword.indexOf(tyword[i],pind)+1;
                clet++
            }
            srl += tyword[i];
        }
        for(j=0;j<letters;j++)
        {
            if(tyword[j] == stword[j])
            {
                plet++;
            }
        }
        if (tyword != stword)
        {
            tries--;
        }
        else
        {
            break;
        }
        st2 += tyword + "-" + clet + "-" + plet+ "\n";
        plet = 0;
    }
    if (tries >= 1)
    {
        alert("Parabéns, você venceu!!!");
        ng = prompt("Deseja jogar novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
    else
    {
        ng = prompt("Você gastou todas as suas chances e perdeu; a palavra era \""+stword+"\". Deseja tentar novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
    if(ng == "sim" || ng == "s")
    {
        rexp = prompt("Deseja ler as regras/explicação novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
}
