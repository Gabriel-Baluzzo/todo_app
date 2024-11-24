import { Tarea } from "../clases/tarea";
/**
 * Interfaz `AlgoritmoTiempoPromedio` que establece el contrato para clases que implementen algoritmos para calcular
 * el tiempo promedio dedicado a un conjunto de tareas.
 */
export interface AlgoritmoTiempoPromedio {
    /**
    * Calcula el tiempo promedio dedicado a las tareas.
    * @param t Arreglo de tareas para las que se desea calcular el tiempo promedio.
    * @returns {number} El tiempo promedio dedicado a las tareas en el arreglo.
    */
    calcularTiempoPromedio(t:Array<Tarea>):number
}