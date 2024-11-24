import { Prioridad } from "../enums/ePrioridad";
/**
 * Interfaz `EditarTareaParam` que define los parámetros opcionales para editar una tarea.
 * Se utiliza para actualizar una o más propiedades de una tarea sin necesidad de modificar todas.
 */
export interface EditarTareaParam {
    titulo?:string;
    descripcion?:string;
    fechaVencimiento?:Date;
    prioridad?:Prioridad;
    progreso?:number;
    tiempoDedicado?:number;
}