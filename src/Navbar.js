import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component{
    render(){
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
}

export default Navbar;