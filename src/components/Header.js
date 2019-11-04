import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="me" /></a>
                    <h1><strong>Nathan T Wold</strong><br />
                    Fullstack developer,<br />
                    Traveler,<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
