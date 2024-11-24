import { Tarea } from "../src/clases/tarea";
import path from "path";
import { GestorTarea } from "../src/clases/gestorTarea";
import { Persistencia } from "../src/clases/persistencia";
import { Categoria } from "../src/enums/eCategoria";

const mockOpen = jest.fn();
const mockWriteToFile = jest.fn();
const mockClose = jest.fn();
const mockReadLine = jest.fn();
jest.mock("stdio", () => {
    return {
        CustomFileClass: jest.fn().mockImplementation(() => {
            return {
                open: mockOpen,
                writeToFile: mockWriteToFile,
                close: mockClose,
                readLine: mockReadLine,
            };
        }),
    };
});

describe("Persistencia", () => {
    let persistidor: Persistencia;
    let tarea: Tarea;
    let gestorTarea: GestorTarea;

    beforeEach(() => {
        persistidor = new Persistencia();
        tarea = {
            getCategoria: jest.fn().mockReturnValue(Categoria.TRABAJO),
        } as unknown as Tarea;
        mockReadLine.mockImplementation(async function* () {
            yield JSON.stringify({
                titulo: "Prueba1",
                descripcion: "Descripcion1",
                fechaVencimiento: "2024-12-03T03:00:00.000Z",
                prioridad: 0,
                categoria: "Trabajo",
                etiquetas: ["Tag1"],
                porcentaje: 0,
                estado: "Incompleta",
            });
        });
    });

    it("debería ser una instancia de Persistencia", () => {
        expect(persistidor).toBeInstanceOf(Persistencia);
    });

    it("debería tener un método salvarTarea()", () => {
        persistidor.salvarTarea(tarea);

        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareas.json"), "a");
        expect(mockWriteToFile).toHaveBeenCalledWith(JSON.stringify(tarea));
        expect(mockClose).toHaveBeenCalled();
    });

    it("debería cargar las tareas desde el archivo", async () => {
        gestorTarea = await persistidor.cargarTareas();
        expect(mockOpen).toHaveBeenCalledWith(path.resolve("tareas.json"), "r");
        expect(mockReadLine).toHaveBeenCalled();
        const tareas = gestorTarea.getTareas();
        expect(tareas.length).toBe(1);
        expect(tareas[0].getCategoria()).toBe(Categoria.TRABAJO);
    });
});