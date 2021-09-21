import { Button, Card } from 'react-bootstrap';
import './RightCol.css'
const RightCol = () => {
    return ( 
        <div className="rightcol">
            <i class="far fa-comment float-left" style={{margin:'2vh', fontSize:'4vh',color:'grey'}}></i> <i class="fas fa-bell float-right"  style={{margin:'2vh',fontSize:'4vh',color:'grey'}}></i>
            <br></br>
            <img className="profile" src="assets/img/profile.jpeg" alt="Profile"></img>
            <p>Welcome Aayush!</p>
            <h5>Upcoming Class</h5>
            <Card className="classcard">
                <Card.Header>
                    
                    <h5><img src="assets/img/maple.jpg" style={{height:"5vh", marginRight:'1vh', borderRadius:'5vh'}}></img>French</h5>
                </Card.Header>
                <Card.Body>
                    <ul className="classinfo">
                        <li className="classinfolist"><i class="fas fa-calendar-alt"></i>  17th August 2021</li>
                        <li className="classinfolist"><i class="far fa-clock"></i>  11:00 AM</li>
                        <li className="classinfolist"><i class="fas fa-clock"></i>  60 Minutes</li>
                        <li className="classinfolist"><i class="fas fa-dollar-sign"></i>  $10</li>
                    </ul>
                    <Button>Join Class</Button>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default RightCol;