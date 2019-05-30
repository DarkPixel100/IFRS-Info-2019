var l1, l2, c1, c2;
var lia = 0;
var carol = 0;
scanf("%d","l1");
scanf("%d","l2");
scanf("%d","c1");
scanf("%d","c2");
if(l1 == l2)
{
    lia = (l1+l2) * 2;
}
else if((l1+1 == l2) || (l1-1 == l2))
{
    lia = (l1+l2)*3;
}
else
{
    lia = l1+l2;
}
if(c1 == c2)
{
    carol = (c1+c2)*2;
}
else if((c1+1 == c2) || (c1-1 == c2))
{
    carol = (c1+c2)*3;
}
else
{
    carol = c1+c2;
}
if(lia > carol)
{
    printf("%s\n","Lia");
}
if(carol > lia)
{
    printf("%s\n","Carolina");
}
if (lia == carol)
{
    printf("%s\n","empate");
}
