const MenuCard = ({ item }) => {
    return (
        <div className="card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="card-footer">
                <span>{item.price}</span>
                <button className="btn-dark">Order Now</button>
            </div>
        </div>
    );
};

export default MenuCard;