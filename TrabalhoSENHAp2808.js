//Declarando os bancos de dados de cada dificuldade:
var bdez = "|amor|cota|coxo|mito|soar|zelo|pote|agir|rude|traz|logo|seio|frio|suar|item|tema|isso|sair|fuga|luta|hoje|indo|meia|usar|fome|alfa|dano|peso|aula|show|";
var bdmd = "|mexer|sagaz|fazer|ideia|poder|honra|morto|pesar|dizer|comum|louco|sonho|gerar|forte|harpa|pedir|favor|falar|amigo|forma|casal|ameno|havia|fator|vendo|citar|temer|sendo|servo|mundo|";
var bdhd = "|casual|hostil|ocioso|julgar|acento|maroto|distante|origem|embuste|empatia|canudo|indagar|coragem|modesto|piedade|vermelho|conserto|proceder|relativo|processo|problema|segmento|generoso|excitado|elemento|surpresa|trabalho|interativo|nostalgia|consertar|";
/*Declarando outras váriáveis(stword: palavra sorteada; tries: número de tentativas; pchsorted: Número do character sorteado; tyword: palavra digitada pelo usuário em cada tentativa; letters: número de letras de determinada palavra sorteada;
st1 e st2: diferentes partes da string presente no prompt da palavra digitada; clet: número de letras corretas; plet: número de letras na posição correta; srl: string que conterá as letras já descobertas como presentes na palavra;
dica: qual a classificação da palavra; wt: resposta do jogador ao perguntar se ele quer uma dica)*/
var stword, tries, pchsorted, tyword, letters, st1, st2, clet, plet, srl, dica, wt;
var ng = "s";
rexp = prompt("Olá, seja bem vindo! Esse jogo chama-se \"Senha\", deseja ter uma breve explicação de como jogar?(Digite \"sim\" ou \"não\")").toLowerCase();
//Início do jogo(o while serve para que possam ocorrer múltiplas tentativas até que o usuário queira parar)
while (ng == "sim" || ng == "s")
{
//Instruções serão mostradas caso o usuário deseje. Será perguntado se ele quer lê-las novamente no fim de cada partida
    if(rexp == "sim" || rexp == "s")
    {
        alert("O jogo consiste em: tentar adivinhar a palavra que fora sorteado, baseado no número de letras da tentativa que fazem parte da palavra correta e/ou estão na posição certa na mesma; o jogo possui o número diferente de tentativas e letras por palavras dependendo da dificulade escolhida; independente da dificuldade, ao chegar a 3 tentativas restantes, existirá a possibilidade de ter uma dica, ela dirá se a palavra sorteada é um verbo, um substantivo, ou um adjetivo. Boa sorte");
    }
//Pedindo a dificuldade em que o jogo será executado
    var diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
//Garantindo que a dificuldade seja descrita de forma correta
    while (diff != 'f' && diff != '1' && diff != 'm' && diff != '2' && diff != 'd' && diff != '3')
    {
        alert("O character digitado é inválido, digite novamente.");
        diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
    }
//Executando funções da dificuldade fácil(inserindo o número de tentativas como 10 e sorteando uma palavra do bdez(banco de dados da dificuldade fácil))
    if (diff == 'f' || diff == '1')
    {
        tries = 10;
        pchsorted = Math.round(Math.random() * 145);
        stword = bdez.substring(bdez.indexOf('|', pchsorted) + 1, bdez.indexOf('|', bdez.indexOf('|', pchsorted) + 1));
    }
//Executando funções da dificuldade média(inserindo o número de tentativas como 15 e sorteando uma palavra do bdmd(banco de dados da dificuldade média))
    else if (diff == 'm' || diff == '2')
    {
        tries = 15;
        pchsorted = Math.round(Math.random() * 174);
        stword = bdmd.substring(bdmd.indexOf('|', pchsorted) + 1, bdmd.indexOf('|', bdmd.indexOf('|', pchsorted) + 1));
    }
//Executando funções da dificuldade difícil(inserindo o número de tentativas como 15 e sorteando uma palavra do bdhd(banco de dados da dificuldade difícil))
    else if (diff == 'd' || diff == '3')
    {
        tries = 15;
        pchsorted = Math.round(Math.random() * 240);
        stword = bdhd.substring(bdhd.indexOf('|', pchsorted) + 1, bdhd.indexOf('|', bdhd.indexOf('|', pchsorted) + 1));
    }
//Inserindo o número de letras da palavra na string do prompt da mesma
    letters = stword.length;
    st1 = "Digite uma palavra de " + letters + " letras, você tem "
    st2 = " tentativas\nPalavra-Letras certas-Letras na posição certa\n";
//Definindo a classificação da palavra
    if(stword == "amor" || stword == "cota" || stword == "coxo" || stword == "mito" || stword == "zelo" || stword == "pote" || stword == "logo" || stword == "seio" || stword == "item" || stword == "tema" || stword == "isso" || stword == "fuga" || stword == "luta" || stword == "hoje" || stword == "meia" || stword == "fome" || stword == "alfa" || stword == "dano" || stword == "peso" || stword == "aula" || stword == "show" || stword == "ideia" || stword == "poder" || stword == "honra" || stword == "sonho" || stword == "harpa" || stword == "favor" || stword == "amigo" || stword == "forma" || stword == "casal" || stword == "fator" || stword == "servo" || stword == "mundo" || stword == "acento" || stword == "origem" || stword == "embuste" || stword == "empatia" || stword == "canudo" || stword == "coragem" || stword == "piedade" || stword == "conserto" || stword == "processo" || stword == "problema" || stword == "segmento" || stword == "elemento" || stword == "surpresa" || stword == "trabalho" || stword == "nostalgia" || stword == "consertar")
    {
        dica = "substantivo";
    }
    else if(stword == "soar" || stword == "agir" || stword == "traz" || stword == "suar" || stword == "sair" || stword == "indo" || stword == "usar" || stword == "mexer" || stword == "fazer" || stword == "pesar" || stword == "dizer" || stword == "gerar" || stword == "pedir" || stword == "falar" || stword == "havia" || stword == "vendo" || stword == "citar" || stword == "temer" || stword == "sendo" || stword == "indagar" || stword == "proceder" || stword == "julgar")
    {
        dica = "verbo";
    }
    else if(stword == "rude" || stword == "frio" || stword == "sagaz" || stword == "comum" || stword == "louco" || stword == "forte" || stword == "ameno" || stword == "casual" || stword == "hostil" || stword == "ocioso" || stword == "maroto" || stword == "distante" || stword == "modesto" || stword == "vermelho" || stword == "relativo" || stword == "generoso" || stword == "excitado" || stword == "interativo" || stword == "morto")
    {
        dica = "adjetivo";
    }
//Início da parte em que as tentativas são feitas e as letras analisadas
    while (tries >= 1)
    {
//"Resetando" a string de letras já analisadas de cada tentativa
        srl = "";
//Pedindo a tentativa do usuário e "resetando" as variáveis de acertos
        tyword = prompt(st1 + tries + st2);
        clet = 0;
        plet = 0;
//Analisando a quantidade de letras corretas e na posição correta
        for(i=0;i<letters;i++)
        {
            pind = 0;
            while(stword.indexOf(tyword[i],pind) != -1 && srl.indexOf(tyword[i]) == -1)
            {
                pind = stword.indexOf(tyword[i],pind)+1;
                clet++
            }
            if(tyword[i] == stword[i])
            {
                plet++;
            }
            srl += tyword[i];
        }
//Reduzindo o número de tentativas restantes a cada "chute" incorreto e finalizando a partida caso o usuário acerte
        if (tyword != stword)
        {
            tries--;
//Perguntando se o jogador gostaria de uma dica ao chegar a 3 tentativas restantes
            if(tries == 3)
            {
                wt = prompt("Gostaria de uma dica?(Digite \"sim\" ou \"não\")").toLowerCase();
                if(wt == "sim" || wt == "s")
                {
                    alert("A palavra correta é um "+dica+".");
                }
            }
        }
        else
        {
            break;
        }      
//Inserindo os dados da tentativa feita no prompt para a próxima tentativa
        st2 += tyword + "-" + clet + "-" + plet+ "\n";
    }
//Definido se o usuário venceu ou perdeu e pergundando se ele gostaria de jogar novamente
    if (tries >= 1)
    {
        alert("Parabéns, você venceu!!!");
        ng = prompt("Deseja jogar novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
    else
    {
        ng = prompt("Você gastou todas as suas chances e perdeu; a palavra era \""+stword+"\". Deseja tentar novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
//Pergundando se o usuário gostaria de ler as regras/explicação do jogo novamente
    if(ng == "sim" || ng == "s")
    {
        rexp = prompt("Deseja ler as regras/explicação novamente?(Digite \"sim\" ou \"não\")").toLowerCase();
    }
}
