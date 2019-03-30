var numero = [];
var letra = [];
scanf('%d','numeroDeEntradas');

for(i=0;i<numeroDeEntradas;i++)
{
	scanf('%s','letra[i]');
   	scanf('%d','numero[i]');
    if(letra[i]=='a')
	{
		numero[i]=numero[i]*2;
	}
	else
	{
		numero[i]=numero[i]*3;
	}
	printf('%d\n',numero[i]);
}