//TEMPLATE LITERALS

/** 
 * geralmente para imprimir-mos texo com variaveis utilizamos a
 * concatenação, mas com o ES6 temos uma outra forma muito mais
 * clean para isso..
 * 
 * POR EXEMPLO ... 
*/
const nome = 'Gabriel';
const idade = 22;
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');

//Agora utilizando o Template Literals
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);