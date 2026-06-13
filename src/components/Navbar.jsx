const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">COFFEE.</div>
            <ul className="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#menu">COFFEE</a></li>
                <li><a href="#desserts">BAKERY</a></li>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
            <div className="search-btn">🔍</div>
        </nav>
    );
};

export default Navbar;