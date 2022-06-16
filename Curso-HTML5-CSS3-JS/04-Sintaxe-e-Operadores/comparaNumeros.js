function comparaNumero(num1, num2) {
    const saoIguais = criaIguais(num1, num2)
    const asoma = saoMaior(num1, num2)
    if (num1 == null || num2 == null) { return "Favor entrar dois números" }
    if (num1 != Number || num2 != Number) { return 'Favor entrar dois "NÚMEROS"' }
    return `${saoIguais} ${asoma}`
}
function criaIguais(num1, num2) {
    let iguais = `Os números ${num1} e ${num2}`
    let siguais = 'não'

    if (num1 === num2) { siguais = '' }
    return `${iguais} ${siguais} são iguais.`
}

function saoMaior(num1, num2) {
    dez = 'maior'
    vinte = 'maior'

    if (num1 + num2 < 10) { dez = 'menor' }
    if (num1 + num2 < 20) { vinte = 'menor' }
    return `Sua soma é ${num1 + num2}, que é ${dez} que 10 e ${vinte} que 20.`
}


console.log(comparaNumero(a))
