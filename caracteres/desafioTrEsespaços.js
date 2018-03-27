const texto = 'a   b'
console.log(texto.match(/a   b/)) // dando espaços
console.log(texto.match(/a\s\s\sb/)) //s significa espaço 

// no futuro
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a {3}b/))
console.log(texto.match(/a\s {3}/))