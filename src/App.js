import{Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Row, Col} from "antd";
import {Link} from "react-router-dom";

function App() {
  return (
    <div>

<Row style = {{background:"yellow"}}>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
</Row>

      <Routes>
        <Route path= "/login" element={<Login/>}/>
<Route path= "/home" element={<Home />}/>
</Routes>
    </div>
  );
}

export default App;
