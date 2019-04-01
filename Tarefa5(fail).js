var vet = [];
var mK;
var mL;
for(i=0;i<16;i++)
{
	scanf('%d','vet[i]');
}
mK = vet.indexOf(1);
mL = vet.indexOf(9);
if(mK+1<=8 && mL+1>8 || mL+1<=8 && mK+1>8)
{
printf("final");
}
else if(mK+1<=4 && mL+1>4 || mL+1<=4 && mK+1>4 && mK+1<=12 && mL+1>12 || mL+1<=12 && mK+1>12)
{
	printf("semifinal");
}
else if(((mK+1<=2 && 4>=mL+1>2 || mL+1<=2 && 4>=mK+1>2) || (4<mK+1<=6 && 8>=mL+1>6 || 4<mL+1<=6 && 8>=mK+1>6) || (8<mK+1<=10 && 10<mL+1>=12 || 8<mL+1<=10) && 10<mK+1>=12) || (12<mK+1>=14 && mL+1>14 || 12<mL+1<=14 && mK+1>14))
{
	printf("quartas");
}
else
{
	printf("oitavas");
}
