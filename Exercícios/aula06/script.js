var nome = window.prompt('Qual o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br>`) //quantos caracteres a string tem
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()} <br>`) // tudo para maiúsculas
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`) // tudo para minúsculas