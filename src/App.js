import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'

function App() {
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
      
    }
    return (
      <div className="App">
        < Nav onSearch={onSearch} cities = {cities}/>
        <Cards cities={cities} onClose= {onClose}/>
      </div>
    );
}
export default App;