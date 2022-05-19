import './App.css';
import Result from './Pages/Result/Result';
import Rules from './Pages/Rules/Rules';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
