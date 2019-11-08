import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

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
                            <h2>Full Stack Software and Web Developer <br />
                                with a background in Sales, Management, and Operations.</h2>
                        </header>
                        <p></p>
                    </section>

                    <section id="two">
                        <h2>Tools and Technologies</h2>
                        <h3>React.js, Node.js, Ruby, JQuery, HTML 5, CSS 3, Javascript, PostgreSQL, VS Code, Bootstrap, Material UI, Redux.js</h3>
                    </section>

                    <section id="three">
                        <h2>Recent Work</h2>
                        <div className="column">
                            <ul>
                                <div className="card">
                                    <h3>Ships in the Night</h3>
                                    <h4>
                                        A mobile-first, full stack web application designed for households to share in task and chore management and delegation.
                                        Technologies used include React, Redux, Redux-Saga, Node, Material UI, Nodemailer, and PostgreSQL.
                                    </h4>
                                    <a href="https://github.com/nathantwold/ships-in-the-night" target="_blank" rel="noopener noreferrer">
                                        Check it out on Github!
                                    </a>
                                    <br />
                                    <a href="https://ships-in-the-night.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                        See the live demo on Heroku!
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>Movie Sagas Weekend</h3>
                                    <h4>
                                        A full CRUD, Netflix style desktop application. You can scroll through a movie selection stored in a database
                                        and select a movie to see additional details such as genres.
                                    </h4>
                                    <a href="https://github.com/nathantwold/movie-sagas-weekend" target="_blank" rel="noopener noreferrer">
                                        Check it out on Github!
                                    </a>
                                    <br />
                                    <a href="https://nates-movie-sagas-weekend.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                                        See the live demo on Heroku!
                                    </a>
                                </div>
                                <div className="card">
                                    <h3>Prime Student Feedback App</h3>
                                    <h4>
                                        A mobile-first feedback application that displays the usage of hash routing and client side database requests.
                                        Also has an admin view at '/admin' where you can view feedback history and delete or flag items for review.
                                    </h4>
                                    <a href="https://github.com/nathantwold/redux-feedback-loop" target="_blank" rel="noopener noreferrer">
                                        Check it out on Github!
                                    </a>
                                    <br />
                                    <a href="https://nates-redux-feedback-loop.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                                        See the live demo on Heroku!
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </section>

                    <section id="four">
                        <h2>Contact</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <p>Send me a messsage.  I'd love to hear from you!</p>
                                <a href="mailto:natew79@gmail.com"><button className="linkrepo">Email</button></a>
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
                                        <a href="mailto:natew79@gmail.com">natew79@gmail.com</a>
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