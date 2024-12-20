import { Categoria } from "../src/enums/eCategoria";
import { mock } from 'jest-mock-extended';
import { Tarea } from "../src/clases/tarea";
import { Marcador } from "../src/interfaces/marcador";

describe('Tarea', () => {
    let tarea: Tarea;
    let etiqueta = mock<Marcador>();
    let etiqueta2 = mock<Marcador>();

    beforeEach(() => {
        tarea = new Tarea(Categoria.TRABAJO);
        tarea['titulo'] = "tarea 1";
        tarea['descripcion'] = "loca loca";
        etiqueta.getNombre.mockReturnValue("trabajoso");
        etiqueta2.getNombre.mockReturnValue("calooor");
    });

    it('Debe poder devolver el Id', () => {
        //se autoincrementa desde el contructor
        expect(tarea.getId()).toBe(1);
    });

    it('Debe poder devolver el Titulo', () => {
        expect(tarea.getTitulo()).toBe("tarea 1");
    });

    it('Debe poder devolver la descripcion', () => {
        expect(tarea.getDescripcion()).toBe("loca loca");
    });

    it('Debe poder devolver la vecha de vencimiento', () => {
        tarea['fechaVencimiento'] = new Date(2025, 2);
        expect(tarea.getFechaVencimiento()?.getFullYear()).toBe(2025);
    });

    it('Si no hay fecha de vencimiento debe devovler undefined', () => {
        expect(tarea.getFechaVencimiento()).toBe(undefined);
    })

    it('Debe poder devolver el nivel de Prioridad', () => {
        /* Prioridad 0 es alta, 1 es media, 2 es baja.
        Por defecto la prioridad es 2 */
        expect(tarea.getPrioridad()).toBe(2);
    });

    it('Debe poder devolver el estado', () => {
        //Por defecto el estado es pendiente.
        expect(tarea.getEstado()).toBe("Pendiente");
    });

    it('Debe poder devolver el progreso', () => {
        //Por defecto el progreso es 0.
        expect(tarea.getProgreso()).toBe(0);
    });

    it('Debe poder devolver la categoria', () => {
        expect(tarea.getCategoria()).toBe("Trabajo");
    });

    it('Debe poder devolver el tiempo dedicado', () => {
        //Por defecto el tiempo dedicado es 0;
        expect(tarea.getTiempoDedicado()).toBe(0);
    });

    it('Debe poder setear su progreso', () => {
        tarea['setProgreso'](10);
        expect(tarea.getProgreso()).toBe(10);
    })

    it('Si el progreso es menor que 0 debe tirar un error', () => {
        expect(()=>tarea['setProgreso'](-1)).toThrow();
    })

    it('Si el progreso es mayor que 100 debe tirar un error', () => {
        expect(()=>tarea['setProgreso'](101)).toThrow();
    })

    it('Debe poder editar solo los campos elegidos de las tareas', () => {
        tarea.editarTarea({titulo: "tarea dificil"});
        expect(tarea.getTitulo()).toBe("tarea dificil");
        expect(tarea.getDescripcion()).toBe("loca loca");
    });

    it('Si el progreso de la tarea es editado a 100 el estado debe ser cambiado a completado', () => {
        tarea.editarTarea({ progreso: 100 });
        tarea.tareaCompleta();
        expect(tarea.getProgreso()).toBe(100);
        expect(tarea.getEstado()).toBe("Completada");
    });

    it('Debe poder agregar Marcadores', () => {
        tarea.agregarMarcador(etiqueta);
        tarea.agregarMarcador(etiqueta2);
        expect(tarea.getMarcador().length).toBe(2);
    });

    it('Debe poder devolver los Marcadores', () => {
        tarea.agregarMarcador(etiqueta);
        tarea.agregarMarcador(etiqueta2);
        expect(tarea.getMarcador()).toEqual([etiqueta, etiqueta2]);
    });
});