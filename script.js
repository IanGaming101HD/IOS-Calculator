
let buttons = document.getElementsByTagName('button');

function onClick(element) {
    let id = element.id
    let classList = element.classList

    console.log(1)
}

Object.values(buttons).forEach((element) => {
    element.addEventListener('click', () => onClick(element))
})