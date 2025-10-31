const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');

const renderList = () => {
  ul.innerHTML = '';
  todoList.forEach((item) => {
    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${item.id}`;
    checkbox.checked = item.completed ? true : false;

    let label = document.createElement('label');
    label.innerText = item.task;
    label.htmlFor = `todo-${item.id}`;

    li.addEventListener('click', (event) => {
      console.log(event.target.checked);
      //console.log('todo list', todoList);
      item.completed = event.target.checked;
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);

    const delButton = document.createElement('button');
    delButton.textContent = 'X';
    li.appendChild(delButton);

    delButton.addEventListener('click', (event) => {
      const indexOfdeletedItem = todoList.findIndex(
        (arrayItem) => arrayItem == item
      );
      const deletedItem = todoList.splice(indexOfdeletedItem, 1);
      console.log('poistettu', deletedItem, 'päivitetty lista', todoList);
      ul.removeChild(li);
    });
  });
};
renderList();

const addItemDialog = document.querySelector('dialog');

const addTodoButton = document.querySelector('.add-btn');
addTodoButton.addEventListener('click', (event) => {
  console.log('add button clicked');
  addItemDialog.showModal();
});

const submitItemButton = addItemDialog.querySelector('button');
submitItemButton.addEventListener('click', (event) => {
  event.preventDefault();
  const newTaskText = addItemDialog.querySelector('input').value;
  const newTaskItem = {
    id: todoList[todoList.length - 1].id + 1,
    task: newTaskText,
    completed: false,
  };
  todoList.push(newTaskItem);
  addItemDialog.close();
  addItemDialog.querySelector('input').value;
  console.log('new task', newTaskItem);
  renderList();
});
