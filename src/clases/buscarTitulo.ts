import { TituloNoEncontrado } from "../errores/tituloNoEncontrado";
import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { Tarea } from "./tarea";
/**
 * Implementación del algoritmo de búsqueda para filtrar tareas por título.
 * Esta clase utiliza un parámetro de título para buscar tareas cuyo título coincida 
 * exactamente con el proporcionado.
 */
export class BuscarTitulo implements AlgoritmoBusqueda {
    /**
     * Realiza la búsqueda de tareas que coincidan con el título proporcionado.
     * @param t Arreglo de tareas en las que se realizará la búsqueda.
     * @param param Objeto que contiene el parámetro de búsqueda, en este caso, un título.
     * @returns {Tarea[]} Un arreglo con las tareas cuyo título coincida con el título proporcionado.
     * @throws {TituloNoEncontrado} Si no se encuentran tareas que coincidan con el título, se lanza una excepción.
     */
    public buscar(t: Array<Tarea>, param:BuscadorParam):Tarea[] {
        const resultado=t.filter(tarea=>tarea.getTitulo()===param.titulo);
        if (resultado.length===0) {
            throw TituloNoEncontrado;
        }
        return resultado;
    }
}