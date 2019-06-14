var num, coord, jogo, aux, sc;
var Vjogo = [];
var VjogoLCQ = [];
alert("Esse é um sudoku, as regras são:\n1-Esse é um tabuleiro 4x4, ou seja, o números a serem inseridos devem ser entre 1 e 4;\n2-Não podemexistir números iguais em uma mesma linha, coluna ou quadrante(Quadrados 2x2 que dividem o tabuleiro em 4);\n3-Um número inserido não pode ser substituído.\nDivirta-se!");
Game();
function Game()
{
    for(j=0;j<13;j++)
    {
        Vjogo[j] = '_';
    }
    Vjogo[13] = Math.ceil(Math.random()*4);
    Vjogo[14] = Math.ceil(Math.random()*4);
    Vjogo[15] = Math.ceil(Math.random()*4);
    aux = 0;
    function Jogada()
    {
        var jogo = "  1 2 3 4\nA|"+Vjogo[0]+"|"+Vjogo[1]+"|"+Vjogo[2]+"|"+Vjogo[3]+"|\nB|"+Vjogo[4]+"|"+Vjogo[13]+"|"+Vjogo[5]+"|"+Vjogo[6]+"|\nC|"+Vjogo[14]+"|"+Vjogo[7]+"|"+Vjogo[8]+"|"+Vjogo[9]+"|\nD|"+Vjogo[10]+"|"+Vjogo[11]+"|"+Vjogo[15]+"|"+Vjogo[12]+"|";
        var coord = prompt("Digite a coordenada onde o número será colocado:\n"+jogo);
        var num = Number(prompt("Digite o número a ser colocado:\n"+jogo));
        if(coord == 'a1' || coord == 'A1')
        {
            if(Vjogo[0] == '_')
            {
                Vjogo[0] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'a2' || coord == 'A2')
        {
            if(Vjogo[1] == '_')
            {
                Vjogo[1] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'a3' || coord == 'A3')
        {
            if(Vjogo[2] == '_')
            {
                Vjogo[2] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'a4' || coord == 'A4')
        {
            if(Vjogo[3] == '_')
            {
                Vjogo[3] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'b1' || coord == 'B1')
        {
            if(Vjogo[4] == '_')
            {
                Vjogo[4] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'b2' || coord == 'B2')
        {
            if(Vjogo[5] == '_')
            {
                Vjogo[5] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'b3' || coord == 'B3')
        {
            if(Vjogo[6] == '_')
            {
                Vjogo[6] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'b4' || coord == 'B4')
        {
            if(Vjogo[7] == '_')
            {
                Vjogo[7] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c1' || coord == 'C1')
        {
            if(Vjogo[8] == '_')
            {
                Vjogo[8] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c2' || coord == 'C2')
        {
            if(Vjogo[9] == '_')
            {
                Vjogo[9] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c3' || coord == 'C3')
        {
            if(Vjogo[10] == '_')
            {
                Vjogo[10] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c4' || coord == 'C4')
        {
            if(Vjogo[11] == '_')
            {
                Vjogo[11] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd1' || coord == 'D1')
        {
            if(Vjogo[12] == '_')
            {
                Vjogo[12] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd2' || coord == 'D2')
        {
            if(Vjogo[13] == '_')
            {
                Vjogo[13] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd3' || coord == 'D3')
        {
            if(Vjogo[14] == '_')
            {
                Vjogo[14] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd4' || coord == 'D4')
        {
            if(Vjogo[15] == '_')
            {
                Vjogo[15] = num;
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        else if (coord != 'a1' && coord != 'A1' && coord != 'a2' && coord != 'A2' && coord != 'a3' && coord != 'A3' && coord != 'a4' && coord != 'A4' && coord != 'b1' && coord != 'B1' && coord != 'b2' && coord != 'B2' && coord != 'b3' && coord != 'B3' && coord != 'b4' && coord != 'B4' && coord != 'c1' && coord != 'C1' && coord != 'c2' && coord != 'C2' && coord != 'c3' && coord != 'C3' && coord != 'c4' && coord != 'C4' && coord != 'd1' && coord != 'D1' && coord != 'd2' && coord != 'D2' && coord != 'd3' && coord != 'D3' && coord != 'd4' && coord != 'D4')
        {
            alert("Essa posição não existe.");
        }
    }
    for(i=0;i<13;i++)
    {
        Jogada();
    }
    VjogoLCQ[0] = Vjogo[0] + Vjogo[1] + Vjogo[2] + Vjogo[3];
    VjogoLCQ[1] = Vjogo[4] + Vjogo[13] + Vjogo[5] + Vjogo[6];
    VjogoLCQ[2] = Vjogo[14] + Vjogo[7] + Vjogo[8] + Vjogo[9];
    VjogoLCQ[3] = Vjogo[10] + Vjogo[11] + Vjogo[15] + Vjogo[12];
    VjogoLCQ[4] = Vjogo[0] + Vjogo[4] + Vjogo[14] + Vjogo[10];
    VjogoLCQ[5] = Vjogo[1] + Vjogo[13] + Vjogo[7] + Vjogo[11];
    VjogoLCQ[6] = Vjogo[2] + Vjogo[5] + Vjogo[8] + Vjogo[15];
    VjogoLCQ[7] = Vjogo[3] + Vjogo[6] + Vjogo[9] + Vjogo[12];
    VjogoLCQ[8] = Vjogo[0] + Vjogo[1] + Vjogo[4] + Vjogo[13];
    VjogoLCQ[9] = Vjogo[2] + Vjogo[3] + Vjogo[5] + Vjogo[6];
    VjogoLCQ[10] = Vjogo[14] + Vjogo[7] + Vjogo[10] + Vjogo[11];
    VjogoLCQ[11] = Vjogo[8] + Vjogo[9] + Vjogo[15] + Vjogo[12];
    for(k=0;k<12;k++)
    if(VjogoLCQ[0] == VjogoLCQ[k])
    {
        aux++;
    }
    if(aux == 13)
    {
        alert("Parabéns! Você venceu!");
    }
    else
    {
        sc = prompt("Você perdeu, deseja jogar novamente?(Digite \"Sim\" ou \"Não\")");
        if (sc == "Não" || sc == "não" || sc == "Nao" || sc == "nao")
        {
            alert("Ok, tchau :)");
        }
        else if(sc == "Sim" || sc == "sim")
        {
            Game();
        }
    }
}
