import './App.css'
import { Main } from './pages/Main';
import { PageProyectos } from './pages/PageProyectos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<PageProyectos/>}/>       
      </Routes>
    </BrowserRouter>
  )
}

export default App
