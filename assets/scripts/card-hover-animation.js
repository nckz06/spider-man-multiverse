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

// OPERAÇÃO PARA CARREGAR O JS DEPOIS DE DA PÁGINA
document.addEventListener('DOMContentLoaded', addEventListenersToCard, false)