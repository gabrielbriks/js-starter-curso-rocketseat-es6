//  ---------------- DESAFIO 1 ---------------------
console.log('desafio 1 - RESOLUÇÃO ');

// class Usuario{
//   constructor(email, senha){
//     this.email = email;
//     this.senha = senha;
//   }
//   isAdmin(){
    
    
//     return ;
//   }
// }
  
//   class Admin extends Usuario{
//     constructor(email, senha){
//       super(email, senha );
//       this.admin = true; 
      
//     }
   
//   }
  
  
//    const user = new Usuario('email@teste.com', 'senha123');
//    const adm = new Admin('mail@teste.com', 'senha123');
//   console.log(user);
//   console.log(adm);
//   console.log(user.isAdmin());
/**
 * DESAFIO 1 NAO FOI CONCLUIDO
 */



//DESAFIO 1.2.1
const usuario = [
  {nome:'Gabriel', idade: 22, empresa:'Polariuns'},
  {nome: 'Diego', idade: 23, empresa:'Rokeatseat'},
  {nome: 'Lucas', idade:30, empresa:'Facebook'},
];

const olds = usuario.map(function(item){
      const idades = item.idade;
      return idades
      } );
      console.log(olds);


  //DESAFIO 1.2.2
  const filter = usuario.filter(function(item){
    return item.empresa == 'Rokeatseat' && item.idade > 18;    
  });
  console.log(filter);

  //DESADFIO 1.2.3
  const finds = usuario.find(function(item){
    return item.empresa == 'Google';
  }) 
  console.log(finds);

  //DESAFIO 1.2.4
  const oldYears = usuario.map(function(item){
    item.idade = item.idade * 2;
    
    return item
     
  });
  const maximo50Anos = oldYears.filter(function(item){
    return item.idade <= 50;
  });
  console.log(maximo50Anos);


  //DESAFIO 3.1
  const arr = [1, 2, 3, 4, 5];
  // arr.map(function(item) {
  //  return item + 10;
  // });
   //arrow function
   const ret = arr.map(item=> item + 10);
  console.log(`arrow function 1 >> ${ret}`);
  
  //DESAFIO 3.2
  // Dica: Utilize uma constante pra function
  const usuario2 = { nome: 'Diego', idade: 23 };
  const mostraIdade = (usuario2) => usuario2.idade;
  console.log(mostraIdade(usuario2));

  //DESAFIO 3.3
  // Dica: Utilize uma constante pra function
  const nome = "Diego";
  const idade = 23;
  const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
  
  console.log(mostraUsuario(nome, idade));
  console.log(mostraUsuario(nome));

  //DESAFIO 3.4

  const promise = () => {
    return new Promise((resolve, reject) => resolve());
  }
   
  //DESAFIO 4
  const empresa1 = {
    nome1: 'Rocketseat',
    endereco1: {
    cidade1: 'Rio do Sul',
    estado1: 'SC',
    }
  };

  const { nome1, endereco1: { cidade1, estado1 } } = empresa1;

  console.log(nome1);
  console.log(cidade1);
  console.log(estado1);



//DESAFIO 4.2
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
 }
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
 
//DESAFIO 5
const myArr = [1, 2, 3, 4, 5, 6]
const  [x, ...y] = myArr;

console.log(x);
console.log(y);

const somar = (...params) =>{
  return params.reduce((total, next) => total + next);
} 
console.log(somar(1,2,3,4,5,6,7,8,9));

//DESAFIO 5.2]
const myUser = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
};

 const user2 =  { ...myUser, nome:'Gabriel' };
console.log(user2)
const user3 = {...myUser, endereco:{...myUser.endereco, cidade:'Lontras'}};
console.log(user3);

//DESAFIO 6
const myUser3 = 'Diego';
const myIdade3 = 23;
console.log(`O usuario ${myUser3} possuí ${myIdade3} anos`);

//DESAFIO 7
const name = 'Diego';
const years = 23;
const userFist = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
console.log(userFist);