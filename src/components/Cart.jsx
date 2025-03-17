export default function Cart({ cart }) {
  if (cart.length >0) {
    return (
      <>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={`img/${product.image}.png`} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <button type="button" className="addFromCart">
                    +
                  </button>
                  {product.quantity}
                  <button type="button" className="removeFromCart">
                    -
                  </button>
                </td>
                <td>
                  <button type="button" className="removeAllFromCart">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="totalCart">Total: $5000</p>
        <button type="button" className="emptyCart">
          Vaciar Carrito
        </button>
      </>
    );
  } else {
    return <p>El carrito esta vacio</p>;
  }
}
