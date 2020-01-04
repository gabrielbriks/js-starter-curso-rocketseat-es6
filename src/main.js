const minhaPromise = () => new Promise((resolve,reject) =>{
  setTimeout(() => { resolve('OK') }, 2000);
});

//utilizando a sintax normal normal
minhaPromise().then(response => {
  console.log(response);
  
  minhaPromise().then(response => {
    console.log(response);

    minhaPromise().then(response => {
      console.log(response);
    });
  });
});

/**
 * Ao inves de usarmos o .then e .cacth varias vezes conforme o exemplo acima, utilizamos apenas 
 * o await conforme o exemplo abaixo;
 * 
 * Automaticamente quando utilizando o async para uma function, ela vira uma promise, sendo assim,
 * poderemos esperar o resultado dessa function utilizando o await 
 * 
 * OBS: So se pode usar o await na frende de uma promise se caso estivermos dentro de uma async,
 * 
 */


// async function executaPromise(){
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
//   console.log( await minhaPromise());
  
// }
// executaPromise();
// Exemplo da espera da resposta com await na frente de uma promise, que nao está dentro de um
// async .. resultará em error
//               await executaPromise();

//podemos converter o exemplo acima para um arrow functions
const executaPromise = async () =>{
  console.log( await minhaPromise());
  console.log( await minhaPromise());
  console.log( await minhaPromise());
}
executaPromise();