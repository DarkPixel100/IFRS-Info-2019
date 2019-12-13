var s = "";
do
{
    var vet = [];
    var c01 = parseInt(prompt("Digite o primeiro valor do chunk inicial:"));
    var c02 = parseInt(prompt("Digite o segundo calor do chunk inicial:"));
    var c11 = parseInt(prompt("Digite o primeiro valor do chunk final:"));
    var c12 = parseInt(prompt("Digite o segundo calor do chunk final:"));
    for(i=Math.min(c01,c11);i<=Math.max(c01,c11);i++)
    {
        for(j=Math.min(c02,c12);j<=Math.max(c02,c12);j++)
        {
            vet.push(i + " " + j);
        }
    }
    s += vet.join("\n");
}while(confirm("Continuar?"))
console.log(s);
