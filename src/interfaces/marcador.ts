/**
 * Interfaz `Marcador` que define un contrato para objetos que representan un marcador.
 * Un marcador es un elemento que tiene un nombre asociado, y cualquier clase que implemente esta interfaz
 * debe proporcionar un método para obtener dicho nombre.
 */
export interface Marcador {
    getNombre():string
}