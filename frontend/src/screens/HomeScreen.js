import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} key={product._id} />
            </Link>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
