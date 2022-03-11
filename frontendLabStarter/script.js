let weather {
    apiKey: "580367fa248e47c1f995e96adbb4f40e",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=imperial&appid="
        +this.apiKey)
        .then((response) => response.json())
        .then(data => {console.log(data);
        this.displayWeather(data);})
    },
    displayWeather : function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
    }
};