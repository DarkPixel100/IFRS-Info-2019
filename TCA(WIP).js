function refreshScr (arr, str, vres, hres)
{
    str = "";
    for(rc=0;rc<vres;rc++)
    {
        str += mat[rc].join("") + "\n";
    }
    return str;
}
var mat = [], hr = 10, vr = 6, tab = "", input, player = "⬤", floor = "█", pposx;
for(i=0;i<vr;i++)
{
    mat[i] = [];
    for(j=0;j<hr;j++)
    {
        mat[i][j] = " ";
    }
}
mat[mat.length-1].fill(floor);
mat[mat.length-2][4] = player;
pposx = mat[mat.length-2].indexOf(player);
do
{
    input = prompt(refreshScr(mat, tab, vr, hr)).trim().toLowerCase();
    if(input = "a" && pposx-1 >= 0)
    {
        mat[mat.length-2][pposx] = " ";
        mat[mat.length-2][pposx-1] = player;
    }
    else if(input = "d")
    {
        mat[mat.length-2][pposx] = " ";
        mat[mat.length-2][pposx+1] = player;
    }
}while(input != "x")
