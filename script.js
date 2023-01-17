let buttons = document.getElementsByTagName('button');
let content = document.getElementById('content')
let equation = '0'
let operatorActive = false
let equalsActive = false

Object.values(buttons).forEach((element) => {
    element.addEventListener('click', function (event) {
        // console.log(equation)
        if (event.defaultPrevented) {
            return
        }
        event.preventDefault()

        let id = element.id
        let classList = element.classList

        if (['+', '-', '*', '/'].find((element) => element === id)) {
            if (document.getElementById(id).style.backgroundColor === '#b96300' && operatorActive === true) {
                document.getElementById(id).style.backgroundColor = '#ff8800'
                operatorActive = false
                return
            }

            ['+', '-', '*', '/'].forEach((id) => document.getElementById(id).style.backgroundColor = '#ff8800')

            document.getElementById(id).style.backgroundColor = '#b96300'
            operatorActive = true

            if (['+', '-', '*', '/'].find((element) => element === equation[equation.length - 1])) {
                equation[equation.length - 1] = id
            } else {
                equation += id
            }
        } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '%'].find((element) => element === id)) {
            if (operatorActive) {
                content.innerText = '0'
            }
            if (equalsActive) {
                equation = '0'
                equalsActive = false
                content.innerText = '0'
            }

            if (['0', 'NaN', 'Error'].find((element) => element === content.innerText)) {
                content.innerText = id
            } else if (content.innerText[content.innerText.length - 1] === '%' || ['.', '%'].find((element) => element === id) && (content.innerText.includes('.') || content.innerText.includes('%'))) {
                return
            } else {
                content.innerText += id
            }

            if (id === '%') {
                equation += '/100'
            } else {
                equation += id
            }

            operatorActive = false

            event.preventDefault()

        } else if (id === '=') {
            ['+', '-', '*', '/'].forEach((id) => document.getElementById(id).style.backgroundColor = '#ff8800')

            try {
                equation = eval(equation).toString()
            } catch (err) {
                content.innerText = 'Error'
                return
            }

            operatorActive = true
            content.innerText = equation
        } else if (id === 'AC') {
            equation = ''
            content.innerText = '0'
        } else if (id === '+/-') {
            if (content.innerText == '0') return
            equation *= -1
            content.innerText = equation
        } else {
            return
        }
    })
})

window.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault()

    if (['+', '-', '*', '/'].find((element) => element === event.key)) {
        if (document.getElementById(event.key).style.backgroundColor === '#b96300' && operatorActive === true) {
            document.getElementById(event.key).style.backgroundColor = '#ff8800'
            operatorActive = false
            return
        }
    
        ['+', '-', '*', '/'].forEach((id) => document.getElementById(id).style.backgroundColor = '#ff8800')
    
        document.getElementById(event.key).style.backgroundColor = '#b96300'
        operatorActive = true
    
        if (['+', '-', '*', '/'].find((element) => element === equation[equation.length - 1])) {
            equation[equation.length - 1] = event.key
        } else {
            equation += event.key
        }
    } else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '%'].find((element) => element === event.key)) {
        if (operatorActive) {
            content.innerText = '0'
        }
        if (equalsActive) {
            equation = '0'
            equalsActive = false
            content.innerText = '0'
        }
    
        if (['0', 'NaN', 'Error'].find((element) => element === content.innerText)) {
            content.innerText = event.key
        } else if (content.innerText[content.innerText.length - 1] === '%' || ['.', '%'].find((element) => element === event.key) && (content.innerText.includes('.') || content.innerText.includes('%'))) {
            return
        } else {
            content.innerText += event.key
        }
    
        if (event.key === '%') {
            equation += '/100'
        } else {
            equation += event.key
        }
    
        operatorActive = false
    
        event.preventDefault()
    
    } else if (event.key === '=') {
        ['+', '-', '*', '/'].forEach((id) => document.getElementById(id).style.backgroundColor = '#ff8800')
    
        try {
            equation = eval(equation).toString()
        } catch (err) {
            content.innerText = 'Error'
            return
        }
    
        operatorActive = true
        content.innerText = equation
    } else if (event.key === 'AC') {
        equation = ''
        content.innerText = '0'
    } else if (event.key === '+/-') {
        if (content.innerText == '0') return
        equation *= -1
        content.innerText = equation
    } else {
        return
    }
})









// window.addEventListener('keydown', function (event) {
//     if (event.defaultPrevented) {
//         return
//     }
//     event.preventDefault()

//     if (['+', '-', 'x', '/'].find((element) => element == event.key)) {
//         content.innerText = 'THISSHOULDBEINVISIBLE'

//         equation += event.key
//         if (content.innerText === 0) {}
//     } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].find((element) => element == event.key)) {
//         if (triggedOnce === false) {
//             equation += event.key
//             content.innerText = equation

//             triggedOnce = true
//         } else {
//             equation += event.key
//             content.innerText += event.key
//         }
//     } else {
//         return
//     }
// })

// 21 
// if (['+', '-', '*', '/', '='].find((element) => element === id)) {

// 43 
// dont need to include this!
// if (element === '=') {
//     console.log(1)
//     setTimeout(() => document.getElementById(id).style.backgroundColor = '#ff8800', 1000)
//     console.log(2)
// }