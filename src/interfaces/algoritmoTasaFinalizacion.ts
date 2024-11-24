import { Estadistica } from "../clases/estadistica";
import { Tarea } from "../clases/tarea";
/**
 * Interfaz `AlgoritmoTasaFinalizacion` que establece el contrato para clases que implementen algoritmos
 * para calcular la tasa de finalización de un conjunto de tareas.
 */
export interface AlgoritmoTasaFinalizacion {
    /**
    * Calcula la tasa de finalización de las tareas en el arreglo dado.
    * La tasa de finalización se calcula como el porcentaje de tareas completadas sobre el total de tareas.
    * @param t Arreglo de tareas que se evaluarán para calcular la tasa de finalización.
    * @param e Objeto de tipo `Estadistica` que proporciona métodos para obtener el listado de tareas completadas.
    * @returns {number} El porcentaje de tareas completadas con respecto al total de tareas.
    */
    calcularTasaFinalizacion(t:Array<Tarea>, e:Estadistica):number
}