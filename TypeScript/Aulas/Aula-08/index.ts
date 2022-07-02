interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string
}

type CachorroSomenteLeitura = {
    +readonly [k in keyof Cachorro]-?: Cachorro[k]
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade; // 'private idade' pra deixar os dados privados
    nome; // 'private nome' pra deixar os dados privados
    parqueFavorito; // 'private parqueFavorito' pra deixar os dados privados

    constructor(nome, idade, parqueFavorito?){
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito
    }
}

const cao = new MeuCachorro('Apolo', 14)

console.log(cao)

// const meuCachorro: Cachorro = {
//     nome: 'Apolo',
//     idade: 14,
// }