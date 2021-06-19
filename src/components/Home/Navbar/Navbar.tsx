import "../../../styles/components/Home/Navbar/Navbar.css";
import logo from "../../../assets/images/icon.png";
import { FormGroup, Input, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <div className="navbar-container">
            <span className="logo">
                <img alt="" src={logo} />
            </span>
            <Nav>
                <NavItem>
                    <NavLink href="#" className="nav-link">List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-link">Board</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-link">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-link">Messages</NavLink>
                </NavItem>
            </Nav>
            <FormGroup style={{ margin: "0px 0 0px 50px" }}>
                <Input type="text" name="search" placeholder="Search" className="search"/>
            </FormGroup>
            <span className="profile-pic">
                <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2018%2F12%2FThe-Office-Michael-Scott-cringe-square.jpg&f=1&nofb=1" />
            </span>
        </div>
    );
}

export default Navbar;
