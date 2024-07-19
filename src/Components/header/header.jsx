import { Link, NavLink, Route } from "react-router-dom"
import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from "./../img/mainLogo.png"

function Header() {
    return (
        <>
            <div className="" id="navbar" >
                <Navbar bg="" data-bs-theme="dark">
                    <Container>
                        <div className="">
                            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                            <img id="LogoImge" src={mainLogo} alt="" />
                        </div>
                        <Nav id="nav_items" className="-auto">
                            <Nav.Link > <NavLink id="NavLink" to="/">Home </NavLink> </Nav.Link>
                            <Nav.Link ><NavLink to="/More_movies"  id="NavLink" >Movies</NavLink>  </Nav.Link>
                            <Nav.Link > <NavLink id="NavLink" to="/">Series</NavLink> </Nav.Link>
                             <NavLink id="NavLink" to="/"><i class="fa-sharp fa-solid fa-magnifying-glass"></i> </NavLink>
                           
                            
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header