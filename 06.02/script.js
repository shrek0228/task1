function bobr () {
    let bibr = document.querySelector('.button-readmore')
    let text_element = document.querySelector('.text-content')
    let text_short = document.querySelector('.short-content')

    let short_str = text_element.innerText.substring(0, 20)+"..."
    if (text_element.style.display=='none') {
        text_element.style.display = 'block'
        text_short.style.display = 'none'
        bibr.innerHTML = 'Read Less'
    }
    else {
        // if needed, create short element
        if (text_short == null) {
            text_short = document.createElement('span')
            text_short.innerHTML = short_str
            text_short.className = 'short-content'
            text_element.parentNode.insertBefore(text_short, text_element)
        }
        text_element.style.display = 'none'
        text_short.style.display = 'block'
        bibr.innerHTML = 'Read More'
    }

}