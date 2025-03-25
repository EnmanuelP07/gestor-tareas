import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: Tarea []=[];
  constructor() { }
  obtenerTareas(){
    return this.tareas;
  }
  agregarTarea(nombre: string) {
    const nuevoId = this.tareas.length > 0 ? Math.max(...this.tareas.map(t => t.id)) + 1 : 1;
    const nuevaTarea: Tarea = {
      id: nuevoId,
      nombre: nombre,
      completada: false
    };
    this.tareas.push(nuevaTarea);
  ;
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id); // 🔹 Filtrar la tarea eliminada
  }
  

  cambiarEstado(id: number) {
    this.tareas = this.tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t);
  }
}

