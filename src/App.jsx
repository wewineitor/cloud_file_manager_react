import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/:path' element = {<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App