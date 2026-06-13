import { categories } from '../data';

const Categories = () => {
    return (
        <section className="categories container">
            {categories.map((category) => (
                <div className="cat-item" key={category.id}>
                    <img src={category.img} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))}
        </section>
    );
};

export default Categories;