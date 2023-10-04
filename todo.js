const todoForms = document.querySelector('.todo-container form')
const container = document.querySelector('.todos')

const add = document.querySelector('button')

const todos = [
  {
    id: '1',
    name: 'First todo',
    priority: 'high',
    deadline: '12-12-2023 10:00',
    createdAt: '04-10-2023 10:00',
    done: false
  },
  {
    id: '2',
    name: 'Second todo',
    priority: 'medium',
    deadline: '11-12-2023 10:00',
    createdAt: '04-10-2023 10:00',
    done: false
  },
  {
    id: '3',
    name: 'Third todo',
    priority: 'high',
    deadline: '10-12-2023 10:00',
    createdAt: '04-10-2023 10:00',
    done: false
  },
  {
    id: '4',
    name: 'Fourth todo',
    priority: 'low',
    deadline: '09-12-2023 10:00',
    createdAt: '04-10-2023 10:00',
    done: false
  },
]
function markTodoAsDone(index) {
  todos[index].done = !todos[index].done
  renderTodos()
  animateTodoOutAndDelete(index)
}

function animateTodoOutAndDelete(index) {
  setTimeout(() => {
    if(todos[index].done) {
      todos[index].deleted = true
      renderTodos()
      setTimeout(() => {
        todos.splice(index, 1)
        renderTodos()
      }, 3500)
    }
  }, 3000)
}

function renderTodo(todos, index){
  return `<div class="todo flex ${todos.deleted? "deleted": ''}">
    <input type="checkbox" onchange="markToDoAsDone(${index})" ${todos.done? 'checkbox': ''} />
    <div class="details">
      <div class="flex">
        <p class="flex ${todos.done? 'crossed': ''}">${todos.name}</p>
        <p class="time">${todos.createdAt}</p>
      </div>
      <div class="flex">
        <p class="priority">${todos.priority}</p>
        <P class="time">before: ${todos.deadline}</p>
      </div>
    </div>
  </div>`;
}

function renderTodos() {
  const html = todos.map(renderTodo).join("");
  container.innerHTML = html;
}

renderTodos()

todoForms.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    name: e.target.todo.value,
    deadline: e.target.deadline,
    priority: e.target.priority.value,
    createdAt: new Date().toUTCString().slice(0, 19),
    id: Date.now()
  }
  todos.push(newTodo)
  renderTodos();
});