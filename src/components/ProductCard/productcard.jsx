import './productcard.css';

function ProductCard({ producto }) {
  return (
    <article className="Producto">
      <img src={producto.imagen} alt={producto.nombre} width="100%" />
      <p>{producto.nombre}</p>
      <h3 className="precio">${producto.precio.toLocaleString()}</h3>
    </article>
  );
}

export default ProductCard;