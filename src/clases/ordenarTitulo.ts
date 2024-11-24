import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";
/**
 * Esta clase implementa el algoritmo de ordenamiento de tareas por título.
 */
export class OrdenTitulo implements AlgoritmoOrdenamiento {
    /**
    * Ordena un arreglo de tareas alfabéticamente según su título.
    * Si una tarea tiene el título "documento sin titulo", esa tarea será tratada como si tuviera
    * el valor más alto posible, colocándola al final de la lista ordenada.
    * @param t Arreglo de tareas a ordenar.
    */
    public ordenar(t: Array<Tarea>): void {
        t.sort((a, b) => {
            let tituloA = a.getTitulo() === "documento sin titulo" ? '\uffff':a.getTitulo();
            let tituloB = b.getTitulo() === "documento sin titulo" ? '\uffff':b.getTitulo();
            return tituloA.localeCompare(tituloB,undefined, { sensitivity: "base" });
        });
    }
}