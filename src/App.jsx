import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [productsData] = useState(products);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <main>
        <h2>
          ¡Bienvenid@ a la tienda del clima definitiva, 100% real, no fake, un
          link mega!
        </h2>
        <article className="cards">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} setCart={setCart} />
          ))}
        </article>
      </main>
    </>
  );
}

export default App;
