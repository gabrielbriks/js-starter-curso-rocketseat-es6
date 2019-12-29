"use strict";

var arr = [1, 2, 3, 4, 5]; // ---- ARROW FUNCTIONS----

/**quando temos uma função anonima, eé o melhor local para utilizarmos
* nossas arrow functions; da seguinte formas:
*/
//retirando o nome function

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //por termo apenas um parametro, podemos retirar os parenteses

var newArr2 = arr.map(function (item) {
  return item * 3;
});
console.log(newArr2);
/**
 * quando nossa function retorna uma simples informação,
 * aí entao podemos reduzir ainda mais a nossa function; 
*/

var newArr3 = arr.map(function (item) {
  return item * 4;
});
console.log(newArr3); //é possivel tambem utilizar-mos a 'const' para declarar functions
//da seguinte maneira: ; apesar de nao ser recomendado...

var teste = function teste() {
  return 'teste';
}; //EM VEZ DE
// @ Assim fica mais bonito 
// function teste(){
// }


console.log(teste()); //CASO QUISESSIMOS RETURNAR UM ARRAY, COM ESSA NOMENCLAURA:

var teste2 = function teste2() {
  return [1, 2, 5];
};

console.log(teste2()); //E SE TENTARMOS RETORNAR UM OBJETO DA SEGUINTE MANEIRA?

var testeOBJ = function testeOBJ() {
  nome: 'gabriel';
};

console.log(testeOBJ()); //resultado : undefined

/**
 * ISSSO NAO FUNCIONOU POIS QUANDO UTILIZAMOS AS CHAVES, QUE TAMBEM FAZ
 * ELE ACABA FAZENDO PARTE DO PROPRIO CORPO DA FUNCTION, ENTAO NAO PODEMOS
 * UTILIZAR CHAVES PARA O OBJETO 
 * 
 * PARA ISSO TEMOS OUTRAS OPÇOES:
*/
//opcao 1

var retObj = function retObj() {
  return {
    nome: 'gabriel'
  };
};

console.log(retObj()); //opcao 2

var retObj2 = function retObj2() {
  return {
    nome: 'gabriel2 '
  };
};

console.log(retObj2());
