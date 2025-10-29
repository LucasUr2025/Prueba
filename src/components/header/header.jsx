export default function Header() {
  return (
    <header>
      <img
        className="logo"
        src="https://raw.githubusercontent.com/LucasUr2025/MercaderiaPerfumeriaYLimpieza/refs/heads/main/LogoHeader.jpg"
        alt="Logo"
        height="100px"
      />
      <input type="text" placeholder="Buscar producto..." />
      <div className="Usuario">
        <div>
          <img
            src="https://raw.githubusercontent.com/LucasUr2025/MercaderiaPerfumeriaYLimpieza/refs/heads/main/Usuario.jpg"
            alt="Ingresar usuario"
            height="35px"
          />
        </div>
        <p>Ingresar</p>
      </div>
      <div className="Carrito">
        <div>
          <img
            src="https://raw.githubusercontent.com/LucasUr2025/MercaderiaPerfumeriaYLimpieza/refs/heads/main/Dinero.jpg"
            alt="Signo de dinero"
            height="35px"
          />
        </div>
        <h2>0</h2>
        <div>
          <img
            src="https://raw.githubusercontent.com/LucasUr2025/MercaderiaPerfumeriaYLimpieza/refs/heads/main/Carrito.jpg"
            alt="Carrito de compras"
            height="37px"
          />
        </div>
        <h2>0</h2>
      </div>
    </header>
  )
}
