const discriptionTask = document.getElementById('discription-task');
const add_todo = document.getElementById('add-todo-btn');
const todo = document.querySelector('.todos-wrapper');

let tasks = [];
let del =[]; 
let todoItem = [];

!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

function Task(discription){
    this.discription = discription;
    this.complited = false;
}

const createTemplate = (Task, index) => {
    return `
    <div class="todo-item  ${Task.complited ? 'checked' : ''}">
        <div class="description">${Task.discription}</div>
            <div class="buttons">
                <button onclick = "completeTask(${index})"class="btn-delete"  ${Task.complited ? 'checked' : ''}>&#10004</button>
                <button onclick = "deleteTask(${index})"class="btn-delete">&#10008</button>
            </div>               
        </div>
    `
}   
const filterTasks = () =>   {
    const activeTasks = tasks.filter(item => item.complited == false);
    const posiveTasks = tasks.filter(item => item.complited == true);
    tasks = [...activeTasks,...posiveTasks];
}
const fillHtmlList = () => {
    todo.innerHTML = '';
    if(tasks.length >= 0){
        filterTasks();
        tasks.forEach((item, index) => {
        todo.innerHTML += createTemplate(item, index);
        })
        todoItem = document.querySelectorAll('.todo-item');
        console.log(todo);
    } 
}
fillHtmlList();
const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const completeTask = (index) => {
    tasks[index].complited = !tasks[index].complited;
    if(tasks[index].complited){
        todoItem[index].classList.add('checked');
    } else {
        todoItem[index].classList.remove('checked');
    }
    updateLocal();
    fillHtmlList();
}

add_todo.addEventListener('click', () => {
    if(discriptionTask.value !== ''){
        tasks.push(new Task(discriptionTask.value));
    }
    updateLocal();
    fillHtmlList();
    discriptionTask.value = ''
})


const deleteTask = (index) =>{
    todoItem[index].classList.add('deletion');
    setTimeout(() =>{
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();
    }, 500)
}