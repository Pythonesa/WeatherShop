import WSLogo from '/logo.svg'

function App() {

  return (
    <>
      <header>
        <a href="index.html">
          <img src={WSLogo} alt="Weather Shop Logo" />
          <h1>Weather Shop</h1>
        </a>
        <nav>
          <img className='cart-icon' src="/img/nav/carrito-vacio.png" alt="Carrito de Compras vacío" />
          <div id="cart">
            <p>No has agregado nada al carrito</p>
          </div>
        </nav>
      </header>
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
