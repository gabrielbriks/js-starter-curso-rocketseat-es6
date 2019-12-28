"use strict";

//constantes e variaveis de escopos

/*const
  Nao pode ter o seu valor reatribuido;
  const a = 3 ;

  ERROR
  a = 5;

  UNICA FORMA DE ALTERA-LÁ E MUTANDO ELA CONFORME A BORDAGEM ABAIXO;
*/
var usuario = {
  nome: 'Gabriel'
};
usuario.nome = 'Cleiton';
console.log(usuario.nome); //VARIAVEIS DE ESCOPO

function teste(x) {
  //declarando minha variavel de escopo
  var y = 2;

  if (x > 5) {
    //atribuindo um novo valor para a minha variavel 
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
