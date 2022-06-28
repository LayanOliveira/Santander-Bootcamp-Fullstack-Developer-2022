// Generic Types
// Quando não sabe o que vai receber, leva a letra T
function adicionaApendiceALista<T>(array: any[], valor: T) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1, 2, 3], 'd')

function adicionaApendiceALista2<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista2([1, 2, 3], 4) // Não aceitar receber valor string, todos devem ser iguais