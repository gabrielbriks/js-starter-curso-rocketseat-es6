/**
 *  --- WEBPACK ---
 * É COMO SE FOSSE UM SERVIÇO QUE NOS DIPONIBILIZA TRABALHAR COM DIFVERSOS ARQUIVOS JS
 * DENTRO DO APP, DESSA MANEIRA NAO PRECISAREMOS TER APENAS O NOSSO ARQUIVO 'MAIN.JS'.
 * SERÁ POSSIVEL TAMBEM CARREGAR-MOS IMAGENS,CSS E ETC;
 * 
 * Para configurar o WebPack utilizaremos o seguinte cmd: yarn add webpack webpack-cli
 * Após isso iremos criar o arquivo de configuração com o seguinte nome: webpack.config.js
 * 
 * Ao finalizar a configuração e der algum erro será preciso conferir na documentação do babel,
 * pois lá diz que quando estamos utilizando o Webpack  é preciso utilizar a versao 8.0.0-beta 
 * 
 * yarn add babel-loader@8.0.0-beta.0
 */

 //realizando a importação de um arquivo
 //import soma, {sub} from './functions';
 
 //renomeando os impots         
 // import {soma as somaFunction} from './soma';
//  console.log(soma(1,2));
//  console.log(sub(2,1));
 
//outra forma de realizar o import de todas as funções de um arquivo 
//  import * as funcoes from './functions';
//  console.log(funcoes.soma(1,3))




