var nVal;
var ans = 0;
var valVet = [];
var differ = 0;

scanf('%d','nVal');

for(i=0;i<nVal;i++)
{
	scanf('%d','valVet[i]');
}

for(j=0;j<nVal;j++)
{
    if(nVal == 1)
    {
    	ans++;
    	break;
    }
    
    if(valVet[j+1] == undefined)
    {
       break;
    }
	
    if(valVet[j+2] - valVet[j+1] != valVet[j+1] - valVet[j])
    {
		differ = valVet[j+1] - valVet[j];
        ans++;
    }
}
printf('%d\n',ans);
