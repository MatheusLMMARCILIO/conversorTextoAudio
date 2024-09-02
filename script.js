/*Elementos*/
const selecaoVoz = document.querySelector(".selecaoVoz")
const entradaTexto = document.querySelector(".entradaTexto")
const btnOuvir = document.querySelector(".ouvirBtn")
const btnBaixarText = document.querySelector(".baixarTextBtn")


/*api de vozes*/

const fala = new SpeechSynthesisUtterance() /*Criação da voz*/

let vozesDisponiveis = []




/*Preencher o select*/

const atualizarValores = () => {
    vozesDisponiveis = window.speechSynthesis.getVoices()

    fala.voice = vozesDisponiveis[0]

    console.log(vozesDisponiveis)

    vozesDisponiveis.forEach((voz, index) => {
        const opcao = document.createElement("option")
        opcao.value = index
        opcao.textContent = voz.name
        selecaoVoz.appendChild(opcao)

    })

}

window.speechSynthesis.onvoiceschanged = atualizarValores

/*execuatar o texto como voz*/

selecaoVoz, addEventListener("change", () => {
    fala.voice = vozesDisponiveis[selecaoVoz.value]
})

btnOuvir.addEventListener('click', () => {

    fala.text = entradaTexto.value

    window.speechSynthesis.speak(fala) /*Fala da voz*/

})

/*baixar texto em arquivo*/

btnBaixarText.addEventListener('click', () => {
    const text = entradaTexto.value

    const blob = new Blob([text], { type: 'text/plain' })

    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')

    a.href = url

    a.download = 'text,txt'

    a.click()

    URL.revokeObjectURL(url)
})












