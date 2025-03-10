document.getElementById("search").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; // Get a free API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById("weather-info").innerHTML = weatherInfo;
        })
        .catch(error => alert("City not found!"));
});
