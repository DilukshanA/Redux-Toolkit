// import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Person from './components/Person'
import AddPerson from './components/AddPerson'
import EditPerson from './components/EditPerson'
import PersonView from './components/PersonView'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Person />} />
        <Route path='/add-person' element={<AddPerson />} />
        <Route path='/edit-person/:id' element={<EditPerson />} />
        <Route path="/view-person/:id" element={<PersonView/>}/>
      </Routes>
    </Router>
  )
}

export default App
