function refreshScr (arr, vres, hres, x, y)
{
    var str = "";
    for(rv=0;rv<vres;rv++)
    {
        for(rh=0;rh<hres;rh++)
        {
            str += arr[x-(Math.floor(hres/2))][y-(Math.floor(vres/2))];
        }
        str += "\n";
    }
    return str;
}
function movv(arr, ipt, x, y)
{
    if(ipt == "w" && y-1 >= 0 && arr[y-1][x])
    {
        y--;
        arr[y][x] = player;
        arr[y+1][x] = " ";
    }
    else if(ipt == "s" && y+1 <= arr.length-1 && arr[y+1][x])
    {
        y++;
        arr[y][x] = player;
        arr[y-1][x] = " ";
    }
    return y;
}
function movh(arr, ipt, x, y)
{
    if(ipt == "a" && x-1 >= 0 && arr[y][x-1])
    {
        x--;
        arr[y][x] = player;
        arr[y][x+1] = " ";
    }
    else if(ipt == "d" && x+1 <= arr[y].length-1 && arr[y][x+1])
    {
        x++;
        arr[y][x] = player;
        arr[y][x-1] = " ";
    }
    return x;
}
var map, hr, vr, input, player, posx, posy;
hr = 9;
vr = 9;
map = [];
posx = 15;
posy = 6;
player = "⬤";
for(i=0;i<41;i++)
{
    map[i] = [];
    map[i].length = 31;
    if(i==0||i==10||i==20||i==30||i==40)
    {
        map[i].fill("█")
    }
    else
    {
        map[i].fill(" ");    
    }
}
do
{
    posy = movv(map,input,posx,posy);
    posx = movh(map,input,posx,posy);
    input = prompt(refreshScr(map,vr,hr,posx,posy)).trim().toLowerCase();
}while(input != "x")
//map = [["█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█","█"],["█"," "," "," "," "," "," "," "," "," "," ","█"," "," "," "," "," "," "," "," "," "," ","█"," "," "," "," "," "," "," "," "," "," ","█"]];
