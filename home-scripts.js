// Función para alternar el modo
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Función para cargar el modo guardado
function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('modeSwitch').checked = true;
    }
}

// Función para mostrar el contenido de una evidencia de forma suave
function toggleContent(event) {
    const evidencia = event.currentTarget;
    const contenido = evidencia.querySelector('.contenido');

    // Cerrar todas las demás evidencias
    document.querySelectorAll('#evidencias .evidencia').forEach(e => {
        const otherContent = e.querySelector('.contenido');
        if (e !== evidencia) {
            otherContent.style.opacity = '0';
            otherContent.style.maxHeight = '0';
            setTimeout(() => {
                otherContent.style.display = 'none';
            }, 500); // Coincidir con la duración de la transición
        }
    });

    // Alternar el contenido de la evidencia actual
    if (contenido.style.display === 'block') {
        contenido.style.opacity = '0';
        contenido.style.maxHeight = '0';
        setTimeout(() => {
            contenido.style.display = 'none';
        }, 500); // Coincidir con la duración de la transición
    } else {
        contenido.style.display = 'block';
        setTimeout(() => {
            contenido.style.opacity = '1';
            contenido.style.maxHeight = '1000px'; // Ajustar según el contenido
        }, 10); // Pequeño retraso para permitir que la transición ocurra
    }
}

// Añadir eventos de click a las evidencias
document.querySelectorAll('#evidencias .evidencia').forEach(evidencia => {
    evidencia.addEventListener('click', toggleContent);
});

// Cargar el tema al cargar la página
window.onload = loadTheme;