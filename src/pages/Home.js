import {Row, Col, Button} from "antd";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
export default function Home(){

    const navigate = useNavigate()
const handleClick = () =>{
    console.log("Something Happened")
    navigate("/login")
}

    return(
        
<>
<Row style = {{background:"yellow"}}>
    <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
</Row>
        <Row>
            <Col xl={24}>
               <h1>Home Page</h1>
            </Col>
        </Row>
       <Row>
        <Col>
        <Button type="primary" onClick={handleClick}>trigger</Button></Col>
       </Row>
        
        </>
        
    )
}