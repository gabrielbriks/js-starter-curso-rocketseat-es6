//antes do ES6 utilizava-mos para varrer, alterar ou até mesmo pegar conteudos de 
//arrays e etc, algumas funções como o foreach e etc.

//No ES6 podemos utilizar algumas abordagens bem mais simples
const arr = [1,2,3,4];
//Utilizando a a função 'map()'
//A função map recebe uma function qual ira receber os itens em questao,
//tornando possivel o manuseio dos dados do array
const newArr = arr.map(function(item, index){
  //neste caso ele esta pegando cada item e mutiplicando por 2
  return item + index;
});

console.log(newArr);

/**
 *  --REDUCE-- 
 * Nessa funcao ele irá varrer o array realizando a soma do valor de cada rodada
 * (ou seja somar toddos os valores dentro do array)
 * determinando o resultado para o total, para isso estará sempre pegando
 * o proximo numero  
 */
const sum  = arr.reduce(function(total, next){
  return total + next;
});
console.log(sum);

//t:0 ; n:1
//t:1 ; n:2
//t:3 ; n:3
//t:6 ; n:4
//t10 ; n:0

/**
 * Utilizando a funcao filter, nesse caso estamos utilizando ela para retornoar todos
 * is numeros pares do nosso array
 */
const filter = arr.filter(function(item){
  return item % 2 === 0;
});

console.log(filter);

/**
 * A função 'find()' nos ajuda a verificar se possui uma certa informacao dentro do array
 * ou se a gente consegue encontrar essa informação
 */
const find = arr.find(function(item){
  //Nesse caso irá retornar todos o itens que forem menor ou igual a 4
  return item <= 4;
});

console.log(find);
