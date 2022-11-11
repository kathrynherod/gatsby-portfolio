import { Link } from 'gatsby';
import Image from 'react-bootstrap/Image'
import * as React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const FixedNavbar = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand='md' className='sticky-top'>
                <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
                    <Image
                        alt='Kathryn Herod logo'
                        className='navbar-brand__image'
                        src=""
                        title='Link to home page'
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand'}>
                    {/* <FontAwesomeIcon
                        color="white"
                        icon={faBars}
                    /> */}
                </Navbar.Toggle>

                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand'}
                    aria-labelledby='offcanvasNavbarLabel-expand'
                    collapseOnSelect={true}
                    backdrop={false}
                    placement="end"
                    scroll={true}
                >
                <Offcanvas.Header closeButton closeVariant="white"/>
                    <Offcanvas.Body>
                        <Nav className="auto-me">
                            <Nav.Link href="" target="_blank">
                                Resumé
                            </Nav.Link>
                            <Nav.Link as={Link} to="/#about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/work">
                                Work
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">
                                Portfolio
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </header>
    )
}
export default FixedNavbar;