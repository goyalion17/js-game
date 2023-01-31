const character = document.getElementById('character');
const block = document.getElementById('block');

function jump() {
    if (character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(()=> {
        character.classList.remove('animate');
    }, 500)
}

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 100){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('You are caught!')
    }
})

const time = Math.random() * (3-1) +1
const blockAnimate = document.getElementById('block')
blockAnimate.style.setProperty('--animation-time', time + 's')