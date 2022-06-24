// Exemplo 1
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
}

export default mostraHobby