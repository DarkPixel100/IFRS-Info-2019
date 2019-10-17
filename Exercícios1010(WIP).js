//Exercício 1:
var vet = [];
var n, p1c, p2c, p1n, p2n;
var p1 = 0;
var p2 = 0;
var s = "";
do
{
    n = parseInt(prompt("Digite um número par maior que 2:"));
    if(n%2 != 0 || n<4)
    {
        alert("O número digitado é inválido, digite novamente");
    }
}while(n%2 != 0 || n<4)
for(i=0;i<n;i++)
{
    vet.push(Math.ceil(Math.random()*100));
}
p1n = prompt("Digite o nome do jogador 1").trim();
p2n = prompt("Digite o nome do jogador 2").trim();
while(vet.length > 0)
{
    do
    {
        p1c = parseInt(prompt(vet+"\n"+p1n+" - "+p1+"\n"+p2n+" - "+p2+"\nDeseja escolher a primeira ou a última posição?\n0-Primeira\n1-Última"));
        if(p1c != 0 && p1c != 1)
        {
            alert("O número digitado é inválido, digite novamente");
        }
    }while(p1c != 0 && p1c != 1)
    if(p1c == 0)
    {
        p1 += vet.shift();
    }
    else
    {
        p1 += vet.pop();
    }
    do
    {
        p2c = parseInt(prompt(vet+"\n"+p1n+" - "+p1+"\n"+p2n+" - "+p2+"\nDeseja escolher a primeira ou a última posição?\n0-Primeira\n1-Última"));
        if(p2c != 0 && p2c != 1)
        {
            alert("O número digitado é inválido, digite novamente");
        }
    }while(p2c != 0 && p2c != 1)
    if(p2c == 0)
    {
        p2 += vet.shift();
    }
    else
    {
        p2 += vet.pop();
    }
}
if(p1 > p2)
{
    alert(p1n+" ganhou! Ele tinha "+p1+" pontos, enquanto "+p2n+" tinha "+p2+" pontos");
}
else if (p1 < p2)
{
    alert(p2n+" ganhou! Ele tinha "+p2+" pontos, enquanto "+p1n+" 1 tinha "+p1+" pontos");
}
else 
{
    alert("Empate! Ambos com "+p1+" pontos");
}

//Exercício 2:
var att = "";
var vet = [];
var uvet = [];
var menu, opt, cho, gu;
do
{
    menu = "Em atendimento: "+att+"\nEspera:\n"+uvet.join("\n")+"\n"+vet.join("\n");
    opt = "\n1-Atender;2-Adicionar;3-Urgência;4-Desistir;5-Sair";
    do
    {
        cho = parseInt(prompt(menu+opt));
        if(cho != 1 && cho != 2 && cho != 3 && cho != 4 && cho != 5)
        {
            alert("Valor inválido, digite novamente");
        }
    }while(cho != 1 && cho != 2 && cho != 3 && cho != 4 && cho != 5)
    if(cho == 1 && (uvet.length != 0 && vet.length != 0))
    {
        if(uvet.length != 0)
        {
            att = uvet[0];
            uvet.shift();
        }
        else
        {
            att = vet[0];
            vet.shift();
        }
    }
    else if(cho == 2)
    {
        vet[vet.length] = (vet.length+1) + "." + (prompt("Digite o nome do paciente").trim());
    }
    else if(cho == 3)
    {
        uvet[uvet.length] = "U" + (uvet.length+1) + "." + (prompt("Digite o nome do paciente").trim());
    }
    else if(cho == 4)
    {
        gu = prompt(menu+"\nDigite o número da pessoa que desistiu").trim().toUpperCase();
        if(gu[0] == "U")
        {
            uvet.splice(parseInt(gu[1])-1,1);
        }
        else
        {
            vet.splice(parseInt(gu)-1,1);
        }
    }
}while(cho != 5)
