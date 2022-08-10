import {Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import{ useEffect } from "react";
import { getUsers } from './Redux/userSlice'
import {useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    //loading will be false because of saga call
    dispatch(getUsers())
    // eslint-disable-next-line
  },[])
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
