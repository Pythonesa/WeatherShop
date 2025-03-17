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

  return (
    <>
      <Header cart={cart}/>
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
