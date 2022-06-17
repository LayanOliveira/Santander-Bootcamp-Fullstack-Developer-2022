const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
]
// Solução 1
function alunosAprovados(arr, media) {
    let aprovados = []
    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i]

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))


// Solução 2
function alunosAprovados(arr, media) {
    let aprovados = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nota >= media) {
            aprovados.push(arr[i].nome)
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 7))
