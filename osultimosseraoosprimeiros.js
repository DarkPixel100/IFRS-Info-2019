var n;
var veti = [];
var vetr = [];
scanf("%d", "n");
for(i=0;i<n;i++)
{
   scanf("%s", "veti[i]");
}
for(j=0;j<n;j++)
{
   vetr[j] = veti[veti.length-1];
   veti.pop();
}
for(k=0;k<n;k++)
{
   if(k < n-1)
   {
      printf("%s ", vetr[k]);
   }
   else
   {
      printf("%s", vetr[k]);
   }
}
