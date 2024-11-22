import { AlgoritmoBusqueda } from "../interfaces/algoritmoBusqueda";
import { BuscadorParam } from "../interfaces/buscadorParam";
import { BuscarFecha } from "./buscarFecha";
import { BuscarTitulo } from "./buscarTitulo";
import { Tarea } from "./tarea";
/**
 * con esta clase podemos settear los algortimos de busqueda que el cliente dese utilizar.
 */
export class BuscadorSetter {
    private buscar:AlgoritmoBusqueda;

    constructor(){
        this.buscar=undefined as unknown as AlgoritmoBusqueda;
    }

    private busquedaSetter(param:BuscadorParam):void {
        if(param.titulo) {
            this.buscar=new BuscarTitulo();
        }
        if(param.fecha){
            this.buscar=new BuscarFecha();
        }
    }

    /**
     * la funcion va a invocar al metodo de busqueda 
     * @param t esto seria el array de tareas
     * @param param el algoritmo que el usario desea sea buscar por titulo o por fecha
     * @returns usando el algoritmo que haya definido el usario te devuelve la tarea correspondiente
     */
    public busqueda(t:Array<Tarea>, param:BuscadorParam):Tarea[] {
        this.busquedaSetter(param);
        return this.buscar.buscar(t, param);
    }
}