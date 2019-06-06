//AAAAAAAAAAAAAAAAAA SUDOKU
var n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, r1, r2, r3;
var coord;
var jogo;
var aux = 0;
n14 = Math.ceil(Math.random()*4);
n15 = Math.ceil(Math.random()*4);
n16 = Math.ceil(Math.random()*4);
jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
alert("Este é um sudoku, nele, você digita as coordenadas e o número a ser inserido, ele já vem preenchido com 3 números aleatórios, não existem quadrantes nesse sudoku, a única regra existente é que: um número não pode ser igual a outro que está na sua mesma linha ou coluna. Divirta-se! ");
alert("Esse é o tabuleiro inicial:\n"+jogo);
switch (aux)
{
    case 0:
    {
       coord = prompt("Primeira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|"+n1+"|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|"+n1+"|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|"+n1+"|_|_|"+n16+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|"+n1+"|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'B2' || coord == 'b2')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|"+n1+"|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|"+n1+"|_|"+n16+"|";
       }
       if(coord == 'C1' || coord == 'c1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|"+n1+"|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|"+n1+"|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|"+n1+"|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|"+n1+"|"+n16+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|"+n1+"|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|"+n1+"|\n3|"+n15+"|_|_|_|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'D3' || coord == 'd3')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  A BC D\n1|_|_|_|_|\n2|_|"+n14+"|_|_|\n3|"+n15+"|_|_|"+n1+"|\n4|_|_|_|"+n16+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
              coord = prompt("Segunda jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
    }
}
