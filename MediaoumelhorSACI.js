var n = 0;
var np = 0;
var sum = 0;
var avr = 0;
var vet = [];
scanf("%d",'n');
for(i=0;i<n;i++)
{
   scanf("%f","vet[i]");
}
for(j=0;j<n;j++)
{
   sum += vet[j];
}
avr = sum/n;
for(k=0;k<n;k++)
{
   if(vet[k] >= avr)
   {
      np++;
   }
}
printf("%.1f\n%d\n", avr, np);
