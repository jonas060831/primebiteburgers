const burger_image = document.querySelector('#burger_image')

const aside = document.querySelector('aside')

const overlay = document.querySelector('#overlay')

const slideout_span = document.querySelector('#slideout_span')


const handle_burger_image_click = () => {

    if(aside.classList.contains('visible')) {
        hideAside()
    } else {
        showAside()
        overlay.style.display = 'block'
    }
}

const hideAside = () => {
    aside.classList.remove('visible')
}
const showAside = () => {
    aside.classList.add('visible')
}


const handle_hide_overlay = () => {
    overlay.style.display = 'none'
    aside.classList.remove('visible')
}

const handle_click_slideout_span = () => {
    handle_hide_overlay()
    hideAside()
}


//accept click event for image
burger_image.addEventListener('click', handle_burger_image_click)


//accept click event for overlay
overlay.addEventListener('click', handle_hide_overlay)

slideout_span.addEventListener('click', handle_click_slideout_span)