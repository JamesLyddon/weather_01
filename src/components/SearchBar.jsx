import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { Box } from '@mui/material'

const SearchBar = () => {
  const { placesKey, autoComplete, setAutoComplete } = useContext(DataContext)

  const searchStyle = {
    minWidth: '300px',
  }

  return (
    <Box sx={searchStyle}>
      <GooglePlacesAutocomplete
        selectProps={{
          autoComplete,
          onChange: setAutoComplete,
          style: { color: 'red' },
        }}
        apiKey={placesKey}
      />
    </Box>
  )
}

export default SearchBar
