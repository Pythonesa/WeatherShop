import Cart from "./Cart";

export default function Header({ cart }) {
  return (
    <header>
      <a href="index.html">
        <img src="/logo.svg" alt="Weather Shop Logo" />
        <h1>Weather Shop</h1>
      </a>
      <nav>
        <img
          className="cart-icon"
          src="/img/nav/carrito-vacio.png"
          alt="Carrito de Compras vacío"
        />
        <div id="cart">
          <Cart cart={cart} />
        </div>
      </nav>
    </header>
  );
}