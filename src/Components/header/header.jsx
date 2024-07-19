import { Link, NavLink, Route } from "react-router-dom"
import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from "./../img/mainLogo.png"
import { IoHome } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { MdMovieCreation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

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
                            <Nav.Link > <NavLink id="NavLink" to="/"> <IoHome /> Home </NavLink> </Nav.Link>
                            <Nav.Link ><NavLink to="/More_movies" id="NavLink" > <RiMovie2Fill /> Movies</NavLink>  </Nav.Link>
                            <Nav.Link > <NavLink id="NavLink" to="/"> <MdMovieCreation /> Series</NavLink> </Nav.Link>
                            <NavLink id="NavLink" to="/"> <FaSearch className="i" /> </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Header