var s_i = [];
//var lampA = 0;
//var lampB = 0;
var i_1 = false;
var i_2 = false;
var num_mov;
var n;
var j = 0;

scanf('%d','num_mov');

for(i=0;i<num_mov;i++)
{
	scanf('%d','n');
    s_i[i] = n;
	if(s_i[i] == 1)
	{
		i_1 = !i_1;
	}
   	if(s_i[i] == 2)
	{
		i_1 = !i_1;
       	i_2 = !i_2;
	}
	}
if(i_1 == false)
{
	printf('0\n');
}
else
{
	printf('1\n');
}
if(i_2 == false)
{
	printf('0\n');
}
else
{
	printf('1\n');
}
