export default function Card({product}) {
  return (
    <section className="card">
      <div className="card-header">
        <img src={`img/${product.image}.png`} alt={product.name}></img>
        <div>
          <h3>{product.name}</h3>
          <p>$1500</p>
          <button className="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
      <p>{product.description}</p>
    </section>
  );
}
