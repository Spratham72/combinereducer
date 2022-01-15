
import './App.css';
import { Login } from './componenent/Login';
import {Input} from './componenent/todo';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Input/>}>
        </Route>
        <Route path='/login' element={<Login/>}>

        </Route>
      </Routes>
     
    
     </BrowserRouter>
    </div>
  );
}

export default App;
