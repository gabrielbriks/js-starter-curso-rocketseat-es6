"use strict";

//DESESTRUTURAÇÃO DE OBJETOS
var usuario = {
  nome: 'Gabriel',
  idade: 22,
  endereco: {
    cidade: 'Brasilia',
    estado: 'DF'
  }
};
/**
 como poderiamos buscar certas informações desse usuario;
 a primeira ideia que se vem na cabeça é :
   
  const nome = usuario.nome;
  const idade = usuario.idade;
  const cidade = usuario.endereço.cidade;
 */
// utilizando a destruturação de objeto

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade; // console.log(nome);
// console.log(idade);
// console.log(cidade);
//podemos usar essa abordagem em diversos locais ..

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
