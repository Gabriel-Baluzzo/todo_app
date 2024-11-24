import { Tarea } from "../clases/tarea";
/**
 * Interfaz `AlgoritmoOrdenamiento` que establece el contrato para clases que implementen algoritmos de ordenamiento
 * de un conjunto de tareas.
 */
export interface AlgoritmoOrdenamiento {
    /**
   * Ordena un arreglo de tareas basado en el criterio definido por el algoritmo de ordenamiento.
   * @param t Arreglo de tareas a ordenar.
   * Modifica el arreglo de tareas directamente, no retorna un nuevo arreglo.
   */   
    ordenar(t:Array<Tarea>):void  
}