const form = document.getElementById('signin__form');
const signIn = document.getElementById('signin');
const welcomeMsg = document.getElementById('welcome');
const useridMsg = document.getElementById('user_id');
const btnLogout = document.getElementById('logout');

function successAuth(id) {
    useridMsg.textContent = id;
    signIn.classList.remove('signin_active');
    welcomeMsg.classList.add('welcome_active');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const response = JSON.parse(xhr.response);
            // проверяю удалась ли авторизация
            if (response.success === true) {
                localStorage.setItem('user', JSON.stringify(response.user_id))
                successAuth(response.user_id);
                
            } else {
                alert('Неверный логин/пароль');
            }
            
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
})

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('user');
    signIn.classList.add('signin_active');
    welcomeMsg.classList.remove('welcome_active');
});

const userIsAuthenticated = localStorage.getItem('user');
if (userIsAuthenticated) {
    successAuth(userIsAuthenticated);
}
