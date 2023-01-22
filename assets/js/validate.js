//Seu JavaScript de validação aqui

export function valida(input){
  const tipoDeInput = input.dataset.tipo


  if(input.validity.valid){
    input.parentElement.classList.remove('formcontato__form__container__invalido')

    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
  }else{
    input.parentElement.classList.add('formcontato__form__container__invalido')

    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
  }
}

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

function mostraMensagemDeErro(tipoDeInput, input){
  let mensagem = ''

  tiposDeErro.forEach(erro => {
    if(input.validity[erro]){
      mensagem = mensagensDeErro[tipoDeInput][erro]
    }
  })

  return mensagem
}

// Clique no input e inspecionar elemento, no console cole o comando "$0.validity".
// Vai aparecer todos os campos de estado de validação
const mensagensDeErro = {
  nome:{
    valueMissing: 'O campo nome não pode estar vazio'
  },
  email:{
    valueMissing: 'O email não pode estar vazio.',
    typeMismatch: 'O email digitado não é válido.'
  },
  assunto:{
    valueMissing: 'O campo assunto não pode estar vazio'
  },
  mensagem:{
    valueMissing: 'O campo mensagem não pode estar vazio'
  }
}