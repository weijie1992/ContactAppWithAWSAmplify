import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav (props) {
    const handleLogout = () => {
        props.logout()
    }
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>Contact app</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto">
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            {/* <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/Regnister">Register</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}
export default SiteNav
