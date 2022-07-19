import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
