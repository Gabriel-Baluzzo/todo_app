/**
 * La clase `TituloNoEncontrado` es una clase personalizada de error que se utiliza para indicar
 * que no se ha encontrado una tarea con el título especificado durante una operación de búsqueda.
 * Hereda de la clase base `Error` y proporciona un mensaje de error específico.
 */
export class TituloNoEncontrado extends Error{
    /**
     * Crea una instancia del error `TituloNoEncontrado` con un mensaje predeterminado.
     */
    constructor(){
        super("No se encontro el titulo buscado.");
    }
    /**
    * Devuelve el mensaje de error que describe el problema.
    * @returns El mensaje de error.
    */
    public getMessage():string {
        return this.message;
    }
}