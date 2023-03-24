import { useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const MuiCard = ({ index }) => {
  const { weatherData } = useContext(DataContext)

  const region = weatherData[index]?.location.region
  const country = weatherData[index]?.location.country
  const placeName = weatherData[index]?.location.name
  const currentTemp = weatherData[index]?.current
  const icon = weatherData[index]?.current.condition.icon
  const timeChecked = weatherData[index]?.current.last_updated.slice(-5)
  const hourChecked = weatherData[index]?.current.last_updated.slice(-5, -3)
  const dateTimeChecked = weatherData[index]?.current.last_updated
  const dateChecked = weatherData[index]?.current.last_updated.slice(0, 10)

  console.log(dateChecked)

  // write logic to have it go to next day if time index is greater than 23?
  // change this into an array and map it out?
  // make a scroll bar for full day instead, starting at current hour in the middle?
  const plusOneTemp = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked]
  const plusTwoTemp = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 1]
  const plusThreeTemp = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 2]
  const plusFourTemp = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 3]

  // forecast icons
  const plusOneIcon = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked].condition.icon
  const plusTwoIcon = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 1].condition.icon
  const plusThreeIcon = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 2].condition.icon
  const plusFourIcon = weatherData[index]?.forecast?.forecastday[0]?.hour[+hourChecked + 3].condition.icon

  console.log(hourChecked)

  const [siUnits, setSiUnits] = useState(true)

  const faintText = {
    color: 'rgba(0,0,0,0.2)',
    fontSize: '10px',
  }

  const paperStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    height: '400px',
    borderRadius: '20px',
  }

  const forecastItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '40px',
    fontSize: '15px',
  }

  const forecastContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    marginTop: '20px',
  }

  return (
    <>
      {weatherData.length > 0 && (
        <Paper elevation={2} sx={paperStyle}>
          {/* Placename */}
          <Typography variant="h4">{placeName}</Typography>
          {/* Area, Country, date checked*/}
          <Typography variant="p" style={faintText}>
            {region}, {country}
          </Typography>

          {/* Current Weather Icon */}
          <img src={icon} />
          {/* Current Temp */}
          <Typography variant="h4" onClick={() => setSiUnits(!siUnits)}>
            {siUnits ? currentTemp.temp_c + '\u00B0C' : currentTemp.temp_f + '\u00B0F'}
          </Typography>

          {/* DateTime Checked*/}
          <Typography variant="caption" style={faintText}>
            as of {dateTimeChecked}
          </Typography>
          <Box style={forecastContainerStyle}>
            {/* plus one weather */}
            <Box style={forecastItemStyle}>
              <img src={plusOneIcon} />
              <Typography variant="p" onClick={() => setSiUnits(!siUnits)}>
                {siUnits ? plusOneTemp.temp_c + '\u00B0C' : plusOneTemp.temp_f + '\u00B0F'}
              </Typography>
              {/* time checked */}
              <Typography variant="caption" style={faintText}>
                ({+hourChecked + 1}:00)
              </Typography>
            </Box>
            {/* plus two weather */}
            <Box style={forecastItemStyle}>
              <img src={plusTwoIcon} />
              <Typography variant="p" onClick={() => setSiUnits(!siUnits)}>
                {siUnits ? plusTwoTemp.temp_c + '\u00B0C' : plusTwoTemp.temp_f + '\u00B0F'}
              </Typography>
              {/* time checked */}
              <Typography variant="caption" style={faintText}>
                ({+hourChecked + 2}:00)
              </Typography>
            </Box>
            {/* plus three weather */}
            <Box style={forecastItemStyle}>
              <img src={plusThreeIcon} />
              <Typography variant="p" onClick={() => setSiUnits(!siUnits)}>
                {siUnits ? plusThreeTemp.temp_c + '\u00B0C' : plusThreeTemp.temp_f + '\u00B0F'}
              </Typography>
              {/* time checked */}
              <Typography variant="caption" style={faintText}>
                ({+hourChecked + 3}:00)
              </Typography>
            </Box>
            {/* plus four weather */}
            <Box style={forecastItemStyle}>
              <img src={plusFourIcon} />
              <Typography variant="p" onClick={() => setSiUnits(!siUnits)}>
                {siUnits ? plusFourTemp.temp_c + '\u00B0C' : plusFourTemp.temp_f + '\u00B0F'}
              </Typography>
              {/* time checked */}
              <Typography variant="caption" style={faintText}>
                ({+hourChecked + 4}:00)
              </Typography>
            </Box>
          </Box>
        </Paper>
      )}
    </>
  )
}

export default MuiCard
