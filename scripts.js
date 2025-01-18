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

// Función para mostrar el contenido de un parcial de forma suave
function toggleContent(event) {
    const parcial = event.currentTarget;
    const contenido = parcial.querySelector('.contenido');

    // Cerrar todos los demás parciales
    document.querySelectorAll('#evidencias .parcial').forEach(p => {
        const otherContent = p.querySelector('.contenido');
        if (p !== parcial) {
            otherContent.style.opacity = '0';
            otherContent.style.maxHeight = '0';
            setTimeout(() => {
                otherContent.style.display = 'none';
            }, 500); // Coincidir con la duración de la transición
        }
    });

    // Alternar el contenido del parcial actual
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

// Añadir eventos de click a los parciales
document.querySelectorAll('#evidencias .parcial').forEach(parcial => {
    parcial.addEventListener('click', toggleContent);
});

// Cargar el tema al cargar la página
window.onload = loadTheme;