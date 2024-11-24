/**
 * La clase `ProgresoIncorrecto` es una clase personalizada de error que se utiliza para indicar
 * que el progreso de una tarea no se encuentra dentro del rango válido (0-100).
 * Hereda de la clase base `Error` y proporciona un mensaje de error específico.
 */
export class ProgresoIncorrecto extends Error{
    /**
    * Crea una instancia del error `ProgresoIncorrecto` con un mensaje predeterminado.
    */
    constructor(){
        super("El progreso debe ser un valor entre 0 y 100.");
    }
    /**
     * Devuelve el mensaje de error que describe el problema.
     * @returns El mensaje de error.
     */
    public getMessage():string {
        return this.message;
    }
}