let buttons = document.getElementsByTagName('button');

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

    switch(event.key) {
        case '1':
            console.log(event.key)
            break
        case 'ArrowDown':
            console.log(1)
            break
        case 'ArrowDown':
            console.log(1)
            break
        case 'ArrowDown':
            console.log(1)
            break 
        case 'ArrowDown':
            console.log(1)
            break
        default:
            console.log(event.key)
            return
    }
})