var card = 0
var rotateYDeg = 0

// --------------- CARD HOVER ANIMATION ----------------

// ÁREA DAS FUNÇÕES
function handleMouseEnter() {
    if (this.classList.contains('center')) {
        this.classList.add('card--hovered')
        document.body.id = `${this.id}--hovered`
    }
}

function handleMouseLeave() {
    if (this.classList.contains('center')) {
        this.classList.remove('card--hovered')
        document.body.id = ''
    }
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
    const activedButton = document.querySelector('.controller__button--active')
    const itemCarouselCenter = document.querySelector('.center')

    if (selectedItem == 1 || selectedItem == 2 || selectedItem == 3) {
        card = Number(selectedItem) - 1
        rotateYDeg = -120 * (card)
        
        // PROCESSO DE ESTILIZAÇÃO DOS BOTÕES DE NAVEGAÇÃO    
        activedButton.classList.remove('controller__button--active')
        itemCarouselCenter.classList.remove('center')
        selectedItemButton.classList.add('controller__button--active')
        document.getElementById(`spider-man-0${selectedItem}`).classList.add('center')
    } else if (selectedItem == 'next') {
        if (card == 2) {
            card = 0
        } else {
            card += 1;
        }
        
        rotateYDeg = -120 * (card)
        
        // PROCESSO DE ESTILIZAÇÃO DOS BOTÕES DE NAVEGAÇÃO    
        activedButton.classList.remove('controller__button--active')
        itemCarouselCenter.classList.remove('center')
        document.getElementById(card + 1).classList.add('controller__button--active')
        document.getElementById(`spider-man-0${card + 1}`).classList.add('center')
    } else if (selectedItem == 'prev') {
        if (card == 0) {
            card = 2
        } else {
            card -= 1
        }
        
        rotateYDeg = -120 * (card)
        
        // PROCESSO DE ESTILIZAÇÃO DOS BOTÕES DE NAVEGAÇÃO
        activedButton.classList.remove('controller__button--active')
        itemCarouselCenter.classList.remove('center')
        document.getElementById(card + 1).classList.add('controller__button--active')
        document.getElementById(`spider-man-0${card + 1}`).classList.add('center')
    }
    

    // TROCA DOS CARDS
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
    
    carousel.style.transform = newTransform
}