import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' }
];

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
                        <div className="row">

                            {/* <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                                source,
                                thumbnail,
                                caption,
                                description
                            }))} /> */}
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
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
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