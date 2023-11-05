const $ = document;

const firstColorInput = $.querySelector('#color-a');
const secondColorInput = $.querySelector('#color-b');
const directions = $.querySelectorAll('.buttons button');
const generatorBtn = $.querySelector('#submit');
const codeTextArea = $.querySelector('#code');
const copyBtn = $.querySelector('#copy');
let body = $.body;

console.log(directions);

const setDirection = (direction,directionElem) => {
    for (let item of directions) {
        item.classList.remove('active')
    }

    if (directionElem.tagName === 'BUTTON') {
            directionElem.classList.add('active')
    } else {
        directionElem.parentElement.classList.add('active')
    }
}

directions.forEach(direction => {
    direction.addEventListener('click', (event) => {
        let direction = event.target.dataset.direction
        
        setDirection(direction,event.target)
    })
});