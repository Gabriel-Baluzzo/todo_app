import { CustomFileClass } from "stdio";
import { Tarea } from "./tarea";
import path from "path";
import { GestorTarea } from "./gestorTarea";

/**
 * Esta clase se encarga de la persistencia de tareas en un archivo JSON.
 * Permite guardar tareas en un archivo y cargar tareas desde ese archivo, 
 * gestionando las tareas mediante un objeto `GestorTarea`.
 */
export class Persistencia {
   private archivo:CustomFileClass=new CustomFileClass();
    /**
    * Guarda una tarea en el archivo `tareas.json`.
    * @param tarea Objeto de tipo `Tarea` que se desea guardar en el archivo.
    */
    public salvarTarea(tarea:Tarea):void {
        this.archivo.open(path.resolve("tareas.json"),"a");
        this.archivo.writeToFile(JSON.stringify(tarea));
        this.archivo.close();
    }
    /**
    * Carga las tareas desde el archivo `tareas.json` y las devuelve dentro de un objeto `GestorTarea`.
    * @returns {Promise<GestorTarea>} Promesa que resuelve a un objeto `GestorTarea` con las tareas cargadas.
    */
    public async cargarTareas(): Promise<GestorTarea> {
        let gestorTarea: GestorTarea = new GestorTarea();
        this.archivo.open(path.resolve("tareas.json"), "r");

        let cargadorJson = "";
        for await (const renglon of this.archivo.readLine()) {
            cargadorJson = renglon;
            const tareaData = JSON.parse(cargadorJson);
            const tarea = Object.assign(new Tarea(tareaData.categoria),tareaData);
            gestorTarea.agregarTarea(tarea);      
        }
        this.archivo.close();
        return gestorTarea;
    }
}
 








//}