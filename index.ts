import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {

  const todo = res.data as Todo
  const { id, title, completed } = todo;

  logTodo(id, completed, title);
});

const logTodo = (id: number, completed: boolean, title: string) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title with: ${title}
  Is it finished? ${completed}
  `);
}

