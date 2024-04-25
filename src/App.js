import './App.css';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp'
import Landing from './Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
