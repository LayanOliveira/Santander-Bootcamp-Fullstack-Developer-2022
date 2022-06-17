function calculaIdade(anos) {
    if (this.raca == undefined) { this.raca = "Humano(a)" }
    return `${this.nome} é um(a) ${this.raca}, e daqui a ${anos} anos terá ${this.idade + anos
        } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Carla",
    idade: 26,
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug",
}

// Call
console.log(calculaIdade.call(animal, 7))
//  Apply
console.log(calculaIdade.apply(pessoa1, [4]))