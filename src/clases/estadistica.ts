import { EstadoTarea } from "../enums/eEstadoTarea";
import { AlgoritmoTasaFinalizacion } from "../interfaces/algoritmoTasaFinalizacion";
import { AlgoritmoTiempoPromedio } from "../interfaces/algoritmoTiempoPromedio";
import { EstadisticaReturn } from "../interfaces/estadisticaRetorno";
import { Tarea } from "./tarea";
/**
 * La clase `Estadistica` se encarga de calcular estadísticas relacionadas con las tareas,
 * como la tasa de finalización, el tiempo promedio de completado, y la clasificación de tareas
 * en completadas y pendientes.
 */
export class Estadistica {
    private tareasCompletadas:Array<Tarea>;
    private tareasPendientes:Array<Tarea>;
    private tiempoPromedio:number;
    private tasaFinalizacion:number;
    private promedioHelper:AlgoritmoTiempoPromedio;
    private finalizacionHelper:AlgoritmoTasaFinalizacion;
    /**
    * Constructor de la clase `Estadistica`.
    * @param f Algoritmo para calcular la tasa de finalización de tareas.
    * @param p Algoritmo para calcular el tiempo promedio dedicado a las tareas.
    */
    constructor(f: AlgoritmoTasaFinalizacion, p: AlgoritmoTiempoPromedio) {
        this.tareasCompletadas=[];
        this.tareasPendientes=[];
        this.tiempoPromedio=0;
        this.tasaFinalizacion=0;
        this.promedioHelper=p;
        this.finalizacionHelper=f;
    }
    /**
    * Calcula las estadísticas de las tareas, incluyendo:
    * - Listado de tareas completadas.
    * - Listado de tareas pendientes.
    * - Tasa de finalización (% de tareas completadas).
    * - Tiempo promedio dedicado a las tareas.
    * @param t Arreglo de tareas del usuario.
    * @returns {EstadisticaReturn} Un objeto con las estadísticas calculadas.
    */
    public calcularEstadisticas(t: Array<Tarea>):EstadisticaReturn {
        this.tareasCompletadas = this.listadoTareasCompletas(t);
        this.tareasPendientes = this.listadoTareasPendientes(t);
        this.tasaFinalizacion = this.finalizacionHelper.calcularTasaFinalizacion(t, this);
        this.tiempoPromedio = this.promedioHelper.calcularTiempoPromedio(t);
        return {
            tareasCompletadas: this.tareasCompletadas,
            tareasPendientes: this.tareasPendientes,
            tiempoPromedio: this.tiempoPromedio,
            tasaFinalizacion: this.tasaFinalizacion,
        }; 
    }
    /**
    * Filtra las tareas que están en estado COMPLETADA.
    * @param t Arreglo de tareas del usuario.
    * @returns {Array<Tarea>} Un arreglo con las tareas completadas.
    */
    public listadoTareasCompletas(t:Array<Tarea>):Array<Tarea>{
        this.tareasCompletadas = t.filter(t => t.getEstado() === EstadoTarea.COMPLETADA);
        return this.tareasCompletadas;
    }
    /**
    * Filtra las tareas que están en estado PENDIENTE.
    * @param t Arreglo de tareas del usuario.
    * @returns {Array<Tarea>} Un arreglo con las tareas pendientes.
    */
    public listadoTareasPendientes(t: Array<Tarea>): Array<Tarea> {
        this.tareasPendientes = t.filter(t => t.getEstado() === EstadoTarea.PENDIENTE);
        return this.tareasPendientes;
    }

}