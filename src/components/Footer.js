import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/nathan-wold-284335193/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/nathantwold" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="natew79@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Nathan T Wold</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
