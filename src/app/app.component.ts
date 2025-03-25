import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from './components/agregar-tarea/agregar-tarea.component';
import { TareasComponent } from './components/tareas/tareas.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AgregarTareaComponent, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestor-tareas';
}
