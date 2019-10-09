// SELECTORS
let numberBtns = document.querySelectorAll('.number')
let operatorBtns = document.querySelectorAll('.operator')
let equals = document.getElementById('equals')
let output = document.getElementById('output')
let cBtn = document.getElementById('cBtn')

// VARIABLES
let numbers = []
let number = ""
let operator
let result = 0

// FUNCTIONS
function registerEventListeners() {

    // EVENT LISTENER ON THE OPERATOR BUTONS
    for(button of operatorBtns) {
        button.addEventListener('click', (e) => {

            if(number == "") {
                operator = e.target.innerText
                console.log("hey its nohing")
            } else {
                
                operator = e.target.innerText
                numbers.push(number)
                number = ""

            }
        })
    }

    // EVENT LISTENER ON THE NUMBER BUTONS
    for(button of numberBtns) {
        button.addEventListener('click', (e) => {
                        
            if(result !== 0 && number == "" && operator == "") {
                numbers = []
                result = 0
                number += e.target.innerText
            } else if(numbers.length >= 1 && number == "") {
                number += e.target.innerText
            } else {
                number += e.target.innerText
            }
        })
    }

    // EVENT LISTENER ON THE EQUALS BUTTON
    equals.addEventListener('click', (e) => {
        result = 0
        numbers.push(number)
        console.log(number)

        switch(operator) {
            case "+":
                for(let number of numbers) {
                    result += parseInt(number)
                    console.log(result)
                }
                output.innerText = result
                operator = ""
                number = ""
                break

            case "-":
                for(let i = 0; i < numbers.length; i++) {
                    if(i == 0) {
                        result = numbers[i]
                    } else {
                        result -= numbers[i]
                    }
                }
                output.innerText = result
                operator = ""
                number = ""
                break
        }

        numbers = [result]
        console.log("The numbers array is " + numbers + " The result is : " + result)
    })

    // EVENT LISTENER ON THE CLEAR BUTTON
    cBtn.addEventListener('click', (e) => {
        clear()
    })

}

function clear() {
    numbers = []
    result = 0
    number = ""
    output.innerText = result
}

registerEventListeners()