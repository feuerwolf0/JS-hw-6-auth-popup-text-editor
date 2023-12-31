const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    document.cookie = encodeURIComponent('modal_closed') + '=' + encodeURIComponent('1');
    modal.classList.remove('modal_active');
})

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    return pairs.find(item => item.startsWith(name + '='));
}

if (getCookie('modal_closed') && getCookie('modal_closed').split('=')[1] === '1') {
    modal.classList.remove('modal_active')
}