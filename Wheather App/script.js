async function getWheather() {
        let input = document.getElementById("city");
        let city = input.value.trim();
        if(city === "") {
            alert("Please enter a city name!");
            return;
        }
        await showWeather(city);
    }

    async function showWeather(city) {
        const url = `https://weather-api167.p.rapidapi.com/api/weather/forecast?place=${city}%2CGB&cnt=3&units=standard&type=three_hour&mode=json&lang=en`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4a3da38d4emsh69492fe65da8f7ep1b44ccjsn1fa2f3c1286c',
                'x-rapidapi-host': 'weather-api167.p.rapidapi.com',
                'Accept': 'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                console.log("Data not found");
                return;
            }
            const result = await response.json();
            getData(result);
        } catch (error) {
            console.error(error);
        }   
    }

    function getData(result) {
        let item = document.getElementById("container");
        item.innerHTML = `
            <h3>City: ${result.city.name}</h3>
            <h3>Temperature: ${result.list[0].main.temp} °K</h3>
            <h3>Weather: ${result.list[0].weather[0].description}</h3>
        `;
    }
    