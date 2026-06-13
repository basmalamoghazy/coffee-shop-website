import MenuCard from './MenuCard';

const MenuSection = ({ id, subtitle, title, items, customStyle }) => {
    return (
        <section id={id} className="menu container" style={customStyle}>
            <p className="subtitle">{subtitle}</p>
            <h2 className="title">{title}</h2>
            <div className="grid">
                {items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;