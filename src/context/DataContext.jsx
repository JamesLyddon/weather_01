import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext({})

// a wrapper that will provide props to all components/children within it
export const DataProvider = ({ children }) => {
  // API keys
  const placesKey = 'AIzaSyDBz7lGkzSO5eFFN6tUwTfUfPfCIEYiE8I'
  const weatherKey = '18cef671257e478cb59131443231503'

  // search value using autocomplete
  const [autoComplete, setAutoComplete] = useState(null)
  // weather data
  const [weatherData, setWeatherData] = useState([])

  async function weather() {
    await axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${autoComplete.value.description}&days=7&aqi=no&alerts=no`
      )
      .then((res) => {
        const data = res.data
        setWeatherData((prev) => {
          const tmpArr = [data, ...prev]
          console.log(tmpArr)
          return tmpArr
        })
      })
  }

  // get weather when autocomplete not null
  useEffect(() => {
    autoComplete && weather()
  }, [autoComplete])

  return (
    <DataContext.Provider
      value={{
        placesKey,
        weatherData,
        autoComplete,
        setAutoComplete,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
