import './App.css';
import  Home from './Components/Home/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { ContextProvider } from './refContext';

function App() {
  return (
    <BrowserRouter>
    <ContextProvider>

      <Routes>
        <Route path='/othmane-elkantaoui' element={<Home/>}/>
      </Routes>
    
    </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
