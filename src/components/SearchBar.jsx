import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const SearchBar = () => {
  const { placesKey, autoComplete, setAutoComplete } = useContext(DataContext)

  return (
    <>
      <h2>SearchBar</h2>
      <GooglePlacesAutocomplete
        selectProps={{
          autoComplete,
          onChange: setAutoComplete,
          style: { color: 'red' },
        }}
        apiKey={placesKey}
      />
    </>
  )
}

export default SearchBar
