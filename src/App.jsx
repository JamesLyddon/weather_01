import { useState, useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios';

function App() {

  const placesKey = 'AIzaSyDBz7lGkzSO5eFFN6tUwTfUfPfCIEYiE8I'
  const weatherKey = '18cef671257e478cb59131443231503'
  const forecastLength = 7

  const [location, setLocation] = useState(null)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [autoComplete, setAutoComplete] = useState(null)

  async function weather(city) {
    let weather = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${city}&days=${forecastLength}&aqi=no&alerts=no`
    )
    setLocation(weather.data.location) 
    setCurrent(weather.data.current)
    setForecast(weather.data.forecast)
  }

  useEffect(() => {
    if(!autoComplete) return
    weather(autoComplete.value.description)

  }, [autoComplete])

  useEffect(() => {
    if(!forecast) return
    console.log(forecast)
  }, [forecast])


  return (
    <div className="App">
      <h1>Weather App</h1>
      <GooglePlacesAutocomplete
        selectProps={{
          autoComplete,
          onChange: setAutoComplete,
          style: {color: 'red'}
        }}
        apiKey={placesKey}/>
      <div className="card">
        <p>
          location:
          {location && ` ${location.name}, ${location.region}, ${location.country}`}
        </p>
        <p>
          current:
          {current && ` ${current.temp_c}\u00B0C, ${current.temp_f}\u00B0F, ${current.humidity}% humiditiy`}
        </p>
      </div>
    </div>
  );
}

export default App
