import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen() {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('/api/products');
      SetProducts(result.data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
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
