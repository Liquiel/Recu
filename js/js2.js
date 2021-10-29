function validar() {
  var form = document.form;
  if (formTask.title.value == 0) {
    alert("El nombre del prestamo esta vacio");
    form.title.value = "";
    form.title.focus();
    return false;
  }
  if (formTask.monto.value == 0) {
    alert("La fecha de devoción esta vacia");
    form.monto.value = "";
    form.monto.focus();
    return false;
  }
  if (formTask.fechad.value == 0) {
    alert("La fecha de devoción esta vacia");
    form.fechad.value = "";
    form.fechad.focus();
    return false;
  }
  form.submit();
}

document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let monto = document.getElementById('monto').value;
  let inter = document.getElementById('inter').value;
  let fechad = document.getElementById('fechad').value;
  let tiempo = document.getElementById('tiempo').value;
  console.log(monto)


  //Objeto que servirá para almacenar cada uno de los elementos del form
  let task = {
    title,
    monto,
    inter,
    fechad,
   
    tiempo
  };


  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

//imprimir desde localstorage
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  tasksView.innerHTML += "<h1>Lista de préstamos</h1>"
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let monto = tasks[i].monto;
    let inter = tasks[i].inter;
    let fechad = tasks[i].fechad;
    let tiempo = tasks[i].tiempo ;
 

    tasksView.innerHTML += `<div class="">
        <div id="tablas">
        <table>
        <tr>
        <th>Nombre:</th> 
        <th>Monto:</th>
        <th>Intereses:</th>
        <th>Fecha préstamo:</th> 
        <th>capital:</th> 
         <th>Cuota mensual:</th> 
        </tr> 
        <tr>
        <td>${title} </td>
        <td>${monto}</td>
        <td>${inter}</td>
        <td>${fechad}</td>
        <td>${tiempo}</td>
      
        </tr> 
        
        </div>
      </div>`;
  }
}

getTasks();


