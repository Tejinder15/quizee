import './App.css';
import Result from './Pages/Result/Result';
import Rules from './Pages/Rules/Rules';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './Routes/private-route';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path='/rules/:category' element={<Rules/>}/>
          <Route path='/quiz/:category' element={<Quiz/>}/>
          <Route path='/result/' element={<Result/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
