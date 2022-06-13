const elementoResposta = document.querySelector('#resposta')
const inputQuestion = document.querySelector('#inputQuestion')
const buttonQuestion = document.querySelector('#buttonQuestion')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function askQuestion() {
  if (inputQuestion.value == '') {
    elementoResposta.innerHTML = 'Por favor digite sua pergunta'
    return
  }

  buttonQuestion.setAttribute('disabled', true)

  const question = '<div>' + inputQuestion.value + '</div>'

  const totalRespostas = respostas.length
  const randomNumber = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = question + respostas[randomNumber]

  elementoResposta.style.opacity = 1

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonQuestion.removeAttribute('disabled')
  }, 3500)
}
