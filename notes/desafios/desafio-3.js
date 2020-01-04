
/// ---- DESAFIO MODULO 3 ----

//DESAFIO 1
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundo() {
 delay().then(() => {
 console.log('1s');
 delay().then(() => {
 console.log('2s');
 delay().then(() => {
 console.log('3s');
 });
 })
 });
}
// umPorSegundo();

//Com Assyc
async function umPorSegund() {
  await delay();
  console.log('foi meu segund');

  await delay();
  console.log('foi mais 1');

  await delay();
  console.log('Foi o ultimo : Sucessful');
}
// umPorSegund();

//DESAFIO 2

import axios from 'axios';

function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

//UTILIZANDO O ASYNC E AWAIT
async function getInfoUserGit(user) {
  try{
    var response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }catch(err){
    console.log('Usuario nao encontrado');
  }
}

// getInfoUserGit('gabrielbriks');
// getInfoUserGit('gabrielbrikss');


//DESAFIO 3

class Github {
  static getRepositories(repo) {
  axios.get(`https://api.github.com/repos/${repo}`)
  .then(response => {
  console.log(response.data);
  })
  .catch(err => {
  console.log('Repositório não existe');
  })
  }
 }
//  Github.getRepositories('rocketseat/rocketseat.com.br');
//  Github.getRepositories('rocketseat/dslkvmskv');

// COM ASYNC AWAIT

class ReposGit{
   static async getRepos(repo){
     try{
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(response.data);   
     }catch(err){
      console.warn('Repositório não encontrado');
     }
    
  }
}

// ReposGit.getRepos('gabrielbriks/IoT-ArduinoWithTelegram');
// ReposGit.getRepos('rocketseat/dslkvmskv');

//DESAFIO 4

const buscaUsuario = usuario => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
  console.log(response.data);
  })
  .catch(err => {
  console.log('Usuário não existe');
  });
 }
//  buscaUsuario('diego3g');

 //ASYN & AWAIT

 const searchUSer = async usuario => {
  try{
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  }catch(err){
    console.log('Usuario não existe');
  }
 }

//  searchUSer('diego3g');
