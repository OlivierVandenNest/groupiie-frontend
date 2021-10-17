import { Navbar, Nav, Button } from "react-bootstrap";
import fullLogo from "../../assets/groupiie_white_logo.svg";

const NavigationBar = () => {
    return (
        <>
            <Navbar className="p-4">
                <Navbar.Brand className="" href="/">
                    <img src={fullLogo} alt="groupiie"></img>
                </Navbar.Brand>
                <Nav className="ml-auto nav-items">
                    <Nav.Link href="/home" className="mr-3">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/subscription" className="mr-3">
                        Subscription
                    </Nav.Link>
                    <Nav.Link href="/demo" className="mr-3">
                        Request Demo
                    </Nav.Link>
                    <Nav.Link href="/about" className="mr-3">
                        About Us
                    </Nav.Link>
                </Nav>
                <Nav className="nav-login">
                    <Nav.Link className="nav-login-item" href="login">
                        Login / Sign Up
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default NavigationBar;
