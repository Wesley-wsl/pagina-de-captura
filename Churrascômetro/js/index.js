// Carne - 400g por pessoa | + de6 horas - 650
// Cerveja - 1200 ml por Pessoa | +6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa |  +6 horas - 1500ml

// Crianças valem por 0,5

const $adult = document.querySelector('#adult')
const $kid = document.querySelector('[data-js="kid"]')
const $time = document.querySelector('[data-js="time"]')
const $calc = document.querySelector('#button')
const $result = document.querySelector('#result')

$calc.addEventListener('click', calculo)

function calculo() {
    let beef = ($adult.value * 400 + (400 / 2 * $kid.value))
    let beer = ($adult.value * 1200)
    let water = ($adult.value * 1000 + (100 / 2 * $kid.value))

    if ($time.value > 6) {
        beef = ($adult.value * 650) + (650 / 2 * $kid.value)
        beer = $adult.value * 2000
        water = ($adult.value * 1500 + (1500 / 2 * $kid.value))
    }

    if ($kid.value == '' || $adult.value == '' || $time.value == '') alert('Preencha todos os campos.')
    else {
        $result.innerHTML = `
        <ul style="margin-top:30px;">
            <li>${beef / 1000} kg de carne.</li>
            <li>${Math.ceil(beer / 355)} latas de cerveja.</li>
            <li>${Math.ceil(beef / 2000)} garrafas de bebidas.</li>
        </ul>
    `
    }
}