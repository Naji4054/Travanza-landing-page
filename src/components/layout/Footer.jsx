import "./footer.css";

const Footer = () => {
    return (
        <section id="footer" >
            <div className="footer-container container">
                <div className="footer-box1">
                    <div className="footer-des">
                        <p className="p-tag">Prepare yourselft to be a part of exploration of</p>
                        <h4 className="h4">The Beauty of Indonesia</h4>
                    </div>
                    <div className="footer-btn">
                        <button className="sign-up">Sign Up</button>
                        <button className="sign-in">Sign In</button>
                    </div>
                </div>

                <div className="footer-box2">
                    <div className="footer-box-des">
                        <div className="footer-logo">
                            <h1>TRAVANZA</h1>
                        </div>
                        <div className="footer-pages">
                            <ul>
                                <li>Product</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-app">
                        <div className="icons">
                            <p> Get the App</p>
                        </div>
                        <div className="store-buttons">
                            <button>
                                <span><img src="/images/main/playstore.png" alt="playstore" /></span>
                                <div className="contents">
                                    <span className="btn-p1"><p>Get it on</p></span><span className="btn-p2"><p>Google Play</p></span>
                                </div>
                            </button>
                            <button>
                                <span><img src="/images/main/appstore.png" alt="appstore" /></span>
                                <div className="contents">
                                    <span className="btn-p1"><p>Download on the</p></span><span className="btn-p2"><p>App Store</p></span>
                                </div>
                            </button>
                         </div>
                    </div>
                </div>

                <div className="footer-box3">
                    <div className="left">
                        <span><img src="/images/main/copyright.png" alt="copyright" /></span>
                        <p> 2024 travanza.com</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;