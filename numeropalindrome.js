var n, nl;
var aux = true;
scanf("%s",'n');
nl = n.length;
for(i=0;i<nl;i++)
{
   if(n[i] != n[nl-1-i])
   {
      aux = false;
      break;
   }
}
if(aux)
{
   printf("%s\n", 'S');
}
else
{
   printf("%s\n",'N');
}
