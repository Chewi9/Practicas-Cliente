import Formulario from './Formulario'

function Bienvenido() {
  return <p>Bienvenido</p>
}

function BarraLateral() {
  function sesionIniciada() {
    return false
  }

  if (sesionIniciada()) {
    return <Bienvenido />
  } else{
    return <Formulario />
  }
}

export default BarraLateral