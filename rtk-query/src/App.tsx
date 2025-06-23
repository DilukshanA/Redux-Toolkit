// import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Person from './components/Person'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Person />} />
      </Routes>
    </Router>
  )
}

export default App
