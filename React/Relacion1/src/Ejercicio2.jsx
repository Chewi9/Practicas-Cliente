function Icono() {
    return (
        <span>🌟</span>
    );
}

function Ejercicio2({ texto}) {
    return (
        <h2>
            <Icono /> {texto} <Icono />
        </h2>
    );
}
export default Ejercicio2;