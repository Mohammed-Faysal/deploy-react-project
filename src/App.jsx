import './App.css'
import FormPage from './Components/FormPage'
import TablePage from './Components/TablePage';
import InfoContex from './Context/InfoContex';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <InfoContex>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormPage/>}/>
          <Route path='/table' element={<TablePage/>}/>
        </Routes>
      </BrowserRouter>
    </InfoContex>    
  )

}

export default App
