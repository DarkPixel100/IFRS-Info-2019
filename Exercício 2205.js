//Criar um programa que informe a quantidade todal de calorías de uma refeição a partir das informações do usuário em relação ao prato, a sobremesa e a bebida
var prato, beb, sob;
var cal = 0;
var prc = 0;
prato = prompt("Escolha seu prato:\n0-Nada\n1-Carne R$20,00\n2-Frango R$15,00\n3-Peixe R$17,00\n4-Vegetariano R$12,00");
beb = prompt("Escolha sua bebida:\n0-Nada\n1-Água(600mL) R$3,00\n2-Coca-Cola(350mL) R$5,00\n3-Suco de Laranja R$6,00\n4-Suco de Limão R$5,50");
sob = prompt("Escolha sua sobremesa:\n0-Nada\n1-Brigadeiro R$3,00\n2-Gelatina(150g) R$2,50\n3-Pudim(150g) R$2,50\n4-Arroz de Leite(150g) R$3,00");
if(prato === '1')
{
    cal = cal + 350;
    prc = prc + 20;
}
else if(prato === '2')
{
    cal = cal + 250;
    prc = prc + 15;
}
else if(prato === '3')
{
    cal = cal + 230;
    prc = prc + 17;
}
else if(prato === '4')
{
    cal = cal + 180;
    prc = prc + 12;
}
if(beb == '1')
{
    prc = prc + 3;
}
else if(beb === '2')
{
    cal = cal + 149;
    prc = prc + 5;
}
else if(beb === '3')
{
    cal = cal + 113;
    prc = prc + 6;
}
else if(beb === '4')
{
    cal = cal + 61;
    prc = prc + 5.5;
}
if(sob === '1')
{
    cal = cal + 72;
    prc = prc + 3;
}
else if(sob == '2')
{
    cal = cal + 80;
    prc = prc + 2.5;
}
else if(sob == '3')
{
    cal = cal + 109;
    prc = prc + 2.5;
}
else if(sob == '4')
{
    cal = cal + 300;
    prc = prc + 3;
}
alert("Você consumiu "+cal+" calorias e a conta é de R$"+parseInt(prc)+","+(prc-parseInt(prc))*10+"0.");
