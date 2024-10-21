document.addEventListener('DOMContentLoaded', () => {
    // Agregar funcionalidad para el formulario de registro
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            alert(data.message); // Mensaje de éxito o error
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
        }
    });
});

// Función para obtener el consumo y los tokens del usuario
async function fetchTokenData() {
    const userId = document.getElementById('userId').value;

    if (!userId) {
        alert('Por favor, ingresa un ID de usuario.');
        return;
    }

    try {
        // Obtener datos de consumo del servidor
        const consumptionResponse = await fetch(`http://localhost:3000/consumption/${userId}`);
        const consumptionData = await consumptionResponse.json();
        document.getElementById('consumption').innerText = consumptionData.consumption;

        // Obtener datos de tokens del servidor
        const tokensResponse = await fetch(`http://localhost:3000/tokens/${userId}`);
        const tokensData = await tokensResponse.json();
        document.getElementById('tokens').innerText = tokensData.tokens;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
