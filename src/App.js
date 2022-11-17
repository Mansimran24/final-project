import{Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";



function App() {
  return (
    <div>
<h1> We can check both pages when we will write login or home after localhost </h1>


      <Routes>
        <Route path= "/login" element={<Login/>}/>
<Route path= "/home" element={<Home />}/>
</Routes>
    </div>
  );
}

export default App;
