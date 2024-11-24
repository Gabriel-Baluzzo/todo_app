import { BuscadorSetter } from "./clases/buscadorSetter";
import { Persistencia } from "./clases/persistencia";

const persistidor= new Persistencia();
const buscador=new BuscadorSetter();

async function main() {
    const gestor = await persistidor.cargarTareas();
    console.log("Loaded Tasks:", gestor.getTareas());
    const encontrado = gestor.buscarTarea(buscador, { titulo: "lalala" });
    console.log("La encontre:", encontrado);
}

main();








