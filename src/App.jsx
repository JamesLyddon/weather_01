import { useState } from 'react'
import './App.css'

import { getWeather } from './weather'

function App() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState()
  const [current, setCurrent] = useState()
  const [forecast, setForecast] = useState()

  const handleSubmit = async (city) => {
    const newData = await getWeather('0e2a97c3fd57455c821120504231203', city, 7)
    const { location, current, forecast } = await newData
    setLocation(location)
    setCurrent(current)
    setForecast(forecast)
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="card">
        <p>
          <input
            id="search-input"
            type="text"
            value={search}
            placeholder="Enter a City..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </p>
        <p>
          <button onClick={() => handleSubmit(search)}>Submit</button>
        </p>
        <p>search: {search}</p>
        <p>
          location:
          {location &&
            ` ${location.name}, ${location.region}, ${location.country}`}
        </p>
        <p>
          current:
          {current &&
            ` ${current.temp_c}\u00B0C, ${current.temp_f}\u00B0F, ${current.humidity}% humiditiy`}
        </p>
      </div>
    </div>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
