const todos = [
  {
    id: 1,
    title: "My first todo",
    completed: false,
  },
  {
    id: 2,
    title: "My second todo",
    completed: false,
  },
  {
    id: 3,
    title: "My third todo",
    completed: false,
  },
];

// for (let todo of todos) {
//   console.log(todo.id, todo.title, todo.completed);
// }

// forEach, map, filter, find, reduce

// forEach
todos.forEach(function (todo) {
  console.log(todo.id, todo.title);
});
