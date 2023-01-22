import { valida} from './validate.js'

const inputs = document.querySelectorAll('.input__text')

inputs.forEach(input =>{
  input.addEventListener('blur', (evento)=>{
    valida(evento.target)
  })
})