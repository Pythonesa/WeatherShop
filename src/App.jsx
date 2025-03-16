import Header from "./components/Header"
import ProductCard from "./components/ProductCard"

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>¡Bienvenid@ a la tienda del clima definitiva, 100% real, no fake, un link mega!</h2>
        <article className="cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
      </main>
    </>
  )
}

export default App
