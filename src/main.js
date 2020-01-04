//Importando o axios
import axios from 'axios';

//Criando uma classe
class Api {
  //Para trtar o erro nesse caso a melhor opção é utilizar o try catch
  
  //Criando um metodo static que recebera o usuario 
  static async getUserInfo(username){
    try {
      const response =  await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    }catch(err){
      console.warn('ERROR na API ');
    }
  }
}
//Chamando o nosso metodo da da classe Api
Api.getUserInfo('gabrielbriks');
// Api.getUserInfo('');