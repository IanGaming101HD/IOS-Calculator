let buttons = document.getElementsByTagName('button');
let content = document.getElementById('content')
let equation = ''

Object.values(buttons).forEach((element) => {
    element.addEventListener('click', function (event) {
        event.preventDefault()
        let id = element.id
        let classList = element.classList

        console.log(1)
    })
})

window.addEventListener('keydown', function(event) {
    event.preventDefault()

    if (['+', '-', 'x', '/'].find((element) => element == event.key)) {
        content.innerText = 'THISSHOULDBEINVISIBLE'

        equation += event.key
        if (content.innerText === 0) {
        }
    } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].find((element) => element == event.key)){
        console.log('hi')
        if (triggedOnce === false) {
            equation += event.key
            content.innerText = equation
            triggedOnce = true
        } else {
            equation += event.key
            content.innerText += event.key
        }
    } else [
        console.log(2)
    ]
})