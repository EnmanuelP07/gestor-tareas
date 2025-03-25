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

  constructor(private tareaService: TareaService) { }

  agregarTarea() {
    if (this.nombreTarea.trim()) {
      this.tareaService.agregarTarea(this.nombreTarea);
      this.nombreTarea = '';
    }
  }
}
