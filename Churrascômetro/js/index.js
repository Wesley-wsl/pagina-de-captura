// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

const $adult = document.querySelector('#adult')
const $kid = document.querySelector('[data-js="kid"]')
const $time = document.querySelector('[data-js="time"]')
const $calc = document.querySelector('#button')
const $result = document.querySelector('#result')

$calc.addEventListener('click', calculo)

function calculo() {
    let beef = ($adult.value * 0.400).toFixed(2)
    let beer
    let water

    if ($time.value > 6) {
        beef = ($adult.value * 0.650).toFixed(2)
    }

    console.log(beef)

}