alert("Digite 0 para sair:");
while(true)
{
    var num = Number(prompt("Número: "));
    if(num == 0 || isNaN(num))
    {
        var sair = prompt("Deseja sair?");
        if(sair == 'S' || sair == 's')
        {
            break;
        }
        else
        {
            continue;
        }
    }
    if(num%2 == 0)
    {
        alert("O dobro de "+num+" é: "+num*2);
    }
    else
    {
        alert("O triplo de "+num+" é: "+num*3);
    }
}
alert("FIM");
