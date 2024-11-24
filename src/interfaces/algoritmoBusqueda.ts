import { Tarea } from "../clases/tarea";
import { BuscadorParam } from "./buscadorParam";
/**
 * Interfaz `AlgoritmoBusqueda` que define el contrato para implementar algoritmos de búsqueda de tareas.
 * Los algoritmos que implementen esta interfaz deben proporcionar un método para buscar tareas 
 * según criterios específicos definidos en los parámetros.
 */
export interface AlgoritmoBusqueda {
    /**
    * Realiza la búsqueda de tareas en un conjunto dado basado en los criterios especificados.
    * @param t Arreglo de tareas donde se realizará la búsqueda.
    * @param param Parámetros de búsqueda que especifican los criterios (título o fecha).
    * @returns {Tarea[]} Un arreglo con las tareas que cumplen los criterios de búsqueda.
    */
    buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[]
}