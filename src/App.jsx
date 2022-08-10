import './App.css';
import  Home from './Components/Home/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
