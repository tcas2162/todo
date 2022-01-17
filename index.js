function App(){
    const[todos, setTodos] = React.useState([
        {
            text: 'gym class at 7',
            isCompleted: false,
        },
        {
            text: 'breakfast with chris at 9:30',
            isCompleted: false,
        },
        {
            text: 'defrost chicken for dinner',
            isCompleted: false,
        },
        {
            text: 'work meeting at 4',
            isCompleted: false,
        },
        {
            text: 'coursework from 7-10',
            isCompleted: false,
        }
    ]);
    

    const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}]
        setTodos(newTodos);
}
    const removeTodo = index => {
       let temp = [...todos];
       temp.splice(index, 1);
       setTodos(temp);
    }
    return (
    <div className="app">
        <div className="todo-list">
    {todos.map((todo,i) => 
      <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
    <TodoForm addTodo={addTodo}/>
    </div>
    </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)