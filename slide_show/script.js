var nextButton = document.querySelector('#next')
var prevButton = document.querySelector('#prev')
var images = document.querySelectorAll('.image')

var imageHolder = document.querySelector('#imageHolder')

var image = 1
nextButton.onclick = () => {
    if (image == 5) {
        image = 1
    } else {
        image++
    }
    display()
}

prevButton.onclick = () => {
    if (image == 1) {
        image = 5
    } else {
        image--
    }
    display()
}

function display() {
    for (let img of images) {
        img.style.display = "none"
        if (image == img.id[img.id.length-1]) {
            img.style.display = "block"
        }
    }
}