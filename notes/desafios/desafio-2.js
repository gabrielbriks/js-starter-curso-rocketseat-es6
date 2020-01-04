// alert('Desafio Modulo 2!');

//--- DESAFIO MODULO 2 ---

//DESAFIO1.1 & 1.2
import * as ClassUser  from './functions';
console.log(ClassUser.idade);
ClassUser.default.info();

//DESAFIO 1.3
import {default as User, idade as IdadeUser} from './functions';
console.log(IdadeUser);
User.info();
