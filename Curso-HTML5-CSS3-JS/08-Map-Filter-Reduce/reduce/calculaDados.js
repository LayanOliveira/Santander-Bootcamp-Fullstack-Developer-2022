const lista = [
    {
        name: 'Sabão em pó',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 12,
    },
    {
        name: 'Toalha',
        preco: 30,
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (previous, current, index) {
        // console.log('rodada', index + 1)
        // console.log({ previous })
        // console.log({ current })
        return previous - current.preco
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista))