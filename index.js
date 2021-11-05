document.querySelector('#flex').style.opacity = '100%'

var pressed = false

req = new XMLHttpRequest()
let answer
var h = 0
req.open('GET', 'https://api.ipdata.co/?api-key=61fbc89854810ae06575b9adfeebee1060f64f2ad33811e4795bac31')
req.onload =() => {
    let resp = JSON.parse(req.response)
    if(!resp.record) {
        answer = {
            city: resp.city,
            region: resp.region,
            country: resp.country_name,
            is_tor: resp.threat.is_tor,
            is_proxy: resp.threat.is_proxy,
            is_anon: resp.threat.is_anonymous,
            // threats: resp.threat,
            ip: resp.ip,
            postal: resp.postal,
            asn: [resp.asn.asn, resp.asn.name, resp.asn.route]
        }
    }
}
req.send()

const send = () => {
    answer.time =  Date(Date.now())
    req.open('POST', 'https://api.jsonbin.io/v3/b',true)
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$gkd084SaFX.oRNwp4wGwn.3hEcVDPkXxVk8DXB.CGIabUC8bA1tpC");
    req.setRequestHeader('X-Collection-Id', '6185663ac4eaa14d584682c8')
    req.setRequestHeader('X-Bin-Name', answer.answer + ' ' + answer.city)
    req.send(JSON.stringify(answer))
}

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
            answer.answer = 'light'
            send()
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
            answer.answer = 'dark'
            send()
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
