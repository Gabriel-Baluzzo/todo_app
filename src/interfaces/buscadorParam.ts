/**
 * Interfaz `BuscadorParam` que define los parámetros utilizados para realizar búsquedas de tareas.
 * Proporciona criterios opcionales que los algoritmos de búsqueda pueden utilizar.
 */
export interface BuscadorParam {
    titulo?:string;
    fecha?:Date;
}