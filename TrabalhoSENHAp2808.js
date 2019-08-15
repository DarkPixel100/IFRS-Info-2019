var diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
var bdez = "|amor|cota|coxo|mito|soar|zelo|pose|agir|rude|traz|logo|seio|frio|suar|item|tema|isso|sair|fuga|luta|hoje|indo|meia|usar|fome|alfa|dano|peso|aula|show|";
var bdmd = "|||||||||||||||||||||||||||||||";
var bdhd = "|||||||||||||||||||||||||||||||";
var word, tries, pchsorted;
while(diff != 'f' && diff != '1' && diff != 'm' && diff != '2' && diff != 'd' && diff != '3')
{
    alert("O character digitado é inválido, digite novamente.");
    diff = prompt("Escolha uma dificuldade:\n-Fácil(F/f ou 1) - Palavras de 4 letras, 10 tentativas\n-Média(M/m ou 2) - Palavras de 5 letras, 15 tentativas\n-Difícil(D/d ou 3) - Palavras de 6 ou mais letras, 15 tentativas").toLowerCase();
}
if(diff == 'f' || diff == '1')
{
    tries = 10;
    pchsorted = Math.round(Math.random()*145);
    word = bdez.substring(bdez.indexOf('|',pchsorted)+1, bdez.indexOf('|', bdez.indexOf('|',pchsorted)+1));
}
else if(diff == 'm' || diff == '2')
{
    tries = 15;
    pchsorted = Math.round(Math.random()*174);
    word = bdez.substring(bdez.indexOf('|',pchsorted)+1, bdez.indexOf('|', bdez.indexOf('|',pchsorted)+1)); 
}
else if (diff == 'd' || diff == '3')
{
    tries = 15;
    pchsorted = Math.round(Math.random()*174);
    word = bdez.substring(bdez.indexOf('|',pchsorted)+1, bdez.indexOf('|', bdez.indexOf('|',pchsorted)+1));
}