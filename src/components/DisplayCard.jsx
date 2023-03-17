import { useContext } from 'react'
import DataContext from '../context/DataContext'

const DisplayCard = () => {
  const { weatherData } = useContext(DataContext)

  return (
    <>
      <h2>CardDisplay</h2>
      {/* location */}
      <p>name: {weatherData.length > 0 && weatherData[0].location.name}</p>
      <p>region: {weatherData.length > 0 && weatherData[0].location.region}</p>
      <p>country: {weatherData.length > 0 && weatherData[0].location.country}</p>
      {/* weather */}
      <p>
        temp:{' '}
        {weatherData.length > 0 &&
          weatherData[0].current.temp_c + '\u00B0C' + ' / ' + weatherData[0].current.temp_f + '\u00B0F'}
      </p>
      <img src={weatherData.length > 0 && weatherData[0].current.condition.icon} />
    </>
  )
}

export default DisplayCard
