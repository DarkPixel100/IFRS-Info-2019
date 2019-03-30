var n_C;
var est = [];
var n_T = 0;
var aux;
var indx;

scanf("%d","n_C");



for(var i=0;i<n_C;i++)
{
	scanf("%d","aux");
   	indx = indexVet(est,aux);
   if(indx == -1)
   {
   		empurrar(est,aux);
      	n_T += 2;
      
   }
   else
   {
   est[indx] = null;
   }
}
printf("%d\n",n_T);

function indexVet(vet,aj)
{
   
   for(var i = 0;i<vet.length;i++)
   {
   	if(vet[i] == aj){
    	return i;
    }
   }
   return -1;
   }

function empurrar (vctr,hlp)
{
	vctr[(vctr.length)] = hlp;
}
