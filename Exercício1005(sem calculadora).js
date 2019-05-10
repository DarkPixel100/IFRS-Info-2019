//Criar um programa que leia o peso e a altura da pessoa e determine o seu IMC(Índice de massa corporal)
var peso, altura, imc;
peso = parseFloat(prompt("Digite o seu peso em quilos:"));
altura = parseFloat(prompt("Digite a sua altura em centímetros:"));
imc = ((peso*10000) / (Math.pow(altura,2))).toFixed(2);
if(peso < 18.5)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Abaixo do peso");
}
else if (imc >= 18.5 && imc <=25)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Peso normal");
}
else if (imc >= 25 && imc <30)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Sobrepeso");
}
else if (imc >= 30 && imc <35)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Obesidade grau 1");
}
else if (imc >= 35 && imc <40)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Obesidade grau 2");
}
else if (imc >= 40)
{
    alert("O seu IMC é de "+imc+", o que se classifica como Obesidade grau 3");
}
