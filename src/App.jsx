import WSLogo from '/logo.svg'

function App() {

  return (
    <>
      <header>
        <a href="index.html">
          <img src={WSLogo} alt="Weather Shop Logo" />
          <h1>Weather Shop</h1>
        </a>
        <nav>Inicio | Carrito | Login</nav>
      </header>
    </>
  )
}

export default App
