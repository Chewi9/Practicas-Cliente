import Icono from "./Icono";

function Titulo({texto}){
    return(
        <h2>
            <Icono />
            {texto}
            <Icono />
        </h2>
    );
}
export default Titulo;