import { Component,OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  imports: [CommonModule, FormsModule],
})
export class TareasComponent implements OnInit {
  nombreTarea: string = ''; 
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.tareas = this.tareaService.obtenerTareas();
  }

  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(id);
  }

  cambiarEstado(id: number) {
    this.tareaService.cambiarEstado(id);
  }
}
