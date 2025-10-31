import ProductCard from './productcard.jsx';
import './productlist.css';

function ProductList({ productos }) {
  return (
    <div className="productos">
      {productos.map(p => (
        <ProductCard key={p.id} producto={p} />
      ))}
    </div>
  );
}

export default ProductList;