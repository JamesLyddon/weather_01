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
