const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="foot-brand">
                    <h2>COFFEE.</h2>
                    <p style={{ color: '#a3998b', maxWidth: '300px' }}>
                        Brewing moments and memories, one cup at a time since 1998.
                    </p>
                </div>
                <div className="foot-col">
                    <h4>PRIVACY</h4>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
                <div className="foot-col">
                    <h4>SERVICES</h4>
                    <p>Shop</p>
                    <p>Order Ahead</p>
                    <p>Menu</p>
                </div>
                <div className="foot-col">
                    <h4>ABOUT US</h4>
                    <p>Find a Location</p>
                    <p>About Us</p>
                    <p>Our Story</p>
                </div>
                <div className="foot-col">
                    <h4>SOCIAL MEDIA</h4>
                    <div className="socials">
                        <span>T</span>
                        <span>F</span>
                        <span>I</span>
                        <span>In</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;