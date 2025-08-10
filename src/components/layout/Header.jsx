import "./header.css";
const Header = () => {

    return (
        <header>
            <nav>
                <div className="container navbar">
                    <div className="nav-logo">
                        <h1>TRAVANZA</h1>
                    </div>
                    <div className="nav-pages">
                        <ul>
                            <li>Product</li>
                            <li>Contact Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className="nav-btn">
                        <button className="button">Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header