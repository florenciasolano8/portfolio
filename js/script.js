document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el preloader
    document.querySelector('.preloader').style.display = 'block';
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#content').style.visibility = 'hidden';
    document.querySelector('#start-container').style.display = 'none';

    // Esperar 3 segundos antes de ocultar el preloader y mostrar el botón de "Empezar"
    setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('#start-container').style.display = 'flex'; // Asegúrate de usar 'flex'
    }, 3000); // 3000 milisegundos = 3 segundos

    // Al hacer clic en el botón de "Start"
    document.querySelector('#start-button').addEventListener('click', function() {
        document.querySelector('#start-container').style.display = 'none';
        document.querySelector('#content').style.display = 'block';
        document.querySelector('#content').style.visibility = 'visible';
    });
});