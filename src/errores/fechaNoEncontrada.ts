/**
 * La clase `FechaNoEncontrada` es una clase personalizada de error que se utiliza para indicar 
 * que no se ha encontrado una tarea con la fecha especificada durante una operación de búsqueda.
 * Hereda de la clase base `Error` y proporciona un mensaje de error específico.
 */
export class FechaNoEncontrada extends Error {
    /**
     * Crea una instancia del error `FechaNoEncontrada` con un mensaje predeterminado.
     */
    constructor(){
        super("No se encontro la fecha indicada.");
    }
    /**
     * Devuelve el mensaje de error que describe el problema.
     * @returns El mensaje de error.
     */
    public getMessage():string {
        return this.message;
    }
}