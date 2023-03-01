let text = document.querySelector('.text')

let gt = document.querySelector('.sec')
gt.innerHTML = text.innerText

const start_prg = "<span class='done'>"

const end_prg = "</span>"

let a = 0

function bober(event) {
    if (text.innerText[a] == event.key) {
        a++
        
        let ushe = text.innerHTML.substring(0, a)

        let neushe = text.innerHTML.substring(a)

        gt.innerHTML = start_prg + ushe + end_prg + neushe
        
    }
}

document.addEventListener('keydown', bober)




