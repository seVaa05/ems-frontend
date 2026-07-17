import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            /* http://localhost:3000 */
            <Route path='/' element={<ListEmployeeComponent/>}></Route>
            <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          </Routes>

        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
