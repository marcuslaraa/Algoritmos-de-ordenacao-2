const listaLivros = require('./arrays');
const trocaLugar = require('./encontra-menor');

function quickSort(array, esquerda, direita) {
  if (array.length > 1) {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) {
      quickSort(array, esquerda, indiceAtual - 1);
    }

    if (indiceAtual < direita) {
      quickSort(array, indiceAtual, direita);
    }
  }

  return array;
}

function particiona(array, esquerda, direita) {
  let pivo = array[Math.floor((direita + esquerda) / 2)];
  let atualEsquerda = esquerda;
  let atualDireita = direita;

  while (array[atualEsquerda] <= array[atualEsquerda])
    while (array[atualEsquerda.preco < pivo.preco]) {
      atualEsquerda++;
    }

  while (array[atualDireita] >= array[atualEsquerda]) {
    atualDireita--;
  }
  if (atualEsquerda <= atualDireita) {
    trocaLugar(array, atualEsquerda, atualDireita);
    atualEsquerda++;
    atualDireita--;
  }

  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
