import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './components/User';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={User} />
          <Route path="/update/:id" Component={Updateuser} />
          <Route path="/adduser" Component={Adduser} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

