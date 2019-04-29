var n;
var ans = 0;
var vet = [];

scanf('%d','n');

for(i=0;i<n;i++)
{
	scanf('%d','vet[i]');
}

for(j=0;j<n;j++)
{
	for(k=j;k<n;k++)
    {
    	if(vet[j]>vet[k])
        {
        	ans++;
        }
    }
}
printf('%d\n',ans);
