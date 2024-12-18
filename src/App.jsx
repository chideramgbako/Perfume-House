import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//new
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
