import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { Tarea } from "./tarea";
/**
 * Esta clase implementa el algoritmo de ordenamiento de tareas por fecha de vencimiento.
 * Las tareas se ordenan de menor a mayor fecha. Si una tarea no tiene fecha de vencimiento definida,
 * se considera con la fecha más lejana posible (utilizando `Infinity`).
 */
export class OrdenFecha implements AlgoritmoOrdenamiento {
    /**
    * Ordena un arreglo de tareas en función de su fecha de vencimiento.
    * @param t Arreglo de tareas a ordenar según su fecha de vencimiento.
    */
    public ordenar(t: Array<Tarea>):void {
        t.sort((a, b) => {
            const valorA = a.getFechaVencimiento()?.getTime()?? Infinity;
            const valorB = b.getFechaVencimiento()?.getTime() ?? Infinity;
            return valorA-valorB;
        })  
    }
}