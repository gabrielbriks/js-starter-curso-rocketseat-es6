//DESESTRUTURAÇÃO DE OBJETOS

const usuario = {
  nome: 'Gabriel',
  idade: 22,
  endereco: {
    cidade: 'Brasilia',
    estado: 'DF',
  },
};
/**
 como poderiamos buscar certas informações desse usuario;
 a primeira ideia que se vem na cabeça é :
   
  const nome = usuario.nome;
  const idade = usuario.idade;
  const cidade = usuario.endereço.cidade;
 */

// utilizando a destruturação de objeto
const { nome, idade, endereco:{ cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

//podemos usar essa abordagem em diversos locais ..

function mostraNome({nome,idade, endereco:{ cidade } }){
  console.log(nome, idade,cidade);
}
mostraNome(usuario);
 
