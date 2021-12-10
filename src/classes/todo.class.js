export class Todo {
  // Destructuracion de objeto.
  static fromJson({ id, tarea, completado, creado }) {
    const tempTodo = new Todo( tarea );
    
    tempTodo.id         = id;
    tempTodo.tarea      = tarea;
    tempTodo.completado = completado;
    tempTodo.creado     = creado;
    
    return tempTodo;
  }

  constructor( tarea ) {
    this.tarea      = tarea;
    this.id         = new Date().getTime(); //71832964
    this.creado     = new Date();
    this.completado = false;
  }

}
