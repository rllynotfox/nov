document.querySelector('#flex').style.opacity = '100%'

var pressed = false

if(!localStorage.getItem('side')) {
    document.querySelector('.button').addEventListener('click', () => {
        if(!pressed) {
            var text = document.querySelector('#enter-text')
            text.style.color = '#04d9ff'
            text.innerText = 'Вы джедай'
            text.style.left = `calc(50% - (${text.clientWidth}px / 2))`
            text.style.animation = 'light 1s 0s'
            text.style.userSelect = 'text'
            pressed = true
            document.querySelectorAll('#flex div').forEach(x => {
                x.style.cursor = 'default'
            })
            document.querySelector('#flex').style.opacity = '0%'
            document.querySelector('#flex').style.animation = 'id 0.5s 0s'
            localStorage.setItem('side', 'light')
            
        }
    })
    
    document.querySelector('.button2').addEventListener('click', () => {
        if(!pressed) {
            var text = document.querySelector('#enter-text')
            text.style.color = '#DB232C'
            text.innerText = 'Вы ситх'
            text.style.left = `calc(50% - (${text.clientWidth}px / 2))`
            text.style.animation = 'dark 1s 0s'
            pressed = true
            document.querySelector('#flex').style.opacity = '0%'
            document.querySelector('#flex').style.animation = 'id 0.5s 0s'
            localStorage.setItem('side', 'dark')
        }
    })
} else {
    document.querySelector('#flex').style.opacity = '0%';
    document.querySelectorAll('#flex div').forEach(x => {
        x.style.cursor = 'default'
    })
    pressed = true;
    var text = document.querySelector('#enter-text')
    text.style.userSelect = 'text'
    if(localStorage.getItem('side') === 'light') {
            text.style.color = '#04d9ff'
            text.innerText = 'Вы джедай'
            text.style.left = `calc(50% - (${text.clientWidth}px / 2))`
    } else {
            text.style.color = '#DB232C'
            text.innerText = 'Вы ситх'
            text.style.left = `calc(50% - (${text.clientWidth}px / 2))`
    }
}
