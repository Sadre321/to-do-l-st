const input = document.querySelector('.input');
const submitBtn = document.querySelector('.add');
const area = document.querySelector('.list-group');
const li = document.createElement('li');


submitBtn.addEventListener('click',AddToDo);
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-trash-alt')) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-check')) {
      e.target.parentElement.parentElement.parentElement.classList.toggle('done');
    }
  });


function AddToDo(){
    let todo = input.value;
    li.classList.add('todo');
    li.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
        <p>${todo}</p>
        <span>
            <button class="btn btn-primary"><i class="fas fa-check"></i></button>
            <button class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </span>
    </li>
    `;

    area.appendChild(li);
    input.value = '';
}