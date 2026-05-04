function ProductoCarrito({ nombre, precio, cantidad }) {
  const subtotal = precio * cantidad;
    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {cantidad}</p>
            <p>Subtotal: ${subtotal}</p>
        </div>
    );
}
export default ProductoCarrito;