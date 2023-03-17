import { useContext } from 'react'
import DataContext from '../context/DataContext'

const DisplayCard = () => {
  const { weatherData } = useContext(DataContext)

  return (
    <>
      <h2>CardDisplay</h2>
      <p>name: {weatherData.length > 0 && weatherData[0].location.name}</p>
      <p>region: {weatherData.length > 0 && weatherData[0].location.region}</p>
      <p>country: {weatherData.length > 0 && weatherData[0].location.country}</p>
    </>
  )
}

export default DisplayCard
