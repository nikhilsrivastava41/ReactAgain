import React from 'react';
import './Navbar.css';
function Navbar(){
    let v=false;
    return (
        <div>
            <nav>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact Us</li></a>
                </ul>
            </nav>
            <h1>Heading</h1>
        </div>
    )
}

export default Navbar;