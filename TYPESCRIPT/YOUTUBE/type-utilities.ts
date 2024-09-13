type Todo = {
    title: string
    description: string
    completed: boolean
};

const todo: Readonly<Todo> = {
    title: "Asistir aula",
    description: "Aprender typescript",
    completed: false,
}

console.log(todo);

//partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const Todo2 = updateTodo(todo, { completed: true });
console.log(Todo2);

//pick
type TodoPreview = Pick<Todo, "title" | "completed">;

const Todo3: TodoPreview = {
    title: "Asistir aula",
    completed: false,
}

//Omit
type TodoPreview2 = Omit<Todo, "description">;

const Todo4: TodoPreview2 = {
    title: "Asistir aula",
    completed: false,
}