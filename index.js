function leapYearBtn() {
    inputText = document.getElementById('inputText')
    inputText.textContent = '';
    inputValue = inputText.value
    var reg = /^\d+$/
    const checking = reg.test(inputValue)
    if (inputValue === '') {
        return alert("Input Value is empty")
    }
    if (!checking) {
        inputText.value = '';
        return alert("Enter Number Value")
    }
    oldDiv = document.getElementById('display')
    oldDiv.innerHTML = '';
    if ((inputValue % 400 == 0 || inputValue % 100 == 0 || inputValue % 4 == 0) && inputValue != 0) {
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
        else {
            alert(`Sorry! Invalid input`)
        }
    }
}
// Number Converter
function convert() {
    inputText1 = document.getElementById("input");
    inputValue1 = inputText1.value;
    if (inputText1.value != 0) {
        Display = document.getElementById('display1');
        Display.innerHTML = '';
        const newDiv1 = document.createElement('div')
        newDiv1.classList.add('newDis');
        newDiv1.innerHTML = `
        <table>
        <tr>
            <th>Decimal</th>
            <th>Binary</th>
            <th>Octal</th>
            <th>Hexa</th>
        </tr>
        <tr>
            <td>${(Number(inputValue1)).toString(10)}</td>
            <td>${(Number(inputValue1)).toString(2)}</td>
            <td>${(Number(inputValue1)).toString(8)}</td>
            <td>${(Number(inputValue1)).toString(16)}</td>
        </tr>
    </table>`
        Display.appendChild(newDiv1)
    }
    else {
        alert('Sorry! Invalid input!')
    }
    inputText1.value = '';
}
