export default function Cart() {
  return(
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
          <tr>
            <td>
              <img src="img/arcoiris.png" alt="arcoíris"/>
            </td>
            <td>Arcoíris</td>
            <td>$5000</td>
            <td>
              <button type="button" className="addFromCart">+</button>
              1
              <button type="button" className="removeFromCart">-</button>
            </td>
            <td>
              <button type="button" className="removeAllFromCart">X</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="totalCart">Total: $5000</p>
      <button type="button" className="emptyCart">Vaciar Carrito</button>
    </>
  );
}
