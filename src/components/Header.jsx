import Cart from "./Cart";

export default function Header({
  cart,
  removeFromCart,
  addToCart,
  removeAllFromCart,
  emptyCart,
}) {
  return (
    <header>
      <a href="index.html">
        <img src="/logo.svg" alt="Weather Shop Logo" />
        <h1>Weather Shop</h1>
      </a>
      <nav>
        <img
          className="cart-icon"
          {...(cart.length > 0
            ? { src: "/img/nav/carrito-cargado.png" }
            : { src: "/img/nav/carrito-vacio.png" })}
          alt="Carrito de Compras"
        />
        <div id="cart">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            removeAllFromCart={removeAllFromCart}
            emptyCart={emptyCart}
          />
        </div>
      </nav>
    </header>
  );
}
