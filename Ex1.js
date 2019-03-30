scanf('%s','letra1');
scanf('%d','numero1');
scanf('%s','letra2');
scanf('%d','numero2');
scanf('%s','letra3');
scanf('%d','numero3');
var pnumero1;
var pnumero2;
var pnumero3;

if(letra1 == 'a')
{
pnumero1 = numero1 * 2;
}
if(letra1 == 'b')
{
pnumero1 = numero1 * 3;
}

if(letra2 == 'a')
{
pnumero2 = numero2 * 2;
}
if(letra2 == 'b')
{
pnumero2 = numero2 * 3;
}

if(letra3 == 'a')
{
pnumero3 = numero3 * 2;
}
if(letra3 == 'b')
{
pnumero3 = numero3 * 3;
}


printf('%d\n',pnumero1);
printf('%d\n',pnumero2);
printf('%d\n',pnumero3);