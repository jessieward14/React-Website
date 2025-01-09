import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/blog" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/jokes" activeStyle>
                        Jokes
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;