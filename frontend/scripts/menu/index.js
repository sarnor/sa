const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('pointerup', (event) => {
    event.currentTarget.classList.contains('open')
        ? event.currentTarget.classList.remove('open')
        : event.currentTarget.classList.add('open')
})
export default "*";