import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <main>
        <h2>¡Bienvenid@ a la tienda del clima definitiva, 100% real, no fake, un link mega!</h2>
        <article className="cards">
          <section className="card">
            <div className='card-header'>
              <img src='img/arcoiris.png'></img>
              <div>
                <h3>Arcoíris</h3>
                <p>$1500</p>
                <button className='add-to-cart'>Agregar al carrito</button>
              </div>
            </div>
            <p>Un arcoíris de colores variados y una olla de dinero al final.</p>
          </section>
          <section className="card">
            <div className='card-header'>
              <img src='img/arcoiris.png'></img>
              <div>
                <h3>Arcoíris</h3>
                <p>$1500</p>
                <button className='add-to-cart'>Agregar al carrito</button>
              </div>
            </div>
            <p>Un arcoíris de colores variados y una olla de dinero al final.</p>
          </section>
        </article>
      </main>
    </>
  )
}

export default App
