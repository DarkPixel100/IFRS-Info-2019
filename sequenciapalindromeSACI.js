var n;
var aux = true;
var vet = [];
scanf("%d",'n');
for(i=0;i<n;i++)
{
   scanf("%s","vet[i]");
}
for(j=0;j<n;j++)
{
   //   printf("%s", vet[j]);
   //   printf("%s ", vet[n-1-j]);
   if(vet[j] != vet[n-1-j])
   {
      aux = false;
      break;
   }
}
if(aux === true)
{
   printf("%s\n",'S');
}
else
{
   printf("%s\n",'N');
}
