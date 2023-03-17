import { useState, useEffect, useContext } from 'react'
import { DataProvider } from './context/DataContext'
import SearchBar from './components/SearchBar'
import DisplayCard from './components/DisplayCard'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <SearchBar />
        <DisplayCard />
      </DataProvider>
    </div>
  )
}

export default App

{
  /* <div className="card">
<p>
  location:
  {location && ` ${location.name}, ${location.region}, ${location.country}`}
</p>
<p>
  current:
  {current && ` ${current.temp_c}\u00B0C, ${current.temp_f}\u00B0F, ${current.humidity}% humiditiy`}
</p>
</div> */
}
