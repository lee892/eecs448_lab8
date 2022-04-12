var button = document.querySelector('#validateButton')
var password = document.querySelector('#password')
var validate = document.querySelector('#validate')

button.onclick = () => {
    if (password.value.length < 8 || validate.value.length < 8) {
        alert('Password should be longer than 8 characters')
    } else if (password.value != validate.value) {
        alert('Passwords should match')
    } else {
        alert('Password validated')
    }
}