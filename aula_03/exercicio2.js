divC.style.display = 'none'

const hideInputs = () => {
    let selected = selectTemp.value
    console.log(selected);

    if(selected === 'c') {
        divC.style.display = 'none'
        divF.style.display = 'block'
    } else if(selected === 'f'){
        divF.style.display = 'none'
        divC.style.display = 'block'
    }
}

const toC = (event) => {
    event.preventDefault()
    console.log('para celsius');
}

const toF = (event) => {
    event.preventDefault()
    console.log('para fahrenheit')
    let tempCelsius = celsius.value
    let tempF = (tempCelsius * 9/5) + 32 
    console.log(resultado)

    resultado.innerHTML = tempF

exibirresult(tempF)
}

const exibirResultado = 