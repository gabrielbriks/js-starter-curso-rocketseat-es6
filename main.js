
// VALORES PADRÕES  

/**
 * Se por acaso tentarmos chamar essa functio apenas com um parametro,
 * ou sem nenhum ????
*/
function soma(a,b){
  return a + b;
}
console.log(soma(1));
console.log(soma());
/**
 * resultado: NaN
 * esse resultado significa que é um resultado descnhecido,
 * por exemplo que ele nao conseguiu realizar a soma, entao
 * por consequencia ele retorna essa expressao 'NaN'
*/

//Para isso não acontecer denifimos os valores padroes;
function somaSemError(a = 2, b = 3){
  return a + b;
}
console.log(somaSemError(1));
console.log(somaSemError());


//UTILIZANDO A ARROW FUNCTIONS
 const somaArrowFunc = (a = 0, b = 1) => {
   return a + b;
 }
 console.log(somaArrowFunc(1));
 console.log(somaArrowFunc());