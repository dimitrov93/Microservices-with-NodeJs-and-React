import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  const { id, title, completed } = res.data;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with Id: ${id}
    Has title of: ${title}
    Is it finished? ${completed}`);
};
