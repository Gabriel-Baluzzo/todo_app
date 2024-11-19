import { Categoria } from "./enums/eCategoria";
import { GestorTarea } from "./clases/gestorTarea";
import { OrdenPrioridad } from "./clases/ordenarPrioridad";
import { Prioridad } from "./enums/ePrioridad";
import { Estadistica } from "./clases/estadistica";
import { BuscadorSetter } from "./clases/buscadorSetter";
import { TiempoPromedio } from "./clases/tiempoPromedio";
import { TasaFinalizacion } from "./clases/tasaFinalizacion";

const buscador= new BuscadorSetter();
const ordenar = new OrdenPrioridad();
const promTiempo= new TiempoPromedio()
const tasaFinish= new TasaFinalizacion()
const estadistica= new Estadistica(tasaFinish,promTiempo);
const gestor = new GestorTarea();

const tarea1 = gestor.crearTarea(Categoria.PERSONAL)
gestor.agregarTarea(tarea1)
const tarea2=gestor.crearTarea(Categoria.RECADOS)
gestor.agregarTarea(tarea2)
const tarea3 = gestor.crearTarea(Categoria.TRABAJO)
gestor.agregarTarea(tarea3)

tarea1.editarTarea({ prioridad: Prioridad.ALTA,progreso:100,tiempoDedicado:3 })
// tarea1.editarTarea({ titulo:"zalala" })
// tarea2.editarTarea({ prioridad: Prioridad.BAJA, tiempoDedicado:1 })
// tarea3.editarTarea({ prioridad: Prioridad.MEDIA, tiempoDedicado:2 })

console.log(tarea1.getProgreso(), tarea1.getEstado())
// console.log(tarea1.getId(), tarea2.getId(), tarea3.getId())
// console.log(gestor.obtenerEstadisticas(estadistica))
// console.log("Antes de ordenar:");
// console.log(gestor);
// gestor.ordenarTarea(ordenar);
// console.log(gestor);

// console.log(gestor.buscarTarea(buscador, {fecha: new Date(2025-12)}))



