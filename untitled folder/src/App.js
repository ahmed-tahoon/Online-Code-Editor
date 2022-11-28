import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Home from './Components/Home';
import Editor from './Components/Editor';

function App() {
  return (
    <div className="App">
      <NavBar />
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/editor' element={<Editor/>} />    
      </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
