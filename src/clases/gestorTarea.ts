import { Categoria } from "../enums/eCategoria";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { EstadisticaReturn } from "../interfaces/estadisticaRetorno";
import { AlgoritmoOrdenamiento } from "../interfaces/ordenar";
import { BuscadorSetter } from "./buscadorSetter";
import { Estadistica } from "./estadistica";
import { Tarea } from "./tarea";
/**
 * La clase `GestorTarea` es responsable de gestionar las tareas dentro del sistema. 
 * Permite crear, agregar, eliminar, ordenar y buscar tareas, además de obtener estadísticas sobre ellas.
 */
export class GestorTarea {
    private tarea:Array<Tarea>;
    /**
    * Crea una nueva instancia de `GestorTarea` con un arreglo vacío de tareas.
    */
    constructor() {
        this.tarea=[];
    }
    /**
    * Crea una nueva tarea con una categoría específica y la agrega al gestor de tareas.
    * @param categoria La categoría en la que se creará la nueva tarea (Trabajo, Personal, Recados).
    * @returns La tarea recién creada.
    */
    public crearTarea(categoria:Categoria):Tarea {
        const tarea= new Tarea(categoria);
        this.agregarTarea(tarea);
        return tarea;
    }
    /**
     * Obtiene todas las tareas almacenadas en el gestor.
     * @returns Un arreglo de todas las tareas.
     */
    public getTareas():Tarea[]{
        return this.tarea;
    }
    /**
     * Agrega una tarea al gestor de tareas.
     * @param t La tarea que se desea agregar.
     */
    public agregarTarea(t:Tarea) {
        this.tarea.push(t);
    }
    /**
    * Elimina una tarea del gestor de tareas.
    * @param t La tarea que se desea eliminar.
    */
    public eliminarTarea(t:Tarea) {
        this.tarea.splice(this.tarea.indexOf(t),1);
    }
    /**
   * Obtiene las estadísticas sobre las tareas del gestor, como la tasa de finalización, tiempo promedio, etc.
   * @param e La instancia de `Estadistica` que se encargará de calcular las estadísticas.
   * @returns Un objeto con las estadísticas calculadas (tareas completadas, pendientes, tasa de finalización, tiempo promedio).
   */
    public obtenerEstadisticas(e:Estadistica):EstadisticaReturn {
        return e.calcularEstadisticas(this.tarea);
    }
    /**
     * Ordena las tareas en el gestor según un algoritmo de ordenamiento.
     * @param a El algoritmo de ordenamiento a utilizar (por título, fecha o prioridad).
     */
    public ordenarTarea(a:AlgoritmoOrdenamiento):void {
        a.ordenar(this.tarea);
    }
    /**
    * Busca tareas dentro del gestor utilizando un algoritmo de búsqueda y parámetros específicos (por título o fecha).
    * @param a La instancia de `BuscadorSetter` que gestiona la búsqueda.
    * @param param Los parámetros de búsqueda (título o fecha).
    * @returns Un arreglo de tareas que coinciden con los parámetros de búsqueda.
    */
    public buscarTarea(a:BuscadorSetter, param:BuscadorParam):Tarea[] {
        return a.busqueda(this.tarea, param);
    }
}