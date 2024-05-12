async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here

    document.querySelector('#weatherWidget').style.display = 'none'

    let citySelect = document.querySelector('#citySelect')
    citySelect.addEventListener('change', async event => {
      
      document.querySelector('.info').textContent = 'Fetching weather data...';

    let weatherAPI = 'http://localhost:3003/api/weather'
    let city = event.target.value
    let selectedCityURL = `http://localhost:3003/api/weather?city=${city}` 

    try {
    const res = await axios.get(selectedCityURL);
    document.querySelector('#weatherWidget').style.display = 'block'
    
    console.log(res.data);

    let weatherDescription = res.data.current.weather_description;
    let currentTemp = res.data.current.apparent_temperature;
    let humidity = res.data.current.humidity;
    let windSpeed = res.data.current.wind_speed;
    let maxTemp = res.data.current.temperature_max;
    let minTemp = res.data.current.temperature_min
    let precipProb = res.data.current.precipitation_probability


    let cityName = res.data.location.city;
    let cityCountry = res.data.location.country;

    let day0 = res.data.forecast.daily[0].Date;
    let day0WeatherDescription = res.data.forecast.daily[0].weather_description;
    let day0TempMax = res.data.forecast.daily[0].temperature_max;
    let day0TempMin = res.data.forecast.daily[0].temperature_min;
    let day0PrecipProb = res.data.forecast.daily[0].precipitation_probability;

    let day1 = res.data.forecast.daily[1].Date;
    let day1WeatherDescription = res.data.forecast.daily[1].weather_description;
    let day1TempMax = res.data.forecast.daily[1].temperature_max;
    let day1TempMin = res.data.forecast.daily[1].temperature_min;
    let day1PrecipProb = res.data.forecast.daily[1].precipitation_probability;

    let day2 = res.data.forecast.daily[2].Date;
    let day2WeatherDescription = res.data.forecast.daily[2].weather_description;
    let day2TempMax = res.data.forecast.daily[2].temperature_max;
    let day2TempMin = res.data.forecast.daily[2].temperature_min;
    let day2PrecipProb = res.data.forecast.daily[2].precipitation_probability;

      document.querySelector('#apparentTemp div:nth-child(2)').textContent = `${currentTemp}°`
      document.querySelector('#todayDescription').textContent = descriptions.find(a => a[0] === weatherDescription)[1]
      document.querySelector('#todayStats div:nth-child(1)').textContent = `${minTemp}°/${maxTemp}°`
      document.querySelector('#todayStats div:nth-child(2)').textContent = `Precipitation: ${precipProb * 100}%`
      document.querySelector('#todayStats div:nth-child(3)').textContent = `Humidity: ${humidity}%`
      document.querySelector('#todayStats div:nth-child(4)').textContent = `Wind: ${windSpeed}m/s`

      let today = new Date()
      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate()+1)
      let nextDay = new Date()
      nextDay.setDate(nextDay.getDate()+2)
      let finalDay = new Date()
      finalDay.setDate(finalDay.getDate()+3)


      let todayName = today.toLocaleDateString('en-US', { weekday: 'long' })
      let tomorrowName = tomorrow.toLocaleDateString('en-US', { weekday: 'long' })
      let nextDayName = nextDay.toLocaleDateString('en-US', { weekday: 'long' })
      let finalDayName = finalDay.toLocaleDateString('en-US', { weekday: 'long' })


      //garbage code
      tomorrowName = 'Thursday'
      nextDayName = 'Friday'
      finalDayName = 'Saturday'
      //garbage code

      document.querySelector('.next-day div:nth-child(1)').textContent = tomorrowName

      let nextDayDivs = document.querySelectorAll('.next-day')
      nextDayDivs[0].querySelector('div:nth-child(1)').textContent = tomorrowName
      nextDayDivs[0].querySelector('div:nth-child(2)').textContent = descriptions.find(a => a[0] === day0WeatherDescription)[1]
      nextDayDivs[0].querySelector('div:nth-child(3)').textContent = `${day0TempMin}°/${day0TempMax}°`
      nextDayDivs[0].querySelector('div:nth-child(4)').textContent = `Precipitation: ${day0PrecipProb * 100}%`


      nextDayDivs[1].querySelector('div:nth-child(1)').textContent = nextDayName
      nextDayDivs[1].querySelector('div:nth-child(2)').textContent = descriptions.find(a => a[0] === day1WeatherDescription)[1]
      nextDayDivs[1].querySelector('div:nth-child(3)').textContent = `${day1TempMin}°/${day1TempMax}°`
      nextDayDivs[1].querySelector('div:nth-child(4)').textContent = `Precipitation: ${day1PrecipProb * 100}%`

      nextDayDivs[2].querySelector('div:nth-child(1)').textContent = finalDayName
      nextDayDivs[2].querySelector('div:nth-child(2)').textContent = descriptions.find(a => a[0] === day2WeatherDescription)[1]
      nextDayDivs[2].querySelector('div:nth-child(3)').textContent = `${day2TempMin}°/${day2TempMax}°`
      nextDayDivs[2].querySelector('div:nth-child(4)').textContent = `Precipitation: ${day2PrecipProb * 100}%`


      document.querySelector('#location div:nth-child(1)').textContent = event.target.value
      document.querySelector('#location div:nth-child(2)').textContent = cityCountry

      document.querySelector('.info').textContent = ''

  } catch (err) {
    console.log(err);
  }
});
    
}
  // 👆 WORK WORK ABOVE THIS LINE 👆
  



// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
