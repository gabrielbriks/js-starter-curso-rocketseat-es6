//criando uma classe 
class List{
  //instanciando um contrutor
  constructor(){
    this.data = [];
  }
  //criando um metodo para adicionar uma informação e realizar o print no console
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

//criando outra classe que herda a a classe list
class TodoList extends List{
  //definimos novamente o contrutor
 constructor(){
   //desse modo chamamos o construtor da nossa classe pai 'List'
   super();
    //adicionando mais uma informação para a classe
   this.usuario = 'juca';
 }
 //criando metodo para printar no console o usuario
 mostraUsuario(){
   console.log(this.usuario);
 }
}

//instanciando a classe TodoList
const MinhaLista = new TodoList();

//Pegando o elemento html e atribuindo o envento click
document.getElementById('novotodo').onclick = function(){
  //chamando o nosso metodo de dentro da classe para adicionar um novo todo
  MinhaLista.add('Novo Todo');

}
//chamando o nosso outro metodo dentro da classe para mostrar o usuario
MinhaLista.mostraUsuario();