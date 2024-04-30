import{Container, Navbar} from 'react-bootstrap';
import { PropTypes } from 'prop-types';
function NavHeader (props) {
    return (
        <Navbar bg = 'primary' data-bs-theme='dark'>
        <Container fluid>
        <Navbar.Brand>HeapOverrun - Question #{props.questionNum}</Navbar.Brand>
        </Container> 
        </Navbar>
    )
}


/* Non strettamente necessario, mettere solo abbiamo dei warning sulle props riguardo ai propTypes*/
NavHeader.propTypes = {
    questionNum: PropTypes.number
}
export default NavHeader;