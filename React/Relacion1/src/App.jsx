import './App.css'
import ProductoCarrito from './Ejercicio1'
import Ejercicio2 from './Ejercicio2'
import Titulo from './Titulo'
import RelojSimple from './Ejercicio4'

function App() {
  return (
    <div className='App'>
      <h1>Relación 1</h1>
      <h2>Ejercicio 1</h2>
      <ProductoCarrito nombre="Camiseta" precio={20} cantidad={2} />
      <Ejercicio2 texto = "Ejercicio 2"/>
      <Titulo texto="Ejercicio 3"/>
      <RelojSimple />
      
    </div>
  )
}

export default App