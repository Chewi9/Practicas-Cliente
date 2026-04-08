import { useState } from 'react'
import Formulario from './Formulario'

function BarraLateral() {
  const [sessionIniciada, setSessionIniciada] = useState(false)

  return (
    <aside className="barra-lateral">
      {sessionIniciada ? (
        <p>Bienvenido</p>
      ) : (
        <Formulario />
      )}
    </aside>
  )
}

export default BarraLateral