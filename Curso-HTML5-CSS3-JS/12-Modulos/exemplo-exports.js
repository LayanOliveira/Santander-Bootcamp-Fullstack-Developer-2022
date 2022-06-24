
//  Exemplo 1
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

export function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
}

export function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}

// Exemplo 2
function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`
}

function mostraCidade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.cidade}`
}

function mostraHobby(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.hobby}`
}

export {
    mostraIdade,
    mostraCidade,
    mostraHobby
}