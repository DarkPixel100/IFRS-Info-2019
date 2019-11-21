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
    if(ipt == "w" && arr[y-1][x] == ept)
    {
        y--;
        arr[y+1][x] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    else if(ipt == "s" && arr[y+1][x] == ept)
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
    if(ipt == "a" && arr[y][x-1] == ept)
    {
        x--;
        arr[y][x+1] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    else if(ipt == "d" && arr[y][x+1] == ept)
    {
        x++;
        arr[y][x-1] = aux;
        aux = arr[y][x];
        arr[y][x] = player;
    }
    return x;
}
function swrd (ipt)
{
    damage = 10;
    if(ipt == "c")
    {
        return true;
    }
        return false;
}
function bow(ipt)
{
    damage = 5;
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
            if(weparr[sw][0] == "up" && arr[y+3][x] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "dn" && arr[y-3][x] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "lf" && arr[y][x+3] == plr)
            {
                tarr[n][0] -= pdmg;
            }
            if(weparr[sw][0] == "rg" && arr[y][x-3] == plr)
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
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, weparr, damage, crarr, lrarr, enmyaux, sw;
hr = 15;
vr = 7;
map = [];
crarr = [[15,7,6],[10,8,9],[20,3,3],[15,5,5]];
lrarr = [];
posx = 15;
posy = 6;
player = "◯";//◯😆೦
wall = "⬛";//█⬛
enemy = "⬤";//⭕೧⬤〠
ept = "   ";
sw = 0;
for(i=0;i<41;i++)
{
    map[i] = [];
    /*for(j=0;j<31;j++)
    {
        map[i][j] = i*j;
    }*/
    //*
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
    //*/
}
map[posy][posx] = player;
do
{
    posy = movv(map,input,posx,posy,ept);
    posx = movh(map,input,posx,posy,ept);
    input = prompt(refreshScr(map,vr,hr,posx,posy)+"\n1-Mão vazia 2-Espada 3-Arco").trim().toLowerCase();
    if(parseInt(input[0]) >= 1 && parseInt(input[0]) <= 3)
    {
        sw = parseInt(input)-1;
    }
    weparr = ["none",swrd(input),"bow"];
    for(i=0;i<crarr.length;i++)
    {
        enmyaux = crenmy(damage,map,player,crarr,i);
        if(enmyaux != undefined)
        {
            if(enmyaux[2])
            {
                map[enmyaux[1]][enmyaux[0]] = enemy;
            }
            else
            {
                map[enmyaux[1]][enmyaux[0]] = ept;
            }
        }
    }
    console.log(crarr[0][0]+"\n"+sw+"\n"+weparr[sw]+"\n"+enmyaux);
}while(input != "x")
