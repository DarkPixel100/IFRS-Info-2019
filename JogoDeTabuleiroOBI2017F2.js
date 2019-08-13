var lc;
var vet = [];
scanf("%d","lc");
for(i=0;i<lc;i++)
{
   vet[i] = [];
   for(j=0;j<lc;j++)
   {
      scanf("%d","vet[i][j]");
   }
}
for(k=1;k<lc;k++)
{
   for(l=1;l<lc;l++)
   {
      if(vet[k][l-1] + vet[k-1][l] + vet[k-1][l-1] == 0 || vet[k][l-1] + vet[k-1][l] + vet[k-1][l-1] == 1)
      {
         vet[k][l] = 1;
      }
      else if(vet[k][l-1] + vet[k-1][l] + vet[k-1][l-1] == 2 || vet[k][l-1] + vet[k-1][l] + vet[k-1][l-1] == 3)
      {
         vet[k][l] = 0;
      }
   }
}
printf("%d ",vet[lc-1][lc-1]);