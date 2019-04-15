var nVal;
var aux = 0;
var ans = 0;
var valVet = [];
scanf('%d','nVal');

for(i=0;i<nVal;i++)
{
	scanf('%d','valVet[i]');
}
for(j=0;j<nVal-1;j++)
{
    if(nVal === 1)
    {
    	ans++;
    	break;
    }
    if(valVet[j+2]===undefined)
    {
   		break;
    }
   
	var differ = valVet[j+1] - valVet[j];
	if(differ != valVet[j+2] - valVet[j+1])
	{
        ans++;
    }
}
printf('%d\n',ans+1);