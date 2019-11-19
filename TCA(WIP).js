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
function swrd (input)
{
    
}
var map, hr, vr, input, player, wall, posx, posy, ept, warr;
hr = 9;
vr = 9;
map = [];
posx = 15;
posy = 6;
player = "೦";//⬤😆
wall = "█";
ept = "   ";
warr = ["none","swrd","bow"];
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
    input = prompt(refreshScr(map,vr,hr,posx,posy)).trim().toLowerCase();
    warr[parseInt(input[0])];
}while(input != "x")
