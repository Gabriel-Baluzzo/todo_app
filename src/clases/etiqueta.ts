import { Marcador } from "../interfaces/marcador";
/**
 * La clase `Etiqueta` representa una etiqueta que puede ser utilizada como marcador en las tareas.
 * Una etiqueta tiene un nombre único que permite identificarla.
 */
export class Etiqueta implements Marcador{
    private nombre:string;

    constructor(n:string) {
        this.nombre=n;
    }

    public getNombre():string {
        return this.nombre;
    }
}