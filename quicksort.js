var lista = []
var esquerda = 0
var direita = 0;

function inserirNumero() {
    var numero = Number(input_numero.value)
    lista.push(numero)
    direita = lista.length - 1
    span_lista.innerHTML = lista
}
function quicksort(vetor, esquerda, direita) {
    if(esquerda<direita){
        var posicaoPivot = buscarPosicaoPivot(vetor, esquerda, direita)
        quicksort(vetor, esquerda, (posicaoPivot-1))
        quicksort(vetor, (posicaoPivot+1), direita)
    }else{
        span_lista.innerHTML = lista
    }
}

function buscarPosicaoPivot(vetor, esquerda, direita) {
    var pivot = vetor[esquerda]
    var i = esquerda

    for (var j = esquerda+1; j<=direita; j++) {
        var numeroComparacao = vetor[j]
        if(numeroComparacao <= pivot){
            i+=1
            var numero_guardado = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = numero_guardado
        }
    }
    var numero_guardado = vetor[esquerda]
    vetor[esquerda] = vetor[i]
    vetor[i] = numero_guardado
    return i
}

