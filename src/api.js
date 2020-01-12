import axios from 'axios';

//Isso vai criar uma configuração para a 'api'
const api  = axios.create({
  //O baseUrl utilizamos para determinar a url default que ele ira buscar os dados, sendo assim
  // todas as request(requisiçoes) irão partir desse endereço.
  baseURL: 'http://api.github.com',
});

export default api;