import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    sendMessage = () => {
        console.log('sent!');
    }

    render() {
        const siteTitle = "Nathan T Wold"
        const siteDescription = "My professional site"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Fullstack Software and Web Developer <br />
                                with a background in Sales, Management, and Operations.</h2>
                        </header>
                        <p></p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Tools and Technologies</h2>
                        <h3>React.js, Node.js, Ruby, JQuery, HTML5, SCSS, Javascript, PostgreSQL, VS Code, Bootstrap, Material UI, Redux.js</h3>
                    </section>

                    <section id="three">
                        <h2>Recent Work</h2>
                        <div className="column">
                            <ul>
                                <div className="card">
                                    <h3>Project 1</h3>
                                    <h4>Details about project 1</h4>
                                    <button className="linkrepo">Check out the repo</button>
                                </div>
                                <div className="card">
                                    <h3>Project 1</h3>
                                    <h4>Details about project 1</h4>
                                    <button className="linkrepo">Check out the repo</button>
                                </div>
                                <div className="card">
                                    <h3>Project 1</h3>
                                    <h4>Details about project 1 fasdf adfa fasf asdf afasdfasdfasfdasdf asdf af asdf asdf asdf asf asf asdffd fasff asf asdf asdf asdf asf</h4>
                                    <button className="linkrepo">Check out the repo</button>
                                </div>
                                <div className="card">
                                    <h3>Project 1</h3>
                                    <h4>Details about project 1</h4>
                                    <button className="linkrepo">Check out the repo</button>
                                </div>
                            </ul>
                        </div>
                    </section>

                    <section id="four">
                        <h2>Contact</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                {/* <form method="post" action="#">
                                        <div className="row uniform 50%">
                                            <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                            <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                            <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        </div>
                                    </form> */}
                                <p>Send me a messsage.  I'd love to hear from you!</p>
                                <button onClick={() => console.log('click')} className="linkrepo">Email me!</button>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-linkedin"><span className="label">linkedin</span></h3>
                                        <a href="https://www.linkedin.com/in/nathan-wold-284335193/">linkedin.com/nathan-wold</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-github"><span className="label">github</span></h3>
                                        <a href="https://github.com/nathantwold">github.com/nathantwold</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">email</span></h3>
                                        <a href="natew79@gmail.com">natew79@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex