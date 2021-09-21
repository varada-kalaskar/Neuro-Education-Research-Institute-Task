import HorzNav from './HorzNav';
import { Button, Card, Col, Row } from 'react-bootstrap';
import RightCol from './RightCol';
import CardTop from './CardTop';
import './FinalPage.css';
import LineChart from './LineChart';
const FinalPage = () => {
    return ( 
        <div className="finalpage">
            <Row style={{marginTop:"0vh"}}> 
  <Col md={2}>
    <HorzNav/>
  </Col>
  <Col md={7}>
    <Row>
      <Col md={3}>
        <CardTop title={"Courses"} classname={"cardtopstyle"}/>
      </Col>
      <Col md={3}>
        <CardTop title={"Class Taken"} classname={"cardtopstyleactive"}/>
      </Col>
      <Col md={3}>
        <CardTop title={"Varified Courses"} classname={"cardtopstyle"}/>
      </Col>
      <Col md={3}>
        <CardTop title={"Non-Varified Courses"} classname={"cardtopstyle"}/>
      </Col>
    </Row>
    <Row style={{marginTop:"4vh"}}>
      <Col md={4}>
        <Card className="cardmid">
          <Card.Header className="cardmidhead" style={{borderBottom:'0.3vh solid rgb(51, 156, 197)'}}>
            <h6>My Earnings</h6>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} style={{borderRight:'0.3vh solid rgb(51, 156, 197)'}}>
                <h6 style={{fontSize:"1.9vh"}}>Today Earning</h6>
                <h6>$1,000</h6>
              </Col>
              <Col md={6} style={{borderLeft:'0.3vh solid rgb(51, 156, 197)'}}>
                <h6 style={{fontSize:"1.9vh"}}>Pending</h6>
                <h6>$60</h6>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer style={{backgroundColor:'palevioletred'}}>
            <Button className="withdraw">Withdraw</Button>
          </Card.Footer>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardmid">
          <Card.Header className="cardmidhead">
            <h6>Session Overview</h6>
          </Card.Header>
          <Card.Body style={{backgroundColor:'white'}}>
            <Row>
              <Col md={4}>
                <h6 style={{fontSize:"1.4vh"}}>Scheduled</h6>
              </Col>
              <Col md={4}>
                <h6 style={{fontSize:"1.3vh"}}>UpComing</h6>
              </Col>
              <Col md={4}>
                <h6 style={{fontSize:"1.4vh"}}>Cancled</h6>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <h6 style={{fontSize:"2vh"}}>1</h6>
              </Col>
              <Col md={4}>
                <h6 style={{fontSize:"2vh"}}>2</h6>
              </Col>
              <Col md={4}>
                <h6 style={{fontSize:"2vh"}}>0</h6>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="cardmid">
          <Card.Header className="cardmidhead">
            <h6>My Students</h6>
          </Card.Header>
          <Card.Body style={{backgroundColor:'white'}}>
            <img src="assets/img/profile.jpeg" style={{height:"5.5vh"}} className="float-left"></img>
          </Card.Body>
          <Card.Footer>
            <h6>See all students</h6>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    <Row style={{marginTop:"2vh"}}>
        <Col md={12}>
            <Card style={{borderRadius:'2vh'}}>
                <Card.Body style={{textAlign:"left"}}>
                    <Row>
                        <Button className="chartbuttonactive">Courses Impression</Button> <Button className="chartbutton">Per Session Earning</Button> <Button className="chartbutton">Top Student</Button> <div className="week">Week <i class="fas fa-angle-down"></i></div>
                    </Row>
                    <Row>
                      <LineChart/>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  </Col>
  <Col md={3} className="classcolumn">
    <RightCol/>
  </Col>
</Row>
        </div>
     );
}
 
export default FinalPage;