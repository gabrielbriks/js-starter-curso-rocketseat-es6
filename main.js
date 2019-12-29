/**
 * REST / SPREAD
 * como ainda não foram acoplados a função do Babel, precisaremos
 * utilizar um novo pacote 
 * yarn add @babel/plugin-proposal-object-rest-spread
 *
*/ 

//REST
/**
 * o REST serve para pegar o resto das propiedades
 * EXEMPLO:
 */

 const usuario = {
  nome: 'Gabriel',
  idade: 22,
  Empresa: 'Polariuns'
 };
//utilizando o REST
 const {nome, ...resto} = usuario;
//  console.log(nome);
//  console.log(resto);

//podemos aplicar isso em vetores
const arr = [1,2,3,4];
const [a,b,...cRest] = arr;
// console.log(a);
// console.log(b);
// console.log(cRest);


//utilizando para parametro de functions
function soma(a, b, c ){
  return a + b + c;
}
// console.log(soma(1, 2, 3));

//utilizando REST
function somaRest(...params){
  //utilizando o reduce para realizar a soma
  return params.reduce((total,next) => total + next);
}
// console.log( somaRest(1, 2, 3) );







