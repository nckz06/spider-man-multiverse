// --------------- CARD HOVER ANIMATION ----------------

// ÁREA DAS FUNÇÕES
function handleMouseEnter() {
    this.classList.add('card--hovered')
    document.body.id = `${this.id}--hovered`
}

function handleMouseLeave() {
    this.classList.remove('card--hovered')
    document.body.id = ''
}

function addEventListenersToCard() {
    const cardElements = document.getElementsByClassName('card')
    
    for(let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i]
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

// OPERAÇÃO PARA CARREGAR O JS DEPOIS DA PÁGINA
document.addEventListener('DOMContentLoaded', addEventListenersToCard, false)



// --------------- CAROUSEL ANIMATION 3D ----------------

// ÁREA DAS FUNÇÕES
function selectCarouselItem(selectedItemButton) {
    const selectedItem = selectedItemButton.id
    const carousel = document.querySelector('.cards-carousel')
    const transform = carousel.style.transform
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
    const rotateYDeg = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
    const controllerButtonActive = document.querySelector('.controller__button--active')

    carousel.style.transform = newTransform
    controllerButtonActive.classList.remove('controller__button--active')
    selectedItemButton.classList.add('controller__button--active')
}

// OPERAÇÃO PARA CARREGAR O JS NOS BOTÕES