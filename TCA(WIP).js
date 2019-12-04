//Função para colocar a tela em uma string
function refreshScr (arr, vres, hres, x, y, mob)
{
    var str;
    if(arr != rf)
    {
        str = "";
    }
    else
    {
        str = "Vida de Jorge:" + barr[0]*0.5 + "%\n";
    }
    for(rv=0;rv<vres;rv++)
    {
        if(rv == 0)
        {
            str += "_".repeat(hres*2+Math.ceil(hres/5)) + "\n";
        }
        for(rh=0;rh<hres;rh++)
        {
            if(rh == 0)
            {
                str += "|";
            }
            if(mob)
            {
                if(arr[y-(Math.ceil(vres/2))+rv+1] == undefined)
                {
                    arr[y-(Math.ceil(vres/2))+rv+1] = [];
                    arr[y-(Math.ceil(vres/2))+rv+1].length = hres;
                    arr[y-(Math.ceil(vres/2))+rv+1].fill(ept);
                }
                if(arr[y-(Math.ceil(vres/2))+rv+1][x-(Math.ceil(hres/2))+rh+1] == undefined)
                {
                    arr[y-(Math.ceil(vres/2))+rv+1][x-(Math.ceil(hres/2))+rh+1] = [ept];
                }
                if(arr[y-(Math.ceil(vres/2))+rv+1] != undefined && arr[y-(Math.ceil(vres/2))+rv+1][x-(Math.ceil(hres/2))+rh+1] != undefined)
                {
                    str += arr[y-(Math.ceil(vres/2))+rv+1][x-(Math.ceil(hres/2))+rh+1];
                }
            }
            else
            {
                str += arr[rv][rh];
            }
        }
        str += "|\n";
    }
    str += "‾".repeat(hres*2+Math.ceil(hres/5));
    return str;
}
//Funções de movimento vertical e horizontal(no plano 2d)
function movv (arr, ipt, x, y)
{
    if(ipt == "w")
    {
        if(arr[y-1][x] == ept || arr[y-1][x] == dpath || arr[y-1][x] == bplacer || arr[y-1][x] == mark)
        {
            arr[y][x] = aux;
            aux = arr[y-1][x];
            y--;
            arr[y][x] = player;
        }
        else if(arr[y-1][x] == box && (arr[y-2][x] == ept || arr[y-2][x] ==bplacer))
        {
            if(arr[y-2][x] == ept)
            {
                arr[y-2][x] = box;
            }
            else
            {
                arr[y-2][x] = ept;
            }
            arr[y-1][x] = ept;
            arr[y][x] = aux;
            aux = arr[y-1][x];
            y--;
            arr[y][x] = player;
        }
    }
    else if(ipt == "s")
    {
        if(arr[y+1][x] == ept || arr[y+1][x] == dpath || arr[y+1][x] == bplacer || arr[y+1][x] == mark)
        {
            arr[y][x] = aux;
            aux = arr[y+1][x];
            y++;
            arr[y][x] = player;
        }
        else if(arr[y+1][x] == box && (arr[y+2][x] == ept || arr[y+2][x] ==bplacer))
        {
            if(arr[y+2][x] == ept)
            {
                arr[y+2][x] = box;
            }
            else
            {
                arr[y+2][x] = ept;
            }
            arr[y+1][x] = ept;
            arr[y][x] = aux;
            aux = arr[y+1][x];
            y++;
            arr[y][x] = player;
        }
    }
    return y;
}
function movh (arr, ipt, x, y)
{
    if(ipt == "a")
    {
        if(arr[y][x-1] == ept || arr[y][x-1] == dpath || arr[y][x-1] == bplacer || arr[y][x-1] == mark)
        {
            arr[y][x] = aux;
            aux = arr[y][x-1];
            x--;
            arr[y][x] = player;
        }
        else if(arr[y][x-1] == box && (arr[y][x-2] == ept || arr[y][x-2] ==bplacer))
        {
            if(arr[y][x-2] == ept)
            {
                arr[y][x-2] = box;
            }
            else
            {
                arr[y][x-2] = ept;
            }
            arr[y][x-1] = ept;
            arr[y][x] = aux;
            aux = arr[y][x-1];
            x--;
            arr[y][x] = player;
        }
    }
    else if(ipt == "d")
    {
        if(arr[y][x+1] == ept || arr[y][x+1] == dpath || arr[y][x+1] == bplacer || arr[y][x+1] == mark)
        {
            arr[y][x] = aux;
            aux = arr[y][x+1];
            x++;
            arr[y][x] = player;
        }
        else if(arr[y][x+1] == box && (arr[y][x+2] == ept || arr[y][x+2] ==bplacer))
        {
            if(arr[y][x+2] == ept)
            {
                arr[y][x+2] = box;
            }
            else
            {
                arr[y][x+2] = ept;
            }
            arr[y][x+1] = ept;
            arr[y][x] = aux;
            aux = arr[y][x+1];
            x++;
            arr[y][x] = player;
        }
    }
    return x;
}
//Funções dos equipamentos que podem se utilizados
function epthand ()
{
    distance = 0;
    return false;
}
function swrd (ipt)
{
    damage = 10;
    distance = 1;
    if(ipt == "c")
    {
        return true;
    }
        return false;
}
function bow (ipt, which)
{
    if(which == "basic")
    {
        damage = 5;
        distance = 2;
    }
    else
    {
        damage = 20;
        distance = 5;
    }
    if(ipt == "cw")
    {
        return ["up",true];
    }
    else if(ipt == "cs")
    {
        return ["dn",true];
    }
    else if(ipt == "ca")
    {
        return ["lf",true];
    }
    else if(ipt == "cd")
    {
        return ["rg",true];
    }
    return ["none",false];
}
//Função para mostrar onde os ataques podem acontecer
function dmgdot (x, y, arr, dot, dist)
{
    for(i=0;i<arr.length;i++)
    {
        for(j=0;j<arr[i].length;j++)
        {
            if(arr[i][j] == dot)
            {
                arr[i][j] = ept;
            }
        }
    }
    for(k=1;k<=dist && arr[y-k][x] == ept;k++)
    {
        arr[y-k][x] = dot;
    }
    if(arr != rf)
    {
        for(l=1;l<=dist && arr[y+l][x] == ept;l++)
        {
            arr[y+l][x] = dot;
        }
        for(m=1;m<=dist && arr[y][x-m] == ept;m++)
        {
            arr[y][x-m] = dot;
        }
        for(n=1;n<=dist && arr[y][x+n] == ept;n++)
        {
            arr[y][x+n] = dot;
        }
    }

}
//Função para reduzir a vida do jogador e verificar se ele ainda está vivo
function plrdmg(cd, ld, arr)
{
    if(map == bmap)
    {
        if(health > 0)
        {
            if(movcount%2 == 0)
            {
                for(i=0;i<crarr.length;i++)
                {
                    if(crarr[i][0] > 0 && crenmydmg(map, crarr, i, player))
                    {
                        health -= cd;
                        if(health <= 0)
                        {
                            return false;
                        }
                    }
                }
            }
            else
            {
                for(j=0;j<lrarr.length;j++)
                {
                    if(lrarr[j][0] > 0 && lrenmydmg(arr, lrarr, j, player))
                    {
                        health -= ld;
                        if(health <= 0)
                        {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        return false;
    }
}
//Função para gerar o mapa de base
function basemap(x, y)
{
    map = bmap;
    posx = x;
    posy = y;
}
//Função para gerar a sala final
function roomf()
{
    map = rf;
    posx = 5;
    posy = 6;
    map[posy][posx] = player;
    vr = 8;
    hr = 10;
    cm = false;
    sw = 3;
    map[1][5] = bsprite;
}
//Função para executar comandos expecíficos da sala final
function rfcomp(ipt)
{
    wb = "composed";
    bow(ipt, wb);
}
//Função para gerar o mapa da sala 1
function room1()
{
    if(r1[1] == undefined || r1[1][1] != prize1)
    {
        r1 = 
        [[wall,wall,wall,wall,wall,wall,wall,wall],
        [wall,ept,ept,ept,ept,ept,ept,wall],
        [wall,ept,ept,ept,ept,ept,ept,wall],
        [wall,ept,ept,ept,ept,ept,ept,door],
        [wall,ept,ept,ept,ept,ept,ept,wall],
        [wall,ept,ept,ept,ept,ept,ept,wall],
        [wall,wall,wall,wall,wall,wall,wall,wall]];
    }
    map = r1;
    posx = 6;
    posy = 3;
    map[posy][posx] = player;
    if(map[1][1] != prize1)
    {
        for(i=0;i<4;i++)
        {
            do
            {
                var xb = Math.ceil(Math.random()*3)+1;
                var yb = Math.ceil(Math.random()*3)+1;
            }while((xb == 3 && yb == 3) || map[yb][xb] != ept)
            map[yb][xb] = box;
            do
            {
                var xp = Math.ceil(Math.random()*5);
                var yp = Math.ceil(Math.random()*5);
            }while(map[yp][xp] != ept)
            map[yp][xp] = bplacer;
        }
    }
}
//Função para executar comandos expecíficos da sala 1
function r1comp(arr, ipt)
{
    var conf;
    for(i=1;i<=5;i++)
    {
        conf = arr[i].indexOf(box);
        if(conf != -1)
        {
            break;
        }
    }
    if(conf == -1 && inventory.indexOf("-⚿ Chave para sala dos números") == -1)
    {
        arr[1][1] = prize1;
        if(ipt == "f" && (arr[1][2] == player || arr[2][1] == player))
        {
            inventory.push("-⚿ Chave para sala dos números");
            arr[1][1] = ept;
            map = bmap;
            map[9][0] = wall;
            posx = 1;
            posy = 9;
            alert("A porta da sala começou a se fechar rapidamente, você teve que correr para fora. Ao chegar na saída pôde ler algo que estava escrito na parede \"Nas matas deste local se escondem os segredos, de norte a sul é a ordem dos mesmos\".");
        }
    }
}
//Função para gerar o mapa da sala 2
function room2()
{
    map = r2;
    posx = 1;
    posy = 3;
    map[posy][posx] = player;
}
//Função para executar comandos expecíficos da sala 2
function r2comp(arr, narr, ipt, x, y)
{
    var conf = true;
    if(x == 5 && ipt == "f")
    {
        cnarr.push(y);
    }
    if(ipt == "f" && (arr[1][2] == player || arr[2][1] == player) && inventory.indexOf("-⚿ Chave para sala final") == -1)
    {
        inventory.push("-⚿ Chave para sala final");
        arr[1][1] = ept;
        map = bmap;
        map[15][12] = wall;
        posx = 11;
        posy = 15;
        alert("Da mesma forma que a outra sala, a porta se fechou rapidamente, mas você conseguiu escapar, essa chave parece encaixar na fechadura daquela porta gigante ao norte.");
    }
    if(cnarr.length == 4)
    {
        for(i=0;i<4;i++)
        {
            if(cnarr[i] != narr[i])
            {
                conf = false;
                alert("Você ouve um barulho, ele sinaliza que a sequência está errada, você terá que começar novamente.");
                cnarr.length = 0;
                break;
            }
        }
        if(conf == true)
        {
            arr[1][1] = prize2;
            for(j=1;j<=5;j++)
            {
                arr[j][6] = "⊗";
            }
        }
    }
}
//Funções do chefe final do jogo (redução/verificação de vida, movimentação e dano)
function boss(pdmg, arr, ipt, tarr)
{
    var x = tarr[2];
    var y = tarr[1];
    if(tarr[0] > 0)
    {
        if(ipt == "c" && arr[y+1][x] == dpath)
        {
            tarr[0] -= pdmg;
            if(tarr[n][0] <= 0)
            {
                for(i=0;i<ballarr.length;i++)
                {
                    arr[ballarr[i][0]][ballarr[i][1]] = ept;
                }
                ballarr.length = 0;
                return [x,y,false];
            }
        }
        return [x,y,true];
    }
    for(j=0;j<ballarr.length;j++)
    {
        arr[ballarr[j][0]][ballarr[j][1]] = ept;
    }
    ballarr.length = 0;
    return [x,y,false];
}
function bossmov(arr, tarr)
{
    var x = tarr[2];
    var y = tarr[1];
    var dx = tarr[8];
    var dy = tarr[7];
    if(tarr[0] > 0)
    {
        if(y == tarr[dy] && x != tarr[dx])
        {
            if(x > tarr[dx] && (arr[y][x-1] == ept || arr[y][x-1] == dpath))
            {
                arr[y][tarr[2]] = ept;
                tarr[2]--;
                arr[y][tarr[2]] = bsprite;
            }
            else if(x < tarr[dx] && (arr[y][x+1] == ept || arr[y][x+1] == dpath))
            {
                arr[y][tarr[2]] = ept;
                tarr[2]++;
                arr[y][tarr[2]] = bsprite;
            }
        }
        if(x == tarr[dx] && y != tarr[dy])
        {
            if(y > tarr[dy] && (arr[y][x+1] == ept || arr[y][x+1] == dpath))
            {
                arr[tarr[1]][x] = ept;
                tarr[1]--;
                arr[tarr[1]][x] = bsprite;
            }
            else if(y < tarr[dy] && (arr[y+1][x] == ept || arr[y+1][x] == dpath))
            {
                arr[tarr[1]][x] = ept;
                tarr[1]++;
                arr[tarr[1]][x] = bsprite;
            }
        }
        if(y == tarr[dy] && x == tarr[dx])
        {
            if(tarr[7] == 3)
            {
                tarr[7] = 5;
            }
            else if(tarr[7] == 5)
            {
                tarr[7] = 3;
            }
            if(tarr[8] == 4)
            {
                tarr[8] = 6;
            }
            else if(tarr[8] == 6)
            {
                tarr[8] = 4;
            }
        }
    }
}
function bossdmg (x, y, arr)
{
    if(movcount%2 == 0 && ballarr.length < 4)
    {
        ballarr.push([y+1,x]);
        arr[y+1][x] = ballsprite;
    }
}
//Função das bolas de energia que o chefe lança
function ball (arr, tarr, sprite, n)
{
    if(tarr[n][1] == posx && tarr[n][0] == posy && tarr.length > 0)
    {
        health = 0;
    }
    if(tarr[n][0] < 6 && barr[0] > 0)
    {
        arr[tarr[n][0]][tarr[n][1]] = ept;
        tarr[n][0]++;
        arr[tarr[n][0]][tarr[n][1]] = sprite;
        return true;
    }
    else
    {
        return false;
    }
}
//Funções do cavaleiro(corpo-a-corpo) (redução/verificação de vida, movimentação e dano)
function crenmy (pdmg, arr, plr, tarr, n)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    if(tarr[n][0] > 0)
    {
        if(wepret != undefined && wepret == true && (arr[y+1][x] == plr || arr[y-1][x] == plr || arr[y][x+1] == plr || arr[y][x-1] == plr))
        {
            tarr[n][0] -= pdmg;
            if(tarr[n][0] <= 0)
            {
                return [x,y,false];
            }
        }
        return [x,y,true];
    }
}
function crenmymov(arr, tarr, n)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    var dx = tarr[n][8];
    var dy = tarr[n][7];
    if(tarr[n][0] > 0)
    {
        if(y == tarr[n][dy] && x != tarr[n][dx])
        {
            if(x > tarr[n][dx] && arr[y][x-1] == ept)
            {
                arr[y][tarr[n][2]] = ept;
                tarr[n][2]--;
                arr[y][tarr[n][2]] = crsprite;
            }
            else if(x < tarr[n][dx] && arr[y][x+1] == ept)
            {
                arr[y][tarr[n][2]] = ept;
                tarr[n][2]++;
                arr[y][tarr[n][2]] = crsprite;
            }
        }
        if(x == tarr[n][dx] && y != tarr[n][dy])
        {
            if(y > tarr[n][dy] && arr[y-1][x] == ept)
            {
                arr[tarr[n][1]][x] = ept;
                tarr[n][1]--;
                arr[tarr[n][1]][x] = crsprite;
            }
            else if(y < tarr[n][dy] && arr[y+1][x] == ept)
            {
                arr[tarr[n][1]][x] = ept;
                tarr[n][1]++;
                arr[tarr[n][1]][x] = crsprite;
            }
        }
        if(y == tarr[n][dy] && x == tarr[n][dx])
        {
            if(tarr[n][7] == 3)
            {
                tarr[n][7] = 5;
            }
            else if(tarr[n][7] == 5)
            {
                tarr[n][7] = 3;
            }
            if(tarr[n][8] == 4)
            {
                tarr[n][8] = 6;
            }
            else if(tarr[n][8] == 6)
            {
                tarr[n][8] = 4;
            }
        }
    }
}
function crenmydmg (arr, tarr, n, plr)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    if(arr[y][x-1] == plr || arr[y][x+1] == plr || arr[y+1][x] == plr || arr[y-1][x] == plr)
    {
        return true;
    }
    return false;
}
//Funções do arqueiro(longa distância) (redução/verificação de vida, movimentação e dano)
function lrenmy (pdmg, arr, plr, tarr, n)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    if(tarr[n][0] > 0)
    {
        if(wepret != undefined && wepret[1] == true)
        {
            if(wepret[0] == "up" && (arr[y+1][x] == plr || (arr[y+1][x] == dpath && arr[y+2][x] == plr)))
            {
                tarr[n][0] -= pdmg;
            }
            if(wepret[0] == "dn" && (arr[y-1][x] == plr || (arr[y-1][x] == dpath && arr[y-2][x] == plr)))
            {
                tarr[n][0] -= pdmg;
            }
            if(wepret[0] == "lf" && (arr[y][x+1] == plr || (arr[y][x+1] == dpath && arr[y][x+2] == plr)))
            {
                tarr[n][0] -= pdmg;
            }
            if(wepret[0] == "rg" && (arr[y][x-1] == plr || (arr[y][x-1] == dpath && arr[y][x-2] == plr)))
            {
                tarr[n][0] -= pdmg;
            }
            if(tarr[n][0] <= 0)
            {
                return [x,y,false];
            }
        }
        return [x,y,true];
    }
}
function lrenmydmg (arr, tarr, n, plr)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    if(tarr[n][3] == "up")
    {
        if(arr[y-3][x] == ept)
        {
            arr[y-3][x] = mark;
        }
        if(arr[y-1][x] == plr || arr[y-2][x] == plr || arr[y-3][x] == plr)
        {
            return true;
        }
    }
    if(tarr[n][3] == "dn")
    {
        if(arr[y+3][x] == ept)
        {
            arr[y+3][x] = mark;
        }
        if(arr[y+1][x] == plr || arr[y+2][x] == plr || arr[y+3][x] == plr)
        {
            return true;
        }
    }
    if(tarr[n][3] == "lf")
    {
        if(arr[y][x-3] == ept)
        {
            arr[y][x-3] = mark;
        }
        if(arr[y][x-1] == plr || arr[y][x-2] == plr || arr[y][x-3] == plr)
        {
            return true;
        }
    }
    if(tarr[n][3] == "rg")
    {
        if(arr[y][x+3] == ept)
        {
            arr[y][x+3] = mark;
        }
        if(arr[y][x+1] == plr || arr[y][x+2] == plr || arr[y][x+3] == plr)
        {
            return true;
        }
    }
    return false;
}
//Função para selecionar o instrumento a ser utilizado
function chweapon (n)
{
    if(n == 1)
    {
        return epthand();
    }
    if(n == 2)
    {
        return swrd(input);
    }
    if(n == 3)
    {
        return bow(input, wb);
    }
    return false;
}
//Função para inserir os inimigos no mapa de base
function enmyset (arr, cr, lr)
{
    for(i=0;i<crarr.length;i++)
    {
        arr[crarr[i][1]][crarr[i][2]] = cr;
    }
    for(j=0;j<lrarr.length;j++)
    {
        arr[lrarr[j][1]][lrarr[j][2]] = lr;
    }
}
//Função para remover os inimigos, quando mortos
function enmyev (arr,ipt)
{
    var aux;
    if(arr == bmap)
    {
        for(i=0;i<crarr.length;i++)
        {
            aux = crenmy(damage,arr,player,crarr,i);
            crenmymov(arr, crarr, i);
            if(aux != undefined && aux[2] == false)
            {
                arr[aux[1]][aux[0]] = ept;
            }
        }
        for(j=0;j<lrarr.length;j++)
        {
            aux = lrenmy(damage,arr,player,lrarr,j);
            if(aux != undefined && aux[2] == false)
            {
                arr[aux[1]][aux[0]] = ept;
                var x = aux[0];
                var y = aux[1];
                if(lrarr[j][3] == "up" && arr[y-3][x] == mark)
                {
                    arr[y-3][x] = ept;
                }
                if(lrarr[j][3] == "dn" && arr[y+3][x] == mark)
                {
                    arr[y+3][x] = ept;
                }
                if(lrarr[j][3] == "lf" && arr[y][x-3] == mark)
                {
                    arr[y][x-3] = ept;
                }
                if(lrarr[j][3] == "rg" && arr[y][x+3] == mark)
                {
                    arr[y][x+3] = ept;
                }
            }
        }
    }
    else
    {
        aux = boss(damage,arr,ipt,barr);
        bossmov(arr,barr);
        bossdmg(aux[0],aux[1], arr);
        if(aux != undefined && aux[2] == false)
        {
            arr[aux[1]][aux[0]] = ept;
            ballarr.length = 0;
            for(k=0;k<arr.length;k++)
            {
                for(l=0;l<arr[k].length;l++)
                {
                    if(arr[k][l] == ballsprite)
                    {
                        arr[k][l] = ept;
                    }
                }
            }
        }
        for(m=0;m<ballarr.length;m++)
        {
            aux = ball(arr,ballarr,ballsprite,m);
            if(aux != undefined && aux == false)
            {
                arr[ballarr[m][0]][ballarr[m][1]] = ept;
                ballarr.shift();
            }
        }
    }
}
//Declarando variáveis
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, damage, crarr, lrarr, sw, dpath, distance, grass, wepret, door, bmap, r1, r2, movcount, bplacer, inventory, prize1, prize2, d2, df, health, dx, dy, crd, lrd, mark, cm, wb, ballsprite, hnarr;
//Definindo parte das variáveis
player = "◯";//◯😆೦
wall = "⬛";//█⬛
crsprite = "⬤";//⭕೧⬤〠
lrsprite = "⭕";
bsprite = "〠";
ept = "   ";
dpath = " · ";
grass = "Δ ";
door = "□";
box = "▤";
bplacer = "▣";
aux = ept;
prize1 = "⚿";
prize2 = "⚿";
mark = "⊚ ";//🞋
ballsprite = "⊛";
crd = 5;
lrd = 10;
//Iniciando o sistema do jogo
do
{
//Menu principal:
    menu = parseInt(prompt("Zelda: The spin-off\n1-Jogar\n2-Créditos").trim());
    if(menu == 2)
    {
        alert("Roteirista: Diego Fontes de Avila\nLevel designer: Diego Fontes de Avila\nProgramador: Diego Fontes de Avila\nBeta tester: Diego Fontes de Avila");
    }
    if(menu != 1 && menu != 2)
    {
        alert("Opção inválida, tente novamente.");
    }
}while(menu != 1)
//Iniciando o jogo
do
{
//Definindo as variáveis restantes
    inventory = [];
    hr = 7;
    vr = 7;
    map = [];
    crarr = [[30,3,1,3,5,3,1,3,4],[30,9,11,9,7,9,11,3,4],[30,17,9,13,9,17,9,3,4]];
    lrarr = [[15,7,1,"rg"],[15,10,7,"up"],[15,16,3,"up"]];
    barr = [200,1,5,1,8,1,1,3,4];
    ballarr = [];
    sw = 0;
    wb = "basic";
    health = 100;
    movcount = 0;
    hnarr = [];
    cm = true;
    distance = 0;
    for(i=0;i<4;i++)
    {
        hnarr.push(Math.ceil(Math.random()*5));
    }
    var cnarr = [];
    bmap = 
   [[wall,wall,wall,wall,wall,wall,wall,wall,door,door,door,wall,wall],
    [wall,grass,grass,grass,grass,grass,wall,grass,ept,ept,ept,grass,wall],
    [wall,grass,ept,ept,ept,ept,wall,grass,ept,ept,ept,grass,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,ept,ept,grass,wall],
    [wall,grass,ept,ept,ept,grass,wall,grass,ept,ept,ept,grass,wall],
    [wall,grass,grass,ept,grass,grass,wall,grass,grass,ept,grass,grass,wall],
    [wall,wall,wall,ept,wall,wall,wall,wall,wall,ept,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept,wall,ept,ept,ept,ept,grass,wall],
    [wall,wall,ept,ept,ept,ept,wall,ept,ept,ept,ept,grass,wall],
    [door,ept,ept,ept,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,wall,ept,ept,ept,grass,wall,ept,ept,ept,ept,grass,wall],
    [wall,wall,grass,ept,grass,grass,wall,wall,wall,ept,wall,wall,wall],
    [wall,wall,wall,ept,wall,wall,wall,wall,wall,ept,wall,wall,wall],
    [wall,grass,ept,ept,grass,grass,wall,grass,grass,ept,ept,wall,wall],
    [wall,grass,ept,ept,ept,grass,wall,grass,ept,ept,ept,wall,wall],
    [wall,grass,ept,ept,ept,ept,ept,ept,ept,ept,ept,ept,door],
    [wall,grass,ept,ept,ept,ept,wall,ept,ept,ept,ept,wall,wall],
    [wall,grass,grass,grass,grass,grass,wall,grass,grass,ept,grass,grass,wall],
    [wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]];

rf = 
    [[wall,wall,wall,wall,wall,door,wall,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,ept,ept,wall],
    [wall,wall,wall,wall,door,door,door,wall,wall,wall]];

r1 = [[]];

r2=
    [[wall,wall,wall,wall,wall,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept," ①",wall],
    [wall,ept,ept,ept,ept,ept," ②",wall],
    [door,ept,ept,ept,ept,ept," ③",wall],
    [wall,ept,ept,ept,ept,ept," ④",wall],
    [wall,ept,ept,ept,ept,ept," ⑤",wall],
    [wall,wall,wall,wall,wall,wall,wall,wall]];
//Executando funções iniciais
    basemap(9,3);
    enmyset(map, crsprite, lrsprite);
    alert("Você acorda em um local estranho, com uma espada e um arco de madeira ao seu dispôr.");
    alert("Não sabe o que está acontecendo, mas o que você sabe é: você precisa sair desse lugar.");
//Iniciando parte "jogável"
    while(health > 0 && input != "x")
    {
//Posicionando o Jogador
        plrdmg(crd, lrd, map);
        map[posy][posx] = player;
        posy = movv(map,input,posx,posy);
        posx = movh(map,input,posx,posy);
        dmgdot(posx,posy,map,dpath,distance);
//Verificando ações nos mapas
        if(map == bmap && (map[1][8] == player || map[1][9] == player || map[1][10] == player) && input == "f")
        {
            if(inventory.indexOf("-⚿ Chave para sala final") != -1)
            {
                inventory.pop();
                df = true;
            }
            if(df)
            {
                input = "";
                alert("Funcionou! Estou live!");
                alert("Ou...");
                alert("Parece que não");
                alert("-__-");
                alert("Você encontrou um arco composto, ele atira mais longe e dá mais dano.");
                roomf();
            }
            else
            {
                alert("Você vai até a porta enorme, é necessária alguma chave para abrí-la para sair deste local.");
            }
        }
        if(map == bmap && map[9][1] == player && map[9][0] == door && input == "f")
        {
            input = "";
            room1(posx,posy,input);
        }
        if(map == bmap && map[15][11] == player && map[15][12] == door && input == "f")
        {
            if(inventory.indexOf("-⚿ Chave para sala dos números") != -1)
            {
                inventory.pop();
                d2 = true;
            }
            if(d2)
            {
                input = "";
                alert("A porta abriu, você consegue ler coisas escritas na parede \"Se os segredos escondidos foram encontrados, este é o local em que serão utilizados\"");
                room2();
            }
            else
            {
                alert("A porta está trancada, você deve procurar uma chave em outro lugar.");
            }
        }
        if(map == bmap && input == "f")
        {
            if(map[2][4] == player)
            {
                alert(hnarr[0]);
            }
            if(map[8][10] == player)
            {
                alert(hnarr[1]);
            }
            if(map[14][2] == player)
            {
                alert(hnarr[2]);
            }
            if(map[16][2] == player)
            {
                alert(hnarr[3]);
            }
            if(map[16][7] == player)
            {
                alert("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }
        }
        if(map == rf)
        {
            if(map[1][5] == player && input == "f")
            {
                break;
            }
            rfcomp(input);
        }
        if(map == r1)
        {
            if(map[3][6] == player && input == "f")
            {
                input = "";
                basemap(1,9);
            }
            r1comp(map, input);
        }
        if(map == r2)
        {
            if(map[3][1] == player && input == "f")
            {
                input = "";
                basemap(11,15);
                cnarr = [];
            }
            r2comp(map, hnarr, input, posx, posy);
        }
//Recebendo o "input" do jogador
        input = prompt(inventory.join("\n") + "\n" + refreshScr(map,vr,hr,posx,posy,cm)+"\nVida: "+health+"%\nDigite \"cmd\" para uma lista de comandos").trim().toLowerCase();
//Mostrando os comandos
        if(input == "cmd")
        {
            alert("w-Cima\ns-Baixo\na-Esquerda\nd-Direita\n1-Mão vazia\n2-Espada\n3-Arco\nc(Com espada ou arco composto)-Atacar/Atirar\ncw/cs/ca/cd(Com o arco)-Atirar(cima, baixo, esquerda, direita)\nf-Interagir/Pegar itens/Usar itens\nx-Sair");
        }
//Recebendo input de troca de instrumento
        if(parseInt(input) >= 1 && parseInt(input) <= 3 && wb == "basic")
        {
            sw = parseInt(input);
        }
//Mais uma verificação de ação
        if(map == bmap || map == rf)
        {
            enmyev(map,input);
        }
//Executando função para troca de instrumento
        wepret = chweapon(sw);
//Contando o número de execuções
        movcount++;
    }
//Definindo parâmetros para vitória e derrota e mostrando qual resultato foi atingido
    if(health <= 0)
    {
        alert("Você morreu, mas a aventura poderá começar novamente.");
        do
        {
            pa = prompt("Deseja começar novamente?(\"s-Sim n-Não\")");
            if(pa != "s" && pa != "n")
            {
                alert("Resposta inválida, tente novamente");
            }
        }while(pa != "s" && pa != "n")
    }
    else
    {
        alert("Você finalmente sai do local onde estava, correndo.");
        alert("Até que você acorda, denovo, só que dessa vez em seu quarto, e percebe que tudo havia sido um sonho.");
        pa = prompt("Deseja começar novamente?(\"s-Sim n-Não\")");
        if(pa != "s" && pa != "n")
        {
            alert("Resposta inválida, tente novamente");
        }
    }
}while(pa == "s")
