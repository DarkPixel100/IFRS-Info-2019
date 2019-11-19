function refreshScr (arr, vres, hres, x, y)
{
    var str = "";
    for(rv=0;rv<vres;rv++)
    {
        for(rh=0;rh<hres;rh++)
        {
            if(arr[y-(Math.ceil(vres/2))+rv+1] != undefined)
            {
                str += arr[y-(Math.ceil(vres/2))+rv+1][x-(Math.ceil(hres/2))+rh+1];
            }
        }
        str += "\n";
    }
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
    damage = 5;
    if(ipt == "c")
    {
        return true;
    }
        return false;
}
function enmy (pdmg, arr, char, plr, tarr, n)
{
    var x = tarr[n][tarr[n].length-1];
    var y = tarr[n][tarr[n].length-2];
    if(tarr[n][0] > 0)
    {
        arr[y][x] = char;
        if(warr[sw] == true && (arr[y+1][x] == plr || arr[y-1][x] == plr || arr[y][x+1] == plr || arr[y][x-1] == plr))
        {
            tarr[n][0] -= pdmg;
        }
    }
    else
    {
        arr[y][x] = ept;
    }
}
var map, hr, vr, input, player, wall, enemy, posx, posy, ept, warr, damage, earr, sw;
hr = 9;
vr = 9;
map = [];
earr = [[15,9,9]]
posx = 15;
posy = 6;
player = "೦";//⬤😆
wall = "█";
enemy = "೧";
ept = "   ";
warr = ["none",swrd(input),"bow"];
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
    map[i][0] = wall;//█
    map[i][map[i].length-1] = wall;
    //*/
}
do
{
    posy = movv(map,input,posx,posy,ept);
    posx = movh(map,input,posx,posy,ept);
    input = prompt(refreshScr(map,vr,hr,posx,posy)+"\n1-Mão vazia 2-Espada 3-Arco").trim().toLowerCase();
    if(parseInt(input[0]) >= 1 && parseInt(input[0]) <= 3)
    {
        sw = parseInt(input)-1;
    }
    enmy(damage,map,enemy,player,earr,0);
    console.log(earr[0][0]+"\n"+sw+"\n"+warr[sw]);
}while(input != "x")
