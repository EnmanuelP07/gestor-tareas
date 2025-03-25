import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  nombreTarea: string = '';

  constructor(private tareaService: TareaService) {}

  agregarTarea() {
    if (!this.nombreTarea.trim()) return; // Evita agregar tareas vacías

    this.tareaService.agregarTarea(this.nombreTarea); // Agrega la tarea
    this.nombreTarea = ''; // Limpia el input después de agregar
  }
}
