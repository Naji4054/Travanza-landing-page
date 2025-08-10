import "./banner.css"


const Banner = () => {

    return (
        <section id="banner-1" className="container">
            <div className="left-banner1">
                <div className="banner-des">
                    <h2>Start your journey
                    by one click, explore beautiful world!</h2>
                    <p>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
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

            <div className="right-banner1">
                <img src="/images/main/demo.png" alt="demo" />
            </div>

        </section>
    )
}

export default Banner