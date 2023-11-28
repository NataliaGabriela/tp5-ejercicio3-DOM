class Tareas {
  constructor(tareaParam) {
    this.tarea = tareaParam;
  }
}

const crearTarea = (e) => {
  e.preventDefault();
  console.log(e);
  const inputTarea = document.querySelector(".inputTarea").value;
  console.log(inputTarea);

  const sectionForm = document.querySelector(".sectionForm");
  const botonLista = document.createElement("button");
  botonLista.innerHTML = "Agregar a Lista";
  botonLista.className = "btn btn-primary btnLista w-100";
  sectionForm.appendChild(botonLista);

  const btnLista = document.querySelector(".btnLista");
  btnLista.addEventListener(
    "click",
    agregarALista = () => {
      const tarea = new Tareas(inputTarea);
      const listaTareas = []; 
      listaTareas.push(tarea);
      const titulo = document.createElement('h2');
      titulo.innerHTML = "Lista de Tareas";
      titulo.className = "mt-3";
      sectionForm.appendChild(titulo);
      const ul = document.createElement("ul");
      ul.className = "list-group ulLista my-3"
      sectionForm.appendChild(ul);
      const ulLista = document.querySelector(".ulLista");
        const li = document.createElement("li");
        li.innerHTML = listaTareas[0].tarea;
        li.className = "list-group-item"
        ulLista.appendChild(li);
        const btnEliminarTarea = document.createElement("button");
        btnEliminarTarea.innerHTML = "Eliminar";
        btnEliminarTarea.className = "btn btn-primary btnEliminarTarea w-100";
        sectionForm.appendChild(btnEliminarTarea);
        const btnEliminar = document.querySelector(".btnEliminarTarea");
        btnEliminar.addEventListener(
            "click",
            eliminar = () => {
                console.log(listaTareas[0].tarea)
             listaTareas.splice(0,1);
             if (listaTareas[0] == null) {
                alert('La tarea se eliminó')
                console.log(listaTareas[0])
             }
     
    });
        
});
  

};

const formularioTareas = document.querySelector("form");
formularioTareas.addEventListener("submit", crearTarea);
