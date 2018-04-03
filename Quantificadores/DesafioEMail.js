const texto = `
Os e-mails dos convidados são:
- aliciatairini@cod3r.com.br
- marconimbarroso@gmail.com
- emilyaparecida@empresa.info.br
- allanalemos@registro.br
- gisleymaria@yahoo.com
`
const regex = (console.log(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
console.log(texto.match(regex))