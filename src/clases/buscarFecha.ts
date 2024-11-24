import { FechaNoEncontrada } from "../errores/fechaNoEncontrada";
import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";

/**
 * Implementación del algoritmo de búsqueda para filtrar tareas por fecha de vencimiento.
 * Esta clase utiliza un parámetro de fecha para buscar tareas cuya fecha de vencimiento 
 * coincida exactamente con la proporcionada.
 */
export class BuscarFecha implements AlgoritmoBusqueda {
    /**
    * Realiza la búsqueda de tareas que coincidan con la fecha de vencimiento proporcionada.
    * @param t Arreglo de tareas en las que se realizará la búsqueda.
    * @param param Objeto que contiene el parámetro de búsqueda, en este caso, una fecha.
    * @returns {Tarea[]} Un arreglo con las tareas cuya fecha de vencimiento coincida con la fecha proporcionada.
    * @throws {FechaNoEncontrada} Si no se encuentran tareas que coincidan con la fecha, se lanza una excepción.
    */
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=> tarea.getFechaVencimiento()?.getTime()===param.fecha?.getTime());
        if (resultado.length === 0) {
            throw new FechaNoEncontrada;
        }
        return resultado;
    }
}