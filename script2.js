document.getElementById('mobile-menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Funcionalidad para buscar comercios cercanos
document.getElementById('location-button').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Aquí deberías implementar la lógica para buscar los comercios usando la latitud y longitud
            document.getElementById('results').innerHTML = `Buscando comercios cercanos a tu ubicación: ${lat}, ${lon}...`;
        });
    } else {
        alert('Geolocalización no es soportada por este navegador.');
    }
});
