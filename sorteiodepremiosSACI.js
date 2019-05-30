var n;
var veti = [];
var vetr = [];
scanf("%d", "n");
for(i=0;i<n;i++)
{
   scanf("%d", "veti[i]");
}
for(j=0;j<n;j++)
{
   vetr[j] = veti[veti.length-1];
   veti.pop();
}
for(k=0;k<n;k++)
{
   printf("%d ", vetr[k]);
}
