import { BrowserRouter , Routes, Route} from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Add from "./Components/Add";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import Logout from "./Components/Logout";
import Footer from "./Components/Footer";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/delete" element={<Delete/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/signup" element={<SignUp/>}/>          

        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
