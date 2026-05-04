function RelojSimple() {
    const fecha = new Date().toLocaleTimeString();
    return (
        <div>
            <h2>Ejercicio 4</h2>
            <p>Hora actual: {fecha}</p>
        </div>
    )
}export default RelojSimple;