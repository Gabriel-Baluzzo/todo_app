import { CustomFileClass } from "stdio";
import { Tarea } from "./clases/tarea";

export default class persistencia{

public archivo: CustomFileClass = new CustomFileClass()

 public guardar (tarea:Tarea[],ruta : string){


   let texto:string =JSON.stringify(tarea)

  this.archivo.writeToFile(texto)

 this.archivo.close()
 


 }
 








}