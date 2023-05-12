//TodoList.js is nested in App.js and has Todo.js nested in it
import Todo from './Todo';

const TodoList = ({ todoList, setTodoList }) => {
    return ( <
        div > {
            todoList.map((todoItem) => ( <
                Todo setTodoList = { setTodoList }
                key = { todoItem.id }
                todoItem = { todoItem }
                todoList = { todoList } > < /Todo>
            ))
        } <
        /div>
    );
};

export default TodoList;