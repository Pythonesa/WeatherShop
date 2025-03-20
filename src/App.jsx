import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [productsData] = useState(products);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      const newCart = [...cart];
      newCart[index].quantity--;
      if (newCart[index].quantity === 0) {
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  function removeAllFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        removeAllFromCart={removeAllFromCart}
        emptyCart={emptyCart}
      />
      <main>
        <h2>
          ¡Bienvenid@ a la tienda del clima definitiva, 100% real, no fake, un
          link mega!
        </h2>
        <article className="cards">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </article>
      </main>
    </>
  );
}

export default App;
