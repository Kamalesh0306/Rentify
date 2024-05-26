
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddBooks from "./pages/AddBooks";
import Books from "./pages/Books";
import Home from './pages/Home';
import UpdateBooks from "./pages/UpdateBooks";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route  exact path="/" element={<Login/>}/>  
        <Route  exact path="/signup" element={<Signup/>}/>
        <Route  exact path="/home" element={<Home/>}/>
        <Route   path="/books" element={<Books/>}/>
        <Route   path="/addBooks" element={<AddBooks/>}/>
        <Route   path="/update/:id" element={<UpdateBooks/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
