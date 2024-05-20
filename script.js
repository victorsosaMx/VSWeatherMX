async function getWeather() {
    const stateSelect = document.getElementById('stateSelect');
    const state = stateSelect.value;
    if (!state) return;

    const apiKey = 'INGRESA_AQUI_TU_TOKEN'; // Reemplaza con tu propia API key de OpenWeatherMap
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state},MX&appid=${apiKey}&units=metric&lang=es`);
    const data = await response.json();

    const weatherInfo = document.getElementById('weatherInfo');
    const stateName = document.getElementById('stateName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    if (response.ok) {
        stateName.textContent = state;
        temperature.textContent = `Temperatura: ${data.main.temp}°C`;
        description.textContent = `Descripción: ${data.weather[0].description}`;
        weatherInfo.style.display = 'block';
    } else {
        stateName.textContent = 'Error';
        temperature.textContent = '';
        description.textContent = 'No se pudo obtener el clima. Por favor, intenta nuevamente.';
        weatherInfo.style.display = 'block';
    }
}