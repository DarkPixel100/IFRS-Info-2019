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
function movv (arr, ipt, x, y, aux)
{
    if(ipt == "w" && (arr[y-1][x] == ept || arr[y-1][x] == dpath))
    {
        y--;
        arr[y+1][x] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    else if(ipt == "s" && (arr[y+1][x] == ept || arr[y+1][x] == dpath))
    {
        y++;
        arr[y-1][x] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    return y;
}
function movh (arr, ipt, x, y, aux)
{
    if(ipt == "a" && (arr[y][x-1] == ept || arr[y][x-1] == dpath))
    {
        x--;
        arr[y][x+1] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    else if(ipt == "d" && (arr[y][x+1] == ept || arr[y][x+1] == dpath))
    {
        x++;
        arr[y][x-1] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
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
function room1()
{
    map = r1;
    posx = 6;
    posy = 3;
}
function room2()
{
    map = r2;
    posx = 1;
    posy = 3;
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
function crenmymov(arr, tarr, n, x0, y0)
{
    var x = tarr[n][2];
    var y = tarr[n][1];
    if(y == tarr[n][3])
    {
        if(x == tarr[n][4])
        {
            tarr[n][4] = x0;
        }
        if(x > tarr[n][4] && arr[y][x-1] == ept)
        {
            arr[y][tarr[n][2]] = ept;
            tarr[n][2]--;
            arr[y][tarr[n][2]] = crsprite;
        }
        else if(x < tarr[n][4] && arr[y][x+1] == ept)
        {
            arr[y][tarr[n][2]] = ept;
            tarr[n][2]++;
            arr[y][tarr[n][2]] = crsprite;
        }
    }
    else
    {
        if(x == tarr[n][3])
        {
            tarr[n][3] = y0;
        }
        if(y > tarr[n][3] && arr[y-1][x] == ept)
        {
            arr[tarr[n][1]][x] = ept;
            tarr[n][1]--;
            arr[tarr[n][1]][x] = crsprite;
        }
        else if(y < tarr[n][3] && arr[y+1][x] == ept)
        {
            arr[tarr[n][1]][x] = ept;
            tarr[n][1]++;
            arr[tarr[n][1]][x] = crsprite;
        }
    }
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
    for(i=0;i<crarr.length;i++)
    {
        aux = crenmy(damage,arr,player,crarr,i);
        crenmymov(arr,crarr,i, );
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
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, damage, crarr, lrarr, sw, dpath, distance, grass, wepret, door, bmap, r1, r2;
hr = 7;
vr = 7;
map = [];
crarr = [[40,3,1,3,5],[40,9,11,9,7],[40,17,9,13,9]];
lrarr = [[25,7,1],[25,10,7],[25,16,3]];
player = "◯";//◯😆೦
wall = "⬛";//█⬛
crsprite = "⬤";//⭕೧⬤〠
lrsprite = "⭕";
ept = "   ";
sw = 0;
dpath = " · ";
grass = "Δ ";
door = "□";
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

r1 = 
    [[wall,wall,wall,wall,wall,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,door],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,wall,wall,wall,wall,wall,wall,wall]];
r2=
    [[wall,wall,wall,wall,wall,wall,wall,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [door,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,ept,ept,ept,ept,ept,ept,wall],
    [wall,wall,wall,wall,wall,wall,wall,wall]];

basemap(9,3);
enmyset(map, crsprite, lrsprite);
do
{
    map[posy][posx] = player;
    enmyev(map);
    posy = movv(map,input,posx,posy,ept);
    posx = movh(map,input,posx,posy,ept);
    dmgdot(posx,posy,map,dpath,distance);
    input = prompt(refreshScr(map,vr,hr,posx,posy)+"\n1-Mão vazia 2-Espada 3-Arco").trim().toLowerCase();
    if(parseInt(input) >= 1 && parseInt(input) <= 3)
    {
        sw = parseInt(input);
    }
    if(map == bmap && map[9][1] == player && input == "f")
    {
        input = "";
        room1();
    }
    if(map == bmap && map[15][11] == player && input == "f")
    {
        input = "";
        room2();
    }
    if(map == r1 && map[3][6] == player && input == "f")
    {
        input = "";
        basemap(1,9);
    }
    if(map == r2 && map[3][1] == player && input == "f")
    {
        input = "";
        basemap(11,15);
    }
    wepret = chweapon(sw);
    //console.log(crarr[0][0]+"\n"+sw+"\n"+chweapon(sw)+"\n");
}while(input != "x")
