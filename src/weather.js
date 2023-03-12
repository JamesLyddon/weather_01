import axios from 'axios'

// fetch data from weather API by location and number of days
export async function getWeather(key, city, days) {
  try {
    const weather = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=no&alerts=no`
    )

    const data = weather.data
    // log data in a more readable format
    Object.entries(data).forEach((keyValPair) => {
      console.log(' ', ...keyValPair)
    })

    return data
  } catch (err) {
    console.log(err)
    alert(
      "Couldn't get weather data for that location, please check you search term"
    )
  }
}
