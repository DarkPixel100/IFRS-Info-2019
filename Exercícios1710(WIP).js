//Exercício 1:
var m, s;
function velocidade (d,t)
{
    return d/t;
}
m = parseFloat(prompt("Digite a distância corrida:"));
s = parseFloat(prompt("Digite o tempo da corrida"));
alert("Velociade: "+velocidade(m,s).toFixed(2)+"m/s");

//Exercício 2:
var price, payed;
function pagamento(n1,n2)
{
    if(n1>n2)
    {
        return  "Devendo: R$"+(n1-n2).toFixed(2);
    }
    else if(n1 < n2)
    {
        return "Troco: R$"+(n2-n1).toFixed(2);
    }
    else
    {
        return "Pagamento exato";
    }
}
price = parseFloat(prompt("Digite o preço"));
payed = parseFloat(prompt("Digite a quantia já paga"));
alert(pagamento(price,payed));

//Exercício 3:
var n = prompt("Digite o nome completo do aluno");
function validarNome(nome)
{
    if (nome.split(" ").length >= 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function obterSobrenome(nome)
{
    return (nome.split(" ")[nome.split(" ").length-1]).toLowerCase();
}
function contarVogais(nome)
{
    var nv = 0;
    nome = nome.toLowerCase();
    for(i=0;i<nome.length;i++)
    {
        if(nome[i] == "a" || nome[i] == "e" || nome[i] == "i" || nome[i] == "o" || nome[i] == "u")
        {
            nv++;
        }
        if(nv<10)
        {
            nv = "0"+nv;
        }
    }
    return nv;
}
alert(obterSobrenome(n)+contarVogais(n));

//Exercício 4:
var price = parseFloat(prompt("Digite o preço da vacina"));
var conv = parseInt(prompt("O cliente possui qual convênio?\n0-Nenhum (10% de desconto)\n1-Amigo dos Animais (20% de desconto)\n2-Saúde animal (50% de desconto)"));
var taxa;
function calcularDesconto(val,tax)
{
    return val*tax/100;
}
if(conv == 0)
{
    taxa = 10;
}
else if(conv == 1)
{
    taxa = 20;
}
else if(conv == 2)
{
    taxa = 50;
}
alert("Taxa de desconto: "+taxa+"%\nValor final: R$ "+(price-calcularDesconto(price,taxa)).toFixed(2));

//Exercício 5:
var n = prompt("Digite o nome do atleta");
var a = parseInt(prompt("Digite a idade do atleta"));
function retornarTracos(nome)
{
    var s = "";
    for(i=0;i<nome.length;i++)
    {
        if(nome[i] != " ")
        {
            s += "-";
        }
        else
        {
            s+= " ";
        }
    }
    return s;
}
function categorizarAluno (idade)
{
    if(idade <= 12)
    {
        return "Infantil";
    }
    else if(idade >= 13 && idade <= 18)
    {
        return "Juvenil";
    }
    else if(idade >= 19)
    {
        return "Adulto"
    }
}
alert(n+"\n"+retornarTracos(n)+"\n"+categorizarAluno(a));

//Exercício 6:
var h = parseFloat(prompt("Digite a vida do personagem"));
var d = parseFloat(prompt("Digite o dano sofrido pelo personagem"));
function checkDeath(dano,saude)
{
    if(dano >= saude)
    {
        return true;
    }
    else
    {
        return false;
    }
}
checkDeath(d,h);

//Exercício 7:
var vet = [];
function temChave(arr)
{
    for(i=0;i<5;i++)
    {
        if(arr[i] == "chave")
        {
            return true;
        }
    }
    return false;
}
for(j=0;j<5;j++)
{
    vet[j] = prompt("Digite o nome do item no slot "+j);
}
temChave(vet);

//Exercício 8:
var p = parseInt(prompt("Insira a posição do inimigo"));
function LimitaPosicao (pos)
{
    if(pos < 0)
    {
        return 0;
    }
    else if(pos > 100)
    {
        return 100;
    }
    return pos;
}
LimitaPosicao(p);
