import logo from './logo.svg';
import Header from './components/homepage/Header';
import Home from './components/homepage/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/authentication/Login';
import Sign_Up from './components/authentication/Login/sign';
import Services from './components/services';
import Prices from './components/prices';
import Booking from './components/booking';
import Admin from './components/admin';
import { Provider } from 'react-redux';
import store from './hocs/store';

const App = () => {
  return(

    <Provider store={store}>
      <Router>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Sign_Up/>}/>
        <Route path='/admin' element={<Admin/>}/>
      {/*  <Route path='/booking' element={<Booking/>}/>*/} 
       
      </Routes>
    </Router>
    </Provider>

     
  
  
   
  );

}

export default App;
