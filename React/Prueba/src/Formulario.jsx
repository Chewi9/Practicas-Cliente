function Formulario() {
  function onClick() {}
  function onSubmit() {}

  return (
    <form onSubmit={onSubmit}>
      <input onClick={onClick} type="text" placeholder="Nombre" />
      <input onClick={onClick} type="email" placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario