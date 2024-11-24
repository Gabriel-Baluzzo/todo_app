import { AlgoritmoTasaFinalizacion } from "../interfaces/algoritmoTasaFinalizacion";
import { Estadistica } from "./estadistica";
import { Tarea } from "./tarea";
/**
 * Esta clase se encarga de calcular el porcentaje de tareas completadas por el usuario.
 * Implementa el algoritmo para obtener la tasa de finalización basada en el número de tareas completadas
 * en relación con el total de tareas.
 */
export class TasaFinalizacion implements AlgoritmoTasaFinalizacion {
    /**
     * Calcula el porcentaje de tareas completadas por el usuario.
     * @param t Arreglo de tareas que se van a evaluar.
     * @param e Objeto de tipo `Estadistica` que proporciona la lista de tareas completadas.
     * @returns {number} El porcentaje de tareas completadas, redondeado a dos decimales.
     */
    public calcularTasaFinalizacion(t: Array<Tarea>, e:Estadistica): number {
        const tareasCompletas = e.listadoTareasCompletas(t).length;
        const totalTareas = t.length;
        let tasaFinalizacion=0;
        if (totalTareas !== 0) {
            tasaFinalizacion = (tareasCompletas / totalTareas) * 100;
        } 
        return parseFloat(tasaFinalizacion.toFixed(2));
    }
}