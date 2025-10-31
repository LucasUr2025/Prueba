import './home.css'
import productos from '../../data/productos.js'
import ProductList from '../../components/ProductCard/productlist.jsx'

function Home() {
  const destacados = productos.filter(p => p.destacado);

  return (
    <section>
      <h2 className="amarillos">DESTACADOS</h2>
      <ProductList productos={destacados} />
    </section>
  );
}

export default Home;
