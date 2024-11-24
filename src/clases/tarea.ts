import { Categoria } from "../enums/eCategoria";
import { EstadoTarea } from "../enums/eEstadoTarea";
import { Prioridad } from "../enums/ePrioridad"
import { ProgresoIncorrecto } from "../errores/progresoIncorrecto";
import { EditarTareaParam } from "../interfaces/editParam";
import { Marcador } from "../interfaces/marcador";
/**
 * Clase `Tarea` que representa una tarea en el sistema. Cada tarea tiene propiedades como título,
 * descripción, prioridad, fecha de vencimiento, estado, progreso, categoría y un marcador de etiquetas.
 * Además, esta clase gestiona el estado de la tarea, la edición de las tareas y su progreso.
 */
export class Tarea {
    private static contadorId: number=0;
    private id:number;
    private titulo: string;
    private descripcion:string;
    private fechaVencimiento?:Date;
    private prioridad:Prioridad;
    private estado:EstadoTarea;
    private progreso:number;
    private categoria:Categoria;
    private marcador:Array<Marcador>;
    private tiempoDedicado:number;
    /**
     * Crea una nueva instancia de la clase `Tarea`.
     * @param catego La categoría de la tarea (Trabajo, Personal, Recados).
     */
    constructor(catego:Categoria) {
        Tarea.contadorId++;
        this.titulo="documento sin titulo";
        this.descripcion="";
        this.prioridad=Prioridad.BAJA;
        this.id=Tarea.contadorId;
        this.estado=EstadoTarea.PENDIENTE;
        this.progreso=0;
        this.categoria=catego;
        this.marcador=[];
        this.tiempoDedicado=0;
    }
    /**
    * Obtiene el ID de la tarea.
    * @returns El ID único de la tarea.
    */
    public getId(): number {
        return this.id;
    }
    /**
    * Obtiene el título de la tarea.
    * @returns El título de la tarea.
    */
    public getTitulo(): string {
        return this.titulo;
    }
    /**
    * Obtiene la descripción de la tarea.
    * @returns La descripción de la tarea.
    */
    public getDescripcion(): string {
        return this.descripcion;
    }
    /**
     * Obtiene la fecha de vencimiento de la tarea.
     * @returns La fecha de vencimiento de la tarea o `undefined` si no está definida.
     */
    public getFechaVencimiento(): Date | undefined{
        return this.fechaVencimiento??undefined;
    }
    /**
    * Obtiene la prioridad de la tarea.
    * @returns La prioridad de la tarea.
    */
    public getPrioridad(): Prioridad {
        return this.prioridad;
    }
    /**
   * Obtiene el estado de la tarea.
   * @returns El estado de la tarea, como "Pendiente" o "Completada".
   */
    public getEstado():string {
        return this.estado;
    }
    /**
    * Obtiene el progreso de la tarea.
    * @returns El porcentaje de progreso de la tarea.
    */
    public getProgreso():number {
        return this.progreso;
    }
    /**
     * Obtiene la categoría de la tarea.
     * @returns La categoría de la tarea.
     */
    public getCategoria():string {
        return this.categoria;
    }
    /**
     * Obtiene el marcador de etiquetas de la tarea.
     * @returns Un arreglo de objetos `Marcador` asociados a la tarea.
     */
    public getMarcador():Array<Marcador> {
        return this.marcador;
    }
    /**
     * Obtiene el tiempo dedicado a la tarea.
     * @returns El tiempo dedicado a la tarea en horas.
     */
    public getTiempoDedicado():number {
        return this.tiempoDedicado;
    }
    /**
     * Establece el progreso de la tarea. Si el progreso está fuera del rango [0, 100], lanza un error.
     * @param p El nuevo valor de progreso de la tarea, debe estar entre 0 y 100.
     */
    private setProgreso(p:number):void {
        if (p < 0 || p > 100) {
            throw new ProgresoIncorrecto;
        }
        this.progreso=p;
    }
    /**
    * Permite editar las propiedades de la tarea.
    * @param params Objeto con las propiedades a modificar de la tarea.
    */
    public editarTarea(params: EditarTareaParam): void {
        this.titulo = params.titulo ?? this.titulo;
        this.descripcion=params.descripcion ?? this.descripcion;
        this.fechaVencimiento = params.fechaVencimiento ?? this.fechaVencimiento;
        this.prioridad= params.prioridad ?? this.prioridad;
        this.tiempoDedicado=params.tiempoDedicado ?? this.tiempoDedicado;
        this.setProgreso(params.progreso ?? this.progreso);
        this.tareaCompleta();
    }
    /**
    * Marca la tarea como completada si su progreso es 100%.
    */
    public tareaCompleta():void {
        if (this.progreso === 100) {
            this.estado = EstadoTarea.COMPLETADA;
        }
    }
    /**
    * Agrega un marcador de etiqueta a la tarea.
    * @param e Objeto `Marcador` que representa la etiqueta que se agregará.
    */
    public agregarMarcador(e:Marcador):void{
        this.marcador.push(e);
    }
}