const $ = document;

const firstColorInput = $.querySelector('#color-a');
const secondColorInput = $.querySelector('#color-b');
const directions = $.querySelectorAll('.buttons button');
const generatorBtn = $.querySelector('#submit');
const randomGeneratorBtn = $.querySelector('#random');
const codeTextArea = $.querySelector('#code');
const copyBtn = $.querySelector('#copy');
let currentDirection = 'to top'

const setDirection = (direction, directionElem) => {
    for (let item of directions) {
        item.classList.remove('active')
    }

    if (directionElem.tagName === 'BUTTON') {
        directionElem.classList.add('active')
    } else {
        directionElem.parentElement.classList.add('active')
    }
    currentDirection = direction
}

const generateCssCode = () => {
    let cssCode = `linear-gradient(${currentDirection},${firstColorInput.value},${secondColorInput.value})`

    codeTextArea.value = 'background: ' + cssCode
    $.body.style.background = cssCode
}

const copyCodeCss = ()=>{
    codeTextArea.select()
    $.execCommand('copy')
}
const generateCssCodeRandom = ()=>{
    let firstNum = Math.floor(Math.random() * 255)
    let secondNum = Math.floor(Math.random() * 255)
    let thirdNum = Math.floor(Math.random() * 255)
    let fourthNum = Math.floor(Math.random() * 255)
    let fifthNum = Math.floor(Math.random() * 255)
    let sixthNum = Math.floor(Math.random() * 255)

    let cssCode = `linear-gradient(${currentDirection},rgba(${firstNum},${secondNum},${thirdNum},1),rgba(${fourthNum},${fifthNum},${sixthNum},1))`
    codeTextArea.value = 'background: ' + cssCode
    $.body.style.background = cssCode
}
directions.forEach(direction => {
    direction.addEventListener('click', (event) => {
        let direction = event.target.dataset.direction

        setDirection(direction, event.target)
    })
});

generatorBtn.addEventListener('click',generateCssCode)
copyBtn.addEventListener('click',copyCodeCss)
randomGeneratorBtn.addEventListener('click',generateCssCodeRandom)
generateCssCode()