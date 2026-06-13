import { testimonials } from '../data';

const Testimonials = () => {
    return (
        <section className="testimonials container">
            <p className="subtitle">Come and join</p>
            <h2 className="title">OUR HAPPY CUSTOMERS</h2>
            <div className="test-grid">
                {testimonials.map((test) => (
                    <div className="test-card" key={test.id}>
                        <div className="user-info">
                            <img src={test.img} alt={test.name} />
                            <div>
                                <strong>{test.name}</strong><br />
                                <small>{test.role}</small>
                            </div>
                            <div className="stars">★★★★★</div>
                        </div>
                        <p>{test.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;