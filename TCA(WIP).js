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
function movv(arr, ipt, x, y, aux)
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
function movh(arr, ipt, x, y, aux)
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
    distance = 3;
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
function dmgdot(x, y, arr, dot, dist)
{
    console.log(dist+"\n"+sw)
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
function crenmy (pdmg, arr, plr, tarr, n)
{
    var x = tarr[n][tarr[n].length-1];
    var y = tarr[n][tarr[n].length-2];
    if(tarr[n][0] > 0)
    {
        if(weparr[sw] == true && (arr[y+1][x] == plr || arr[y-1][x] == plr || arr[y][x+1] == plr || arr[y][x-1] == plr))
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
function lrenmy (pdmg, arr, plr, tarr, n)
{
    var x = tarr[n][tarr[n].length-1];
    var y = tarr[n][tarr[n].length-2];
    if(tarr[n][0] > 0)
    {
        if(weparr[sw][1] == true)
        {
            if(weparr[sw][0] == "up" && arr[y+1][x] == plr && arr[y+2][x] == plr && arr[y+3][x] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "dn" && arr[y-1][x] == plr && arr[y-2][x] == plr && arr[y-3][x] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "lf" && arr[y][x+1] == plr && arr[y][x+2] == plr && arr[y][x+3] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "rg" && arr[y][x-1] == plr && arr[y][x-2] == plr && arr[y][x-3] == plr)
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
function enmyset(dmg, arr, plr, cr, lr)
{
    var aux;
    for(i=0;i<crarr.length;i++)
    {
        aux = crenmy(dmg,arr,plr,crarr,i);
        if(aux != undefined)
        {
            if(aux[2])
            {
                map[aux[1]][aux[0]] = cr;
            }
            else
            {
                map[aux[1]][aux[0]] = ept;
            }
        }
    }
    for(i=0;i<lrarr.length;i++)
    {
        aux = lrenmy(dmg,arr,plr,lrarr,i);
        if(aux != undefined)
        {
            if(aux[2])
            {
                map[aux[1]][aux[0]] = lr;
            }
            else
            {
                map[aux[1]][aux[0]] = ept;
            }
        }
    }
}
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, weparr, damage, crarr, lrarr, sw, dpath, distance, grass;
hr = 7;
vr = 7;
map = [];
crarr = [[15,3,1],[15,9,11],[15,17,9]];
lrarr = [[15,7,1],[15,10,7],[15,16,3]];
posx = 9;
posy = 4;
player = "◯";//◯😆೦
wall = "⬛";//█⬛
crsprite = "⬤";//⭕೧⬤〠
lrsprite = "⭕";
ept = "   ";
sw = 0;
dpath = " · ";
grass = "Δ ";
var door = wall;
map = 
   [[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
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
/*for(i=0;i<41;i++)
{
    map[i] = [];
    /*for(j=0;j<31;j++)
    {
        map[i][j] = i*j;
    }
    map[i].length = 31;
    if(i%10 == 0)
    {
        map[i].fill(wall)
    }
    else
    {
        map[i].fill(ept);    
    }
    map[i][0] = wall;
    map[i][map[i].length-1] = wall;
    
}*/
map[posy][posx] = player;
do
{
    posy = movv(map,input,posx,posy,ept);
    posx = movh(map,input,posx,posy,ept);
    weparr = [epthand(),swrd(input,posx,posy,map),bow(input,posx,posy,map)];
    dmgdot(posx,posy,map,dpath,distance);
    input = prompt(refreshScr(map,vr,hr,posx,posy)+"\n1-Mão vazia 2-Espada 3-Arco").trim().toLowerCase();
    if(parseInt(input) >= 1 && parseInt(input) <= 3)
    {
        sw = parseInt(input)-1;
    }
    enmyset(damage,map,player,crsprite,lrsprite);
    //console.log(crarr[0][0]+"\n"+sw+"\n"+weparr[sw]+"\n");
}while(input != "x")
