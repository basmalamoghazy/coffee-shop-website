import Navbar from './Navbar';

const Hero = () => {
    return (
        <header className="hero">
            <Navbar />
            <div className="hero-text">
                <h4>Welcome to the finest</h4>
                <h1>We serve the richest coffee <br /> in the city!</h1>
                <button className="btn-outline">Order Now</button>
            </div>
        </header>
    );
};

export default Hero;