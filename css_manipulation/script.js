var par = document.querySelector('p')
var button = document.querySelector('#button')

var redBorder = document.querySelector('#redBorder')
var greenBorder = document.querySelector('#greenBorder')
var blueBorder = document.querySelector('#blueBorder')
var width = document.querySelector('#width')

var redBack = document.querySelector('#redBack')
var greenBack = document.querySelector('#greenBack')
var blueBack = document.querySelector('#blueBack')


button.onclick = () => {
    if (redBorder.value == "" ||
        greenBorder.value == "" ||
        blueBorder.value == "" ||
        width.value == "" ||
        redBack.value == "" ||
        greenBack.value == "" ||
        blueBack.value == ""
    ) {
        alert('You must fill out all entries.')
    } else {
        par.style.borderStyle = "solid"
        par.style.borderColor = `rgb(${redBorder.value}, ${greenBorder.value}, ${blueBorder.value})`
        par.style.borderWidth = `${width.value}px`
        par.style.backgroundColor = `rgb(${redBack.value}, ${greenBack.value}, ${blueBack.value})`
    }   
}