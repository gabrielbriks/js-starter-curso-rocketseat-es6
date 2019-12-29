"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * REST / SPREAD
 * como ainda não foram acoplados a função do Babel, precisaremos
 * utilizar um novo pacote 
 * yarn add @babel/plugin-proposal-object-rest-spread
 *
*/
//REST

/**
 * o REST serve para pegar o resto das propiedades
 * EXEMPLO:
 */
var usuario = {
  nome: 'Gabriel',
  idade: 22,
  Empresa: 'Polariuns'
}; //utilizando o REST

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); //  console.log(nome);
//  console.log(resto);
//podemos aplicar isso em vetores


var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    cRest = arr.slice(2); // console.log(a);
// console.log(b);
// console.log(cRest);
//utilizando para parametro de functions

function soma(a, b, c) {
  return a + b + c;
} // console.log(soma(1, 2, 3));
//utilizando REST


function somaRest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //utilizando o reduce para realizar a soma
  return params.reduce(function (total, next) {
    return total + next;
  });
} // console.log( somaRest(1, 2, 3) );
//SPREAD

/**
 * ele executa algo totalmente distinto do REST, ele faz uma propagacao
 * de dados para uma outra estrutura
 */
//Como podemos unir esses dois arrays?
//utilizando o spread e possivel fazer isso de uma forma bem simples


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2); //  console.log(arr3);
//utilizando o objeto usuario declarado la em cima

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Juquinha'
});

console.log(usuario2);
