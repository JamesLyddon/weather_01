import { DataProvider } from './context/DataContext'
import SearchBar from './components/SearchBar'
import DisplayCard from './components/DisplayCard'
import MuiCard from './components/MuiCard'
import { Container, Typography } from '@mui/material'

function App() {
  const containerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  }

  return (
    <div className="App">
      <DataProvider>
        <Container sx={containerStyle}>
          <Typography variant="h3">Ever Weather</Typography>
          <SearchBar />
          <MuiCard index={0} />
        </Container>
      </DataProvider>
    </div>
  )
}

export default App
