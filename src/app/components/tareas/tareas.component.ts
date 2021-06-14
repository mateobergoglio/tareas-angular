import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = []
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listTareas.push(tarea);

    this.nombreTarea = '';

  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(index: number, tarea: Tarea): void{
    this.listTareas[index].estado = !tarea.estado
  }

}
