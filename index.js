document.querySelector('#flex').style.opacity = '100%'

var pressed = false

req = new XMLHttpRequest()
var response = []
answer = {}
var h = 0
req.open('GET', 'https://ipapi.co/city')
req.onload = () => {
    switch(++h) {
        case 1:
            answer.city = req.response
            req.open('GET', 'https://ipapi.co/ip')
            req.send()
            break
        case 2:
            answer.ip = req.response
            req.open('GET', 'https://ipapi.co/postal')
            req.send()
            break
        case 3:
            answer.postal = req.response
            req.open('GET', 'https://ipapi.co/org')
            req.send()
            break
        case 4:
            answer.org = req.response
            answer.time = Date.now()
    }
}
req.send()



if(!localStorage.getItem('side')) {
    document.querySelector('.button').addEventListener('click', () => {
        if(!pressed) {
            var text = document.querySelector('#enter-text')
            answer.answer = 'light'
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
            req.open('POST', 'https://api.jsonbin.io/v3/b')
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", "$2b$10$gkd084SaFX.oRNwp4wGwn.3hEcVDPkXxVk8DXB.CGIabUC8bA1tpC");
            req.setRequestHeader('X-Collection-Id', '618435b3dfffdf47a4905064')
            req.send(JSON.stringify(answer))
        }
    })
    
    document.querySelector('.button2').addEventListener('click', () => {
        if(!pressed) {
            var text = document.querySelector('#enter-text')
            text.style.color = '#DB232C'
            text.innerText = 'Вы ситх'
            answer.answer = 'dark'
            
            text.style.left = `calc(50% - (${text.clientWidth}px / 2))`
            text.style.animation = 'dark 1s 0s'
            pressed = true
            document.querySelector('#flex').style.opacity = '0%'
            document.querySelector('#flex').style.animation = 'id 0.5s 0s'
            localStorage.setItem('side', 'dark')
            req.open('POST', 'https://api.jsonbin.io/v3/b')
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", "$2b$10$gkd084SaFX.oRNwp4wGwn.3hEcVDPkXxVk8DXB.CGIabUC8bA1tpC");
            req.setRequestHeader('X-Collection-Id', '618435b3dfffdf47a4905064')
            req.send(JSON.stringify(answer))
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
