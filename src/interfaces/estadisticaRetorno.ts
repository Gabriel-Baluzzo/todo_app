import { Tarea } from "../clases/tarea";
/**
 * Interfaz `EstadisticaReturn` que define la estructura de los resultados estadísticos de las tareas.
 * Es utilizada para devolver las estadísticas calculadas sobre un conjunto de tareas, incluyendo tareas completadas,
 * tareas pendientes, tiempo promedio dedicado y tasa de finalización.
 */
export interface EstadisticaReturn {
    tareasCompletadas:Tarea[]
    tareasPendientes:Tarea[]
    tiempoPromedio:number;
    tasaFinalizacion:number;
}