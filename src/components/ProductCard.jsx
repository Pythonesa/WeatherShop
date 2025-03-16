export default function Card() {
  return (
    <section className="card">
      <div className="card-header">
        <img src="img/arcoiris.png"></img>
        <div>
          <h3>Arcoíris</h3>
          <p>$1500</p>
          <button className="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
      <p>Un arcoíris de colores variados y una olla de dinero al final.</p>
    </section>
  );
}
