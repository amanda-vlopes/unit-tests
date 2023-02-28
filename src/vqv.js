/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (nome, idade) => {
  if (nome === undefined && idade === undefined) {
    return undefined;
  }
  const linha1 = `Oi, meu nome é ${nome}!\n`;
  const linha2 = `Tenho ${idade} anos,\n`;
  const linha3 = 'trabalho na Trybe e mando muito em programação!\n';
  const linha4 = '#VQV!';
  const paragrafo = linha1 + linha2 + linha3 + linha4;
  return paragrafo;
};

console.log(vqv('Alberto', 30));

module.exports = vqv;
