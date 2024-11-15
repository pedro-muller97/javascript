var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // menor que 18 e acima de 65 voto opcional
        console.log('Voto opcional')
} else { // caso tenha entre 18 e 65, voto obrigatório.
    console.log('Voto orbrigatório')
}