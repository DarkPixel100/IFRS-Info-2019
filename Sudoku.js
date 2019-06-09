var n1 = "_";
var n2 = "_";
var n3 = "_";
var n4 = "_";
var n5 = "_";
var n6 = "_";
var n7 = "_";
var n8 = "_";
var n9 = "_";
var n10 = "_";
var n11 = "_";
var n12 = "_";
var n13 = "_";
r1 = Math.ceil(Math.random()*4);
r2 = Math.ceil(Math.random()*4);
r3 = Math.ceil(Math.random()*4);
var coord;
var jogo;
var aux = 0;
var sc;
jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
alert("Este é um sudoku, nele, você digita as coordenadas e o número a ser inserido. Ele já vem preenchido com 3 números aleatórios(ATENÇÃO, caso haja uma tentativa de se colocar um número em uma posição que continha um dos números aleatórios, o jogo terminará), não existem quadrantes nesse sudoku, a única regra existente é que: um número não pode ser igual a outro que está na sua mesma linha ou coluna. Divirta-se! ");
alert("Esse é o tabuleiro inicial:\n"+jogo);

switch (aux)
{
    case 0:
    {
       coord = prompt("Primeira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       
       
       coord = prompt("Segunda jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Terceira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Quarta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1  23 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Quinta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Sexta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Sétima jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Oitava jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Nona jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima-primeira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima-segunda jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima-terceira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4')
       {
            n4 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       /*  1   2   3   4
       A|n1 |n2 |n3|n4 |
       B|n5 |r1 |n6|n7 |
       C|r2 |n8 |n9|n10|
       D|n11|n12|r3|n13|
       1  ((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11))
       2  ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12))
       3  ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3))
       4  (n4 != n7 && n4 != n10 && n4 != n13)
       5  ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11))
       6  ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12))
       7  ((n6 != n7)&&(n6 != n9 && n6 != r3))
       8  (n7 != n10 && n7 != n13)
       9  ((r2 != n8 && r2 != n9 && r2 != n10)&&(r2 != n11))
       10 ((n8 != n9 && n8 != n10)&&(n8 != n12))
       11 ((n9 != n10)&&(n9 != r3))
       12 (n10 != n13)
       13 (n11 != n12 && n11 != r3 && n11 != n13)
       14 (n12 != r3 && n12 != n13)
       15 (r3 != n13)
       F  ((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11)) && ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12)) && ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3)) && (n4 != n7 && n4 != n10 && n4 != n13) && ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11)) && ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12)) && ((n6 != n7)&&(n6 != n9 && n6 != r3)) && (n7 != n10 && n7 != n13) && ((r2 != n8 && r2 != n9 && r2 != n10)&&(r2 != n11)) && ((n8 != n9 && n8 != n10)&&(n8 != n12)) && ((n9 != n10)&&(n9 != r3)) && (n10 != n13) && (n11 != n12 && n11 != r3 && n11 != n13) && (n12 != r3 && n12 != n13) && (r3 != n13)
     */  
       if(((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11)) && ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12)) && ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3)) && (n4 != n7 && n4 != n10 && n4 != n13) && ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11)) && ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12)) && ((n6 != n7)&&(n6 != n9 && n6 != r3)) && (n7 != n10 && n7 != n13) && ((r2 != n8 && r2 != n9 && r2 != n10) && (r2 != n11)) && ((n8 != n9 && n8 != n10)&&(n8 != n12)) && ((n9 != n10)&&(n9 != r3)) && (n10 != n13) && (n11 != n12 && n11 != r3 && n11 != n13) && (n12 != r3 && n12 != n13) && (r3 != n13) && (n1 != '_' && n2 != '_' && n3 != '_' && n4 != '_' && n5 != '_' && n6 != '_' && n7 != '_' && n8 != '_' && n9 != '_' && n10 != '_' && n11 != '_' && n12 != '_' && n13 != '_'))
       {
            alert("Parabéns! Você venceu!");
       }
       else
       {
           sc = prompt("Você falhou, deseja tentar novamente, mas agora com 4 números preenchidos(digite sim ou não)?");
       }
       if(sc == "não")
       {
           alert("Ok, tchau :)");
       }
       else if (sc == "sim")
       {
          alert("Ok, o novo número preenchido está na posição A4");
          n1 = "_";
          n2 = "_";
          n3 = "_";
          n5 = "_";
          n6 = "_";
          n7 = "_";
          n8 = "_";
          n9 = "_";
          n10 = "_";
          n11 = "_";
          n12 = "_";
          n13 = "_"; 
          n4 = Math.ceil(Math.random()*4);
           jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
           coord = prompt("Primeira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       
       
       coord = prompt("Segunda jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Terceira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Quarta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1  23 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Quinta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Sexta jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Sétima jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Oitava jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Nona jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima-primeira jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       coord = prompt("Décima-segunda jogada. Digite a coordenada(A1, A2, ... B1, B2, ...) que representa a posição na qual o número que será digitado estará:\n"+jogo);
       
       
       if(coord == 'A1' || coord == 'a1')
       {
            n1 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A2' || coord == 'a2')
       {
            n2 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A3' || coord == 'a3')
       {
            n3 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'A4' || coord == 'a4' || coord == 'B2' || coord == 'b2' || coord == 'C1' || coord == 'c1' || coord == 'D3' || coord == 'd3')
       {
            alert("Essa posição não está disponível, reinicie o jogo.");
            break;
       }
       if(coord == 'B1' || coord == 'b1')
       {
            n5 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B3' || coord == 'b3')
       {
            n6 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'B4' || coord == 'b4')
       {
            n7 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C2' || coord == 'c2')
       {
            n8 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C3' || coord == 'c3')
       {
            n9 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'C4' || coord == 'c4')
       {
            n10 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D1' || coord == 'd1')
       {
            n11 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D2' || coord == 'd2')
       {
            n12 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       if(coord == 'D4' || coord == 'd4')
       {
            n13 = prompt("Digite o número a ser colocado nas coordenadas digitadas:\n"+jogo);
            jogo = "  1 2 3 4\nA|"+n1+"|"+n2+"|"+n3+"|"+n4+"|\nB|"+n5+"|"+r1+"|"+n6+"|"+n7+"|\nC|"+r2+"|"+n8+"|"+n9+"|"+n10+"|\nD|"+n11+"|"+n12+"|"+r3+"|"+n13+"|";
       }
       /*  1   2   3   4
       A|n1 |n2 |n3|n4 |
       B|n5 |r1 |n6|n7 |
       C|r2 |n8 |n9|n10|
       D|n11|n12|r3|n13|
       1  ((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11))
       2  ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12))
       3  ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3))
       4  (n4 != n7 && n4 != n10 && n4 != n13)
       5  ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11))
       6  ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12))
       7  ((n6 != n7)&&(n6 != n9 && n6 != r3))
       8  (n7 != n10 && n7 != n13)
       9  ((r2 != n8 && r2 != n9 && r2 != n10)&&(r2 != n11))
       10 ((n8 != n9 && n8 != n10)&&(n8 != n12))
       11 ((n9 != n10)&&(n9 != r3))
       12 (n10 != n13)
       13 (n11 != n12 && n11 != r3 && n11 != n13)
       14 (n12 != r3 && n12 != n13)
       15 (r3 != n13)
       F  ((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11)) && ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12)) && ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3)) && (n4 != n7 && n4 != n10 && n4 != n13) && ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11)) && ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12)) && ((n6 != n7)&&(n6 != n9 && n6 != r3)) && (n7 != n10 && n7 != n13) && ((r2 != n8 && r2 != n9 && r2 != n10)&&(r2 != n11)) && ((n8 != n9 && n8 != n10)&&(n8 != n12)) && ((n9 != n10)&&(n9 != r3)) && (n10 != n13) && (n11 != n12 && n11 != r3 && n11 != n13) && (n12 != r3 && n12 != n13) && (r3 != n13)
     */  
       if(((n1 != n2 && n1 != n3 && n1 != n4) && (n1 != n5 && n1 != r2 && n1 != n11)) && ((n2 != n3 && n2 != n4)&&(n2 != r1 && n2 != n8 && n1 != n12)) && ((n3 != n4)&&(n3 != n6 && n3 != n9 && n3 != r3)) && (n4 != n7 && n4 != n10 && n4 != n13) && ((n5 != r1 && n5 != n6 && n5 != n7) && (n5 != r2 && n5 != n11)) && ((r1 != n6 && r1 != n7)&&(r1 != n8 && r1 != n12)) && ((n6 != n7)&&(n6 != n9 && n6 != r3)) && (n7 != n10 && n7 != n13) && ((r2 != n8 && r2 != n9 && r2 != n10) && (r2 != n11)) && ((n8 != n9 && n8 != n10)&&(n8 != n12)) && ((n9 != n10)&&(n9 != r3)) && (n10 != n13) && (n11 != n12 && n11 != r3 && n11 != n13) && (n12 != r3 && n12 != n13) && (r3 != n13) && (n1 != '_' && n2 != '_' && n3 != '_' && n4 != '_' && n5 != '_' && n6 != '_' && n7 != '_' && n8 != '_' && n9 != '_' && n10 != '_' && n11 != '_' && n12 != '_' && n13 != '_'))
       {
            alert("Parabéns! Você venceu!");
       }
       else
       {
            alert("Você falhou, para jogar novamente recomece o jogo.");
       }
    }
}
