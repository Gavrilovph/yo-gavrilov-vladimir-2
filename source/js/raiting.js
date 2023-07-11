let raitingBaseTextColor = document.querySelector('.footer__text');
let raitingItems = document.querySelector('.footer__raiting-items');
let footerRaitingWrapper = document.querySelector('.footer__raiting');
let footerTextWrapper = document.querySelector('.footer__text-wrapper');

raitingItems.addEventListener('click', () => {
    raitingBaseTextColor.classList.add('footer__raiting-text')
})

footerRaitingWrapper.addEventListener('mouseover', () => {
    footerTextWrapper.classList.add('footer__colorHoverJs')
})

footerRaitingWrapper.addEventListener('mouseout', () => {
    footerTextWrapper.classList.remove('footer__colorHoverJs')
})
