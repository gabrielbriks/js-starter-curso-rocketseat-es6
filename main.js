class Matematica{
  /*
   * essa propriedade static só funciona quando criamos uma classe para executar ou realiza alguma coisa
   * nesse caso ela sempre recebe e retorno alguma coisa para a gente.
  */
  static soma( a, b){
    return a + b;
  }
}

console.log(Matematica.soma(7,5));