import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="nathantwold.com" className="image avatar"><img src={avatar} alt="me" /></a>
                    <h2>
                        <strong>Nathan T Wold</strong>
                    </h2>
                    <br />
                    <h1>
                    Fullstack developer, <br />
                    UI/UX enthusiast, <br />
                    Traveler, <br />
                    Human.<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
