/*Comandos

//Concatena
vet1 = [1,2,3];
vet2 = ['a','b','c'];
vet3 = vet1.concat(vet2);//[1,2,3,'a','b','c']

//Coloca o primeiro argumento no lugar de tudo a partir do segundo, até o terceiro, sem incluí-lo
vet1 = [1,2,3];
vet1.fill(4,1,2);
vet1 == [1,4,3];//true

//Coloca um no final
vet1 = [1,2,3];
vet1.push(4);
vet1 == [1,2,3,4]; //true

//Retira um do final
vet1.pop();//4
vet1.pop();
vet1 == [1,2,3]; //true 

//Coloca um no começo
vet1 = [1,2,3];
vet1.unshift(4);
vet1 == [4,1,2,3]; //true

//Tira um do começo
vet1 = [1,2,3]
vet1.shift();
vaet1 == [2,3];true

//Inverte
vet1 = [1,2,3];
vet1.reverse();//
vet1 == [3,2,1];//true

//Recorta um vetor partindo do primeiro argumento, até o segundo, sem incluí-lo
vet1 = [1,2,3];
vet1.slice(1,3);//[2,3]

//Ordena em ordem crescente
vet1 = [1,2,3,10];
vet1.sort();
vet1 == [1,10,2,3];//true

//Transforma em uma string dividida pelo argumento
vet1 = [1,2,3];
vet1.join("/");//"1/2/3"

//Transforma a string em um vetor, separando cada elemento na incidência do argumento
s1 = "teste de split";
s1 = s1.split(" ");//["teste","de","split"]

//Remove e/ou substitui
vet1 = [1,2,3,4];
vet1.splice(1,0,5,6);//(a partir de onde remover, quantos remover, o que inserir no lugar);
vet1 == [1,5,6,2,3,4];//true

*/
