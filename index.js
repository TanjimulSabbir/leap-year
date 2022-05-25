function leapYearBtn() {
    inputText = document.getElementById('inputText')
    inputText.textContent = '';
    console.log(inputText.value)
    inputValue = Number(inputText.value)
    if ((inputValue % 400 == 0 || inputValue % 100 == 0 || inputValue % 4 == 0) && inputValue != 0) {
        oldDiv = document.getElementById('display')
        oldDiv.innerHTML = '';
        newDiv = document.createElement('div')
        newDiv.classList.add('newDivDisplay')
        newDiv.innerHTML = `<p> ${inputValue} is Leap-Year</p>`
        oldDiv.appendChild(newDiv)
        inputText.value = '';
    }
    else {
        if (inputValue != 0) {
            oldDiv.innerHTML = '';
            oldDiv = document.getElementById('display')
            newDiv = document.createElement('div')
            newDiv.classList.add('newDivDisplay')
            newDiv.innerHTML = `<p> ${inputValue} is not Leap-Year</p>`
            oldDiv.appendChild(newDiv)
            inputText.value = '';
        }
    }
}
