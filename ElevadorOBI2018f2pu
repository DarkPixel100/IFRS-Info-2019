var num_c;
var aux;
var vet_main = [];
var mxnum;
var mxnumaux;

scanf('%d','num_c');

for(i=0;i<num_c;i++)
{
    scanf('%d','vet_main[i]');
}

vet_main = vet_main.sort(function(a,b){return a-b;});
if(vet_main[0]<=8)
{
   for(j=0;j<num_c;j++)
   { 
       mxnum = vet_main[vet_main.length-1];
       for(k=0;k<vet_main.length-1;k++)
       {
           if(mxnum-vet_main[vet_main.length-1]<=8)
           {
				aux++;
           }
       }
       if(aux === 0)
       {
          printf('N\n');
           break;
       }
       else
       {
           vet_main.pop();
           aux = 0;
       }
       if(vet_main.length === 0)
       {
       printf('S\n');
      
       }
   
   }
}
