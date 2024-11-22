import { AlgoritmoTiempoPromedio } from "../interfaces/algoritmoTiempoPromedio";
import { Tarea } from "./tarea";
/**
 * esta clase calcula un tiempo promedio que tardo el usario en realziar todas tus tareas.
 */
export class TiempoPromedio implements AlgoritmoTiempoPromedio {  
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