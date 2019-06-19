var coord, jogo, jn, l1, l2, l3, l4, c1, c2, c3, c4, q1, q2, q3, q4;
var Vjogo = [];
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
    function Jogada()
    {
        jogo = "  1 2 3 4\nA|"+Vjogo[0]+"|"+Vjogo[1]+"|"+Vjogo[2]+"|"+Vjogo[3]+"|\nB|"+Vjogo[4]+"|"+Vjogo[5]+"|"+Vjogo[6]+"|"+Vjogo[13]+"|\nC|"+Vjogo[14]+"|"+Vjogo[7]+"|"+Vjogo[8]+"|"+Vjogo[9]+"|\nD|"+Vjogo[10]+"|"+Vjogo[11]+"|"+Vjogo[15]+"|"+Vjogo[12]+"|";
        coord = prompt("Digite a coordenada onde o número será colocado:\n"+jogo);
        if(coord == 'a1' || coord == 'A1')
        {
            if(Vjogo[0] == '_')
            {
                Vjogo[0] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[0] != "1" && Vjogo[0] != "2" && Vjogo[0] != "3" && Vjogo[0] != "4")
                {
                    Vjogo[0] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[1] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[1] != "1" && Vjogo[1] != "2" && Vjogo[1] != "3" && Vjogo[1] != "4")
                {
                    Vjogo[1] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[2] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[2] != "1" && Vjogo[2] != "2" && Vjogo[2] != "3" && Vjogo[2] != "4")
                {
                    Vjogo[2] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[3] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[3] != "1" && Vjogo[3] != "2" && Vjogo[3] != "3" && Vjogo[3] != "4")
                {
                    Vjogo[3] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[4] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[4] != "1" && Vjogo[4] != "2" && Vjogo[4] != "3" && Vjogo[4] != "4")
                {
                    Vjogo[4] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[5] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[5] != "1" && Vjogo[5] != "2" && Vjogo[5] != "3" && Vjogo[5] != "4")
                {
                    Vjogo[5] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
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
                Vjogo[6] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[6] != "1" && Vjogo[6] != "2" && Vjogo[6] != "3" && Vjogo[6] != "4")
                {
                    Vjogo[6] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'b4' || coord == 'B4')
        {
            alert("Essa posição não está disponível, tente novamente.");
            Jogada();
        }
        if(coord == 'c1' || coord == 'C1')
        {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
        }
        if(coord == 'c2' || coord == 'C2')
        {
            if(Vjogo[7] == '_')
            {
                Vjogo[7] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[7] != "1" && Vjogo[7] != "2" && Vjogo[7] != "3" && Vjogo[7] != "4")
                {
                    Vjogo[7] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c3' || coord == 'C3')
        {
            if(Vjogo[8] == '_')
            {
                Vjogo[8] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[8] != "1" && Vjogo[8] != "2" && Vjogo[8] != "3" && Vjogo[8] != "4")
                {
                    Vjogo[8] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'c4' || coord == 'C4')
        {
            if(Vjogo[9] == '_')
            {
                Vjogo[9] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[9] != "1" && Vjogo[9] != "2" && Vjogo[9] != "3" && Vjogo[9] != "4")
                {
                    Vjogo[9] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd1' || coord == 'D1')
        {
            if(Vjogo[10] == '_')
            {
                Vjogo[10] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[10] != "1" && Vjogo[10] != "2" && Vjogo[10] != "3" && Vjogo[10] != "4")
                {
                    Vjogo[10] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd2' || coord == 'D2')
        {
            if(Vjogo[11] == '_')
            {
                Vjogo[11] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[11] != "1" && Vjogo[11] != "2" && Vjogo[11] != "3" && Vjogo[11] != "4")
                {
                    Vjogo[11] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if(coord == 'd3' || coord == 'D3')
        {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
        }
        if(coord == 'd4' || coord == 'D4')
        {
            if(Vjogo[12] == '_')
            {
                Vjogo[12] = Number(prompt("Digite o número a ser colocado:\n"+jogo));
                if(Vjogo[12] != "1" && Vjogo[12] != "2" && Vjogo[12] != "3" && Vjogo[12] != "4")
                {
                    Vjogo[12] = '_';
                    alert("Este caractere não é um número de 1 a 4, tente novamente.");
                    Jogada();
                }
            }
            else
            {
                alert("Essa posição não está disponível, tente novamente.");
                Jogada();
            }   
        }
        if (coord != 'a1' && coord != 'A1' && coord != 'a2' && coord != 'A2' && coord != 'a3' && coord != 'A3' && coord != 'a4' && coord != 'A4' && coord != 'b1' && coord != 'B1' && coord != 'b2' && coord != 'B2' && coord != 'b3' && coord != 'B3' && coord != 'b4' && coord != 'B4' && coord != 'c1' && coord != 'C1' && coord != 'c2' && coord != 'C2' && coord != 'c3' && coord != 'C3' && coord != 'c4' && coord != 'C4' && coord != 'd1' && coord != 'D1' && coord != 'd2' && coord != 'D2' && coord != 'd3' && coord != 'D3' && coord != 'd4' && coord != 'D4')
        {
            alert("Essa posição não existe.");
        }
        jogo = "  1 2 3 4\nA|"+Vjogo[0]+"|"+Vjogo[1]+"|"+Vjogo[2]+"|"+Vjogo[3]+"|\nB|"+Vjogo[4]+"|"+Vjogo[5]+"|"+Vjogo[6]+"|"+Vjogo[13]+"|\nC|"+Vjogo[14]+"|"+Vjogo[7]+"|"+Vjogo[8]+"|"+Vjogo[9]+"|\nD|"+Vjogo[10]+"|"+Vjogo[11]+"|"+Vjogo[15]+"|"+Vjogo[12]+"|";
    }
    for(;;)
    {
        Jogada();
        if(Vjogo[0] != '_' && Vjogo[1] != '_' && Vjogo[2] != '_' && Vjogo[3] != '_' && Vjogo[4] != '_' && Vjogo[5] != '_' && Vjogo[6] != '_' && Vjogo[7] != '_' && Vjogo[8] != '_' && Vjogo[9] != '_' && Vjogo[10] != '_' && Vjogo[11] != '_' && Vjogo[12] != '_' && Vjogo[13] != '_' && Vjogo[14] != '_' && Vjogo[15] != '_')
        {
            break;
        }
    }
    l1 = Vjogo[0] + Vjogo[1] + Vjogo[2] + Vjogo[3];
    l2 = Vjogo[4] + Vjogo[5] + Vjogo[6] + Vjogo[13];
    l3 = Vjogo[14] + Vjogo[7] + Vjogo[8] + Vjogo[9];
    l4 = Vjogo[10] + Vjogo[11] + Vjogo[15] + Vjogo[12];
    c1 = Vjogo[0] + Vjogo[4] + Vjogo[14] + Vjogo[10];
    c2 = Vjogo[1] + Vjogo[5] + Vjogo[7] + Vjogo[11];
    c3 = Vjogo[2] + Vjogo[6] + Vjogo[8] + Vjogo[15];
    c4 = Vjogo[3] + Vjogo[13] + Vjogo[9] + Vjogo[12];
    q1 = Vjogo[0] + Vjogo[1] + Vjogo[4] + Vjogo[5];
    q2 = Vjogo[2] + Vjogo[3] + Vjogo[6] + Vjogo[13];
    q3 = Vjogo[14] + Vjogo[7] + Vjogo[10] + Vjogo[11];
    q4 = Vjogo[8] + Vjogo[9] + Vjogo[15] + Vjogo[12];
    if(l1 == l2 && l1 == l3 && l1 == l4 && l1 == c1 && l1 == c2 && l1 == c3 && l1 == c4 && l1 == q1 && l1 == q2 && l1 == q3 && l1 == q4)
    {
        jn = prompt("Parabéns! Você venceu! Deseja jogar novamente?(Digite \"Sim\" ou \"Não\")");
        if (jn == "Não" || jn == "não" || jn == "Nao" || jn == "nao")
        {
            alert("Ok, tchau :)");
        }
        else if(jn == "Sim" || jn == "sim")
        {
            Game();
        }
    }
    else
    {
        jn = prompt("Você perdeu, deseja jogar novamente?(Digite \"Sim\" ou \"Não\")");
        if (jn == "Não" || jn == "não" || jn == "Nao" || jn == "nao")
        {
            alert("Ok, tchau :)");
        }
        else if(jn == "Sim" || jn == "sim")
        {
            Game();
        }
    }
}
