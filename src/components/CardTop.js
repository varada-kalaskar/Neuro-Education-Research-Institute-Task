import { Card, Col, Row } from "react-bootstrap";
import './CardTop.css';
const CardTop = ({title, classname}) => {
    return ( 
        <div className="classtop">
            <Card className={classname}>
                <Card.Body>
                    <Row>
                        <Col md={8}><p className="float-left" style={{fontSize:"1.8vh"}}>{title}</p></Col> <Col md={4}><i class="fas fa-ellipsis-h float-right"></i></Col>
                    </Row>
                    
                    
                        <i class="fas fa-graduation-cap float-left"></i> <h5 className="float-right">2</h5>
                    
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default CardTop;