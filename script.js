let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let temperature = document.getElementById("temperature");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");


searchButton.addEventListener('click',(e)=> {
      e.preventDefault();
      if(searchInput.value.length>0){
            getWeather(searchInput.value);
      }
});

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=668c962f5577e05bd4166493d270799e&units=metric&q='

const getWeather = async(city)=> {
      temperature.innerHTML = ""
      const resp = await fetch(URL+city);
      const respData = await resp.json();
      
      console.log(respData);
      
      loc.innerHTML = searchInput.value

      const p = document.createElement('p');
      p.innerHTML = respData.main.temp+'&#176C'

      const img = document.createElement('img');
      img.id = 'temp-icon';
      if(respData.weather[0].id>=200 && respData.weather[0].id < 300){

            img.src = "../icons/thunderstorm.png"
      }
      else if(respData.weather[0].id>=300 && respData.weather[0].id < 300){
            img.src = "../icons/drizzle.png"
      }
      else if(respData.weather[0].id>=500 && respData.weather[0].id < 600){
            
            img.src = "../icons/rain.png"
      }
      else if(respData.weather[0].id>=600 && respData.weather[0].id < 700){
            img.src="../icons/snow.png"
      }
      else if(respData.weather[0].id>=700 && respData.weather[0].id < 800){
            img.src="../icons/haze.png"
      }
      else if(respData.weather[0].id == 800){
            img.src="../icons/sun.png"
      }
      else if(respData.weather[0].id>800){
            img.src="../icons/clouds.png"
      }

      temperature.appendChild(p)
      temperature.appendChild(img)

      
      climate.innerText = respData.weather[0].main
      searchInput.value = '';
}