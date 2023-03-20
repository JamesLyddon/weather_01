import { useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const MuiCard = ({ index }) => {
  const { weatherData } = useContext(DataContext)

  const region = weatherData[index]?.location.region
  const country = weatherData[index]?.location.country
  const placeName = weatherData[index]?.location.name
  const temp_c = weatherData[index]?.current.temp_c
  const temp_f = weatherData[index]?.current.temp_f
  const icon = weatherData[index]?.current.condition.icon
  const forecast = weatherData[index]?.forecast

  console.log(weatherData)

  const [siUnits, setSiUnits] = useState(true)

  const paperStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '400px',
    borderRadius: '20px',
  }

  return (
    <>
      {weatherData.length > 0 && (
        <Paper elevation={2} sx={paperStyle}>
          {/* Placename */}
          <Typography variant="h4">{placeName}</Typography>
          {/* Area */}
          <Typography variant="p">{region}</Typography>
          {/* Country */}
          <Typography variant="p">{country}</Typography>
          {/* Current Weather Icon */}
          <img src={icon} />
          {/* Current Temp */}
          <Typography variant="h4" onClick={() => setSiUnits(!siUnits)}>
            {siUnits ? temp_c + '\u00B0C' : temp_f + '\u00B0F'}
          </Typography>
          <Box>
            {/* TODO - ADD FORECAST DATA HERE */}
            <Typography></Typography>
          </Box>
        </Paper>
      )}
    </>
  )
}

export default MuiCard
