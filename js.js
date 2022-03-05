/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
button.style.backgroundColor = 'turquoise';

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('А чего ты ожидал ?')

})


