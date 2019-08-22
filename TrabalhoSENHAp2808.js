var diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
var bdez = "|amor|cota|coxo|mito|soar|zelo|pose|agir|rude|traz|logo|seio|frio|suar|item|tema|isso|sair|fuga|luta|hoje|indo|meia|usar|fome|alfa|dano|peso|aula|show|";
var bdmd = "|||||||||||||||||||||||||||||||";
var bdhd = "|||||||||||||||||||||||||||||||";
var stword, tries, pchsorted, tyword, letters, st1, st2;
var clet = 0;
var plet = 0;
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
    pchsorted = Math.round(Math.random() * 174);
    stword = bdez.substring(bdhd.indexOf('|', pchsorted) + 1, bdhd.indexOf('|', bdhd.indexOf('|', pchsorted) + 1));
}
letters = stword.length;
st1 = "Digite uma palavra de " + letters + " letras, você tem "
st2 = " tentativas\nPalavra-Letras certas-Letras na posição certa\n";
while (tries >= 1)
{
    tyword = prompt(st1 + tries + st2);
    if (tyword != stword)
    {
        tries--;
    }
    for (i = 0; i < letters; i++)
    {
        for (j = 0; stword.indexOf(tyword[i],j) != -1; j++)
        {
            clet++;
            if(tyword[i] == stword[i])
            {
                plet++;
            }
        }
    }
    st2 += tyword + "-" + clet + "-" + plet + "\n";
    clet = 0;
    plet = 0;

}
if (tries >= 1)
{
    alert("Parabéns, você venceu!!!");
}
else
{
    prompt("Você perdeu, deseja tentar novamente?(Digite \"sim\" ou \"não\")")
}
