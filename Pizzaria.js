/*Elaborar um programa para uma pizzaria que leia a quantidade e o valor de pizzas solicitadas, a quantidade e o valor das bebidas, ao final, calcule e
informe o valor as ser pago pelo cliente com um desconto promocional de 5%;*/

var vPizza,vBebida,qPizza,qBebida,vTPizza,vTBebida,vTotal,cupom;
vPizza = parseFloat(prompt("Digite o valor da pizza:"));
vBebida = parseFloat(prompt("Digite o valor da bebida:"));
qPizza = parseInt(prompt("Digite a quantidade de pizzas:"));
qBebida = parseInt(prompt("Digite a quantidade de bebidas:"));
cupom = prompt("Cupom de 5%?");
if (cupom == "Sim" || cupom == "sIm" || cupom == "siM" || cupom == "sim" || cupom == "SIM" || cupom == "s" || cupom == "S" || cupom == "y" || cupom == "Y" || cupom == "Yeah" || cupom == "yEah" || cupom == "yeAh" || cupom == "yeaH" || cupom == "yeah" || cupom == "Yea" || cupom == "yEa" || cupom == "yeA" || cupom == "Ye" || cupom == "yE" || cupom == "Yep" || cupom == "yEp" || cupom == "yeP" || cupom == "ye" || cupom == "Ya" || cupom == "yA" || cupom == "ya")
{
    vTPizza = vPizza * qPizza;
    vTBebida = vBebida * qBebida;
    vTotal = vTPizza + vTBebida;    
    vTotal = vTotal - vTotal * 5 / 100;
    alert("O valor total será: R$"+vTotal.toFixed(2)+".");
}
if (cupom == "Não" || cupom == "nÃo" || cupom == "nãO" || cupom == "não" || cupom == "NÃO" || cupom == "Nao" || cupom == "nAo" || cupom == "naO" || cupom == "n" || cupom == "N" || cupom == "Nah" || cupom == "nAh" || cupom == "naH" || cupom == "nah" || cupom == "Na" || cupom == "nA" || cupom == "na" || cupom == "Nope" || cupom == "nOpe" || cupom == "noPe" || cupom == "nopE" || cupom == "nope")
{
vTPizza = vPizza * qPizza;
    vTBebida = vBebida * qBebida;
    vTotal = vTPizza + vTBebida;    
    alert("O valor total será: R$"+vTotal.toFixed(2)+".");
}
if (cupom != "Sim" & cupom != "sIm" & cupom != "siM" & cupom != "sim" & cupom != "SIM" & cupom != "s" & cupom != "S" & cupom != "y" & cupom != "Y" & cupom != "Yeah" & cupom != "yEah" & cupom != "yeAh" & cupom != "yeaH" & cupom != "yeah" & cupom != "Yea" & cupom != "yEa" & cupom != "yeA" & cupom != "Ye" & cupom != "yE" & cupom != "Yep" & cupom != "yEp" & cupom != "yeP" & cupom != "ye" & cupom != "Ya" & cupom != "yA" & cupom != "ya" & cupom != "Não" & cupom != "nÃo" & cupom != "nãO" & cupom != "não" & cupom != "NÃO" & cupom != "Nao" & cupom != "nAo" & cupom != "naO" & cupom != "n" & cupom != "N" & cupom != "Nah" & cupom != "nAh" & cupom != "naH" & cupom != "nah" & cupom != "Na" & cupom != "nA" & cupom != "na" & cupom != "Nope" & cupom != "nOpe" & cupom != "noPe" & cupom != "nopE" & cupom != "nope")
{
alert("Vai toma no cu");
}
