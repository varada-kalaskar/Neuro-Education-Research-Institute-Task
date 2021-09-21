import { Row,Col } from 'react-bootstrap';
import './HorzNav.css'
const HorzNav = () => {
    return ( 
        <div className="horznav">
            <ul class="horz">
                <li class="headingitem" style={{textAlign:'center'}}><i class="far fa-comments"></i> NeuroLingua</li>
                <li class="hitemactive"><a href="#"><i class="fas fa-tachometer-alt"></i> Dashboard</a></li>
                <li class="hitem"><a href="#"><i class="fas fa-graduation-cap"></i> Courses</a></li>
                <li class="hitem"><a href="#"><i class="far fa-calendar-alt"></i> Availability  </a></li>
                <li class="hitem"><a href="#"><i class="fas fa-user-graduate"></i> Students</a></li>
                <li class="hitem"><a href="#"><i class="far fa-newspaper"></i> Blog </a></li>
                <li class="hitem"><a href="#"><i class="fas fa-ticket-alt"></i> Coupons</a></li>
                <li class="hitem"><a href="#"><i class="fas fa-dollar-sign"></i> Earnings </a></li>
                <li class="hitem"><a href="#"><i class="fas fa-cog"></i> Settings </a></li>
                <li class="logout"><a href="#"><i class="fas fa-sign-out-alt"></i> Logout </a></li>
            </ul>
        </div>
     );
}
 
export default HorzNav;