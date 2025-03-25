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
    const nuevaTarea: Tarea = {
      id: this.tareas.length + 1,
      nombre: nombre,
      completada: false
    };
    this.tareas.push(nuevaTarea);
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  cambiarEstado(id: number) {
    this.tareas = this.tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t);
  }
}

