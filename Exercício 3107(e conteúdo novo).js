//Inverta uma palavra:
var x = prompt("Digite uma palavra:");
var y = "";
for(i=0;i<x.length;i++)
{
  y += x[x.length-(i+1)];
}
alert(y);

// charAt(n);

// charCodeAt(n);
// String.fromCharCode(n);

// toLowerCase();
// toUpperCase();

// ""+123 = "123" ou 123.toString = "123"

//Inverta uma palavra e coloque-a em letras maiúsculas:
var x = prompt("Digite uma palavra:");
var y = "";
for(i=0;i<x.length;i++)
{
  y += x[x.length-(i+1)];
}
alert(y.toUpperCase());

//"abc".repeat(2) = "abcabc";

//indexOf("abc",inicio(opcional)). Ex: a = "banana banana banana aba"; a.indexOf("n") = 2, ou a.indexOf("n", 3) = 4;
//lastIndexOf("abc",inicio(opcional)). Ex: a = "banana banana banana aba"; a.lastindexOf("banana") = 14;

//startsWith("abc") (boolean);
//endsWith("abc") (boolean);
