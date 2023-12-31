const textarea = document.getElementById('editor');
const btnClear = document.getElementById('clear-textarea');

textarea.addEventListener('input', () => {
    localStorage.setItem('textData', textarea.value);
})

btnClear.addEventListener('click', () => {
    localStorage.removeItem('textData');
    textarea.value = '';
})

const oldData = localStorage.getItem('textData');
if (oldData) {
    textarea.textContent = oldData;
}