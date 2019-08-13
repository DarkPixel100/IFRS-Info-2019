var caps, nCoin;
var cicles = [];
var auxCoin = 0;

scanf('%d','caps');
scanf('%d','nCoin');

for(var i=0;i<caps;i++)
{
	scanf('%d','cicles[i]');
}
for(days=1;days<=Math.pow(10,8);days++)
{
	if(auxCoin >= nCoin)
    {
       printf('%d\n',days-1);
       break;
    }
    for(j=0;j<caps;j++)
    {
    	if(days%cicles[j]==0)
        {
           auxCoin++;
        }
    }
}
