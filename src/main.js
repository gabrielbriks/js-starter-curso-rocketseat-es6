//importando api
import api from './api';

/**
 * Essa classe servirá para controlar toda a nossa aplicação,
 * por nao ser uma aplicação grande so precisaremos de uma nesse primeiro momento
 * 
 * Iremos realizar todos os comportamentos pelo proprio JavaScript
 */
class App{
  constructor(){
    //inicializamos essa variavel que guardará todos a lista de repositorios que buscarmos do Git 
    this.repositories = [];

    //estamos buscando o elemento form do html
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');

    this.registerHandlers();
  }
  //vai registrar os eventos
  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true){
    if(loading == true){
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando . . . '));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);   
    }else{
      document.getElementById('loading').remove();
    }
  }
  
 /** Exemplo sem arrow functions
  registerHandlers(){
    this.formEl.onsubmit = function(event) {
      addRepository(event);
    }
  }
 */

  async addRepository(event){
    // previne o comportamento normal do html, aqueles de recarregamento de page e etc
    event.preventDefault();

    const repoInput = this.inputEl.value;
    console.log(repoInput);
    if(repoInput.length == 0)
      return alert('Todos os campos devem ser preenchido!');

    this.setLoading();
    try{
      const response = await api.get(`/repos/${repoInput}`);
      // console.log(response);

      //utilizando desestruturação
      const { name, description, html_url, owner:{ avatar_url } } = response.data;
      
      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputEl.value = '';
      this.render();
      
    }catch(err){
      alert('O repositório não existe! ')
    }
    this.setLoading(false);
  }
  
  //criando a função render que ira renderizar nossa lista de repositories 
  render(){
    //Isso aqui apaga os os conteudos da list 
    this.listEl.innerHTML = '';

    /**
     * Precisaremos varrer todo o nosso vetor de repositories para conseguirmos trabalhar com os dados
     * sendo assim poderiamos utilizar o metodo 'map()', só que o map é utilizando em ocasiões,
     * onde queremos modificar o array de alguma forma.. 
     * 
     * Mas para o nosso caso utilizaremos o 'forEach' que apenas percorre o array
     */
    this.repositories.forEach(repo => {
      //criando os elementos da tela 
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));
      
      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);

    })
    

  }
}
// Instanciando a classe assim, pois como nesse momento não iremos utilizar ela em alguma variavel 
new App();