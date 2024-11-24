import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { BuscarFecha } from "./buscarFecha";
import { BuscarTitulo } from "./buscarTitulo";
import { Tarea } from "./tarea";
/**
 * Esta clase permite configurar los algoritmos de búsqueda que el cliente desea utilizar.
 * Dependiendo de los parámetros proporcionados, se selecciona el algoritmo de búsqueda 
 * adecuado, como búsqueda por título o por fecha.
 */
export class BuscadorSetter {
    /**
    * Instancia del algoritmo de búsqueda seleccionado.
    */
    private buscar:AlgoritmoBusqueda;

    constructor(){
        this.buscar=undefined as unknown as AlgoritmoBusqueda;
    }
    /**
    * Configura el algoritmo de búsqueda según los parámetros proporcionados.
    * @param param Objeto que contiene las opciones de búsqueda, como título o fecha.
    */
    private busquedaSetter(param:BuscadorParam):void {
        if(param.titulo) {
            this.buscar=new BuscarTitulo();
        }
        if(param.fecha){
            this.buscar=new BuscarFecha();
        }
    }

    /**
    * Realiza una búsqueda en un conjunto de tareas utilizando el algoritmo configurado.
    * @param t Arreglo de tareas en las que se realizará la búsqueda.
    * @param param Objeto que define el algoritmo de búsqueda, ya sea por título o por fecha.
    * @returns {Tarea[]} Un arreglo con las tareas que coinciden con el criterio de búsqueda.
    */
    public busqueda(t:Array<Tarea>, param:BuscadorParam):Tarea[] {
        this.busquedaSetter(param);
        return this.buscar.buscar(t, param);
    }
}