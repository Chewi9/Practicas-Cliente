function Formulario() {
  const onClick = () => {
    console.log('Input clickeado')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado')
  }

  return (
    <form onSubmit={onSubmit}>
      <input onClick={onClick} type="text" placeholder="Nombre" />
      <input onClick={onClick} type="email" placeholder="Email" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario