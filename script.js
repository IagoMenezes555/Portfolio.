// Código JavaScript para esconder o loader após 5 segundos
window.onload = function () {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.display = 'none'; // Esconde o loader após 5 segundos
    }, 3000); // 5000 ms = 5 segundos
};
