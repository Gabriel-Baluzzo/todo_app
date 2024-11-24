import { AlgoritmoTiempoPromedio } from "../interfaces/algoritmoTiempoPromedio";
import { Tarea } from "./tarea";
/**
 * Esta clase calcula el tiempo promedio que el usuario ha tardado en realizar todas sus tareas.
 * Implementa el algoritmo para obtener el tiempo medio basado en la suma del tiempo dedicado a todas las tareas.
 */
export class TiempoPromedio implements AlgoritmoTiempoPromedio {
    /**
    * Calcula el tiempo promedio que el usuario ha dedicado a sus tareas.
    * @param t Arreglo de tareas que se van a evaluar.
    * @returns {number} El tiempo promedio dedicado a las tareas, en la misma unidad que `getTiempoDedicado`.
    */  
    public calcularTiempoPromedio(t: Array<Tarea>): number {
        const tiempoTotal = t.reduce((total, tarea) => total + tarea.getTiempoDedicado(), 0);
        const totalTareas = t.length;
        let tiempoPromedio=0;
        if (totalTareas !== 0) {
            tiempoPromedio = tiempoTotal / totalTareas;
        } 
        return tiempoPromedio;
    }
}