import './header.css'

export default function Header() {
  return (
    <header>
      <img
        className="logo"
        src="src/assets/LogoHeader.jpg"
        alt="Logo"
        height="100px"
      />
      <input type="text" placeholder="Buscar producto..." />
      <div className="Usuario">
        <div>
          <img
            src="src/assets/Usuario.jpg"
            alt="Ingresar usuario"
            height="35px"
          />
        </div>
        <p>Ingresar</p>
      </div>
      <div className="Carrito">
        <div>
          <img
            src="src/assets/Dinero.jpg"
            alt="Signo de dinero"
            height="35px"
          />
        </div>
        <h2>0</h2>
        <div>
          <img
            src="src/assets/Carrito.jpg"
            alt="Carrito de compras"
            height="37px"
          />
        </div>
        <h2>0</h2>
      </div>
    </header>
  )
}
