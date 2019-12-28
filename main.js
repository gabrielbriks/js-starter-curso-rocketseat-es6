//constantes e variaveis de escopos

/*const
  Nao pode ter o seu valor reatribuido;
  const a = 3 ;

  ERROR
  a = 5;

  UNICA FORMA DE ALTERA-LÁ E MUTANDO ELA CONFORME A BORDAGEM ABAIXO;
*/


const usuario = {nome: 'Gabriel'};

usuario.nome = 'Cleiton';

console.log(usuario.nome);


//VARIAVEIS DE ESCOPO
function teste(x){
  //declarando minha variavel de escopo
  let y = 2;

  if(x > 5){
    //atribuindo um novo valor para a minha variavel 
    let y = 4;

    console.log(x, y);
  }
  
}
teste(10);