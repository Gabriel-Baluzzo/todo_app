import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";
/**
 * Esta clase implementa el algoritmo de ordenamiento de tareas por prioridad.
 */
export class OrdenPrioridad implements AlgoritmoOrdenamiento {
    /**
     * Las tareas se ordenan de menor a mayor prioridad.
     * Si una tarea no tiene una prioridad definida, se asigna el valor `Infinity` para que 
     * quede al final de la lista de tareas ordenadas.
     * @param t Arreglo de tareas a ordenar según su prioridad.
     */
    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getPrioridad()??Infinity;
            const valorB = b.getPrioridad()??Infinity;
            return valorA - valorB;
        });
    }
}