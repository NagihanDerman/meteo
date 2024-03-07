const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")
// console.log(cityInput , btn)

// olay izleyicisi
btn.addEventListener("click" , () => {
//  console.log("tiklandi")

//  console.dir(cityInput)

 const cityName = cityInput.value

//  console.log(cityName)

getData(cityName)

})

function getData(name) {
    // console.log(name)
    const API = "9f67e0c32116c99240641e02dbda4fc7";
    const baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=fr`;
    
    // console.log(baseURL)  
   
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const {name, sys:{country}, main: {temp, feels_like, humidity}, weather: [{description}], wind:{speed}} = data;
        console.log(name, country, temp, feels_like, humidity, description, speed)
      
        // verileri js'e çekme
        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")
        console.log(city, temperature, hum, wind, weatherDesc, feeling)

        // js'e çekilen elemanları yerine yerleştirme
        city.textContent = `${name}, ${country}`;
        temperature.innerText = `${temp.toFixed(0)}°`;
        hum.textContent = `Humidité: %${humidity}`;
        wind.innerHTML = `Vent: ${speed}km/s`;
        weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
        feeling.textContent = `Température Ressentie : ${feels_like}`
    })
    .catch(error => console.log(error))
 
    // inputun için boşaltır
    cityInput.value = "";

    // inputa odaklanır
    cityInput.focus();


}