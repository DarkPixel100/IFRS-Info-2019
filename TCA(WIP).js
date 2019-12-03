function refreshScr (arr, vres, hres, x, y)
{
    var str = "";
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
            if(arr[y-(Math.ceil(vres/2))+rv+1] == undefined)
            {
                arr[y-(Math.ceil(vres/2))+rv+1] = []
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
        str += "|\n";
    }
    str += "‾".repeat(hres*2+Math.ceil(hres/5));
    return str;
}
function movv (arr, ipt, x, y)
{
    if(ipt == "w")
    {
        if(arr[y-1][x] == ept || arr[y-1][x] == dpath || arr[y-1][x] == bplacer)
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
        if(arr[y+1][x] == ept || arr[y+1][x] == dpath || arr[y+1][x] == bplacer)
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
        if(arr[y][x-1] == ept || arr[y][x-1] == dpath || arr[y][x-1] == bplacer)
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
        if(arr[y][x+1] == ept || arr[y][x+1] == dpath || arr[y][x+1] == bplacer)
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
function bow (ipt)
{
    damage = 5;
    distance = 2;
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
function basemap(x, y)
{
    map = bmap;
    posx = x;
    posy = y;
}
function room1(x, y, ipt)
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
    if(conf == -1 && inventory.indexOf("⚿ Chave para sala dos números") == -1)
    {
        arr[1][1] = prize1;
        if(ipt == "f" && (arr[1][2] == player || arr[2][1] == player))
        {
            inventory.push("⚿ Chave para sala dos números");
            arr[1][1] = ept;
            map = bmap;
            map[9][0] = wall;
            posx = 1;
            posy = 9;
        }
    }
}
function room2()
{
    map = r2;
    posx = 1;
    posy = 3;
    map[posy][posx] = player;
}
function r2comp(arr, narr, ipt, x, y)
{
    var conf = true;
    if(x == 5 && ipt == "f")
    {
        cnarr.push(y);
    }
    if(ipt == "f" && (arr[1][2] == player || arr[2][1] == player) && inventory.indexOf("⚿ Chave para sala final") == -1)
    {
        inventory.push("⚿ Chave para sala final");
        arr[1][1] = ept;
        map = bmap;
        map[15][12] = wall;
        posx = 11;
        posy = 15;
    }
    if(cnarr.length == 4)
    {
        for(i=0;i<4;i++)
        {
            if(cnarr[i] != narr[i])
            {
                conf = false;
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
    console.log(hnarr);
}
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
        if(dy == 3)
        {
            dy = 5;
        }
        else if(dy == 5)
        {
            dy = 3;
        }
        if(dx == 4)
        {
            dx = 6;
        }
        else if(dx == 6)
        {
            dx = 4;
        }
    }
}
function crenmydmg()
{
    
}
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
        return bow(input);
    }
    return false;
}
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
function enmyev (arr)
{
    var aux;
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
        }
    }
}
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, damage, crarr, lrarr, sw, dpath, distance, grass, wepret, door, bmap, r1, r2, movcount, bplacer, inventory, prize1, prize2, d2, health, dx, dy;
hr = 7;
vr = 7;
map = [];
crarr = [[40,3,1,3,5,3,1],[40,9,11,9,7,9,11],[40,17,9,13,9,17,9]];
lrarr = [[25,7,1],[25,10,7],[25,16,3]];
inventory = [];
player = "◯";//◯😆೦
wall = "⬛";//█⬛
crsprite = "⬤";//⭕೧⬤〠
lrsprite = "⭕";
ept = "   ";
sw = 0;
dpath = " · ";
grass = "Δ ";
door = "□";
box = "▤";
bplacer = "▣";
aux = ept;
prize1 = "⚿";
prize2 = "⚿";
health = 100;
var hnarr = [];
dx = 4;
dy = 3;
for(i=0;i<4;i++)
{
    hnarr.push(Math.ceil(Math.random()*5));
}
var cnarr = [];
movcount = 0;
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

r1 = [[]];

r2=
    [[wall,wall,wall,wall,wall,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept,"①",wall],
    [wall,ept,ept,ept,ept,ept,"②",wall],
    [door,ept,ept,ept,ept,ept,"③",wall],
    [wall,ept,ept,ept,ept,ept,"④",wall],
    [wall,ept,ept,ept,ept,ept,"⑤",wall],
    [wall,wall,wall,wall,wall,wall,wall,wall]];

basemap(9,3);
enmyset(map, crsprite, lrsprite);
do
{
    map[posy][posx] = player;
    posy = movv(map,input,posx,posy);
    posx = movh(map,input,posx,posy);
    dmgdot(posx,posy,map,dpath,distance);
    if(map == bmap && map[9][1] == player && map[9][0] == door && input == "f")
    {
        input = "";
        room1(posx,posy,input);
    }
    if(map == bmap && map[15][11] == player && map[15][12] == door && input == "f")
    {
        if(inventory.indexOf("⚿ Chave para sala dos números") != -1)
        {
            inventory.pop();
            d2 = true;
        }
        if(d2)
        {
            input = "";
            room2();
        }
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
    input = prompt("-" + inventory.join("\n") + "\n" + refreshScr(map,vr,hr,posx,posy)+"\n1-Mão vazia 2-Espada 3-Arco").trim().toLowerCase();
    if(parseInt(input) >= 1 && parseInt(input) <= 3)
    {
        sw = parseInt(input);
    }
    if(map == bmap)
    {
        enmyev(map);
    }
    wepret = chweapon(sw);
    movcount++;
}while(input != "x")
