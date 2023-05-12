//Using ES6 Functions
import styles from '../style.module.css';
import shortid from 'shortid'

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        //todoList will contain all items
        //Adding all old (...todoList) and new (todo) items into the array

        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
        console.log(todoList);
        //So that after entering each item and clicking, the input feild would be vacant
        setTodo("");
    };

    return ( <
        div className = { styles.todoform } >
        <
        form onSubmit = { handleSubmit } >
        <
        input value = { todo }
        onChange = { handleChange }
        className = { styles.todoinput }
        placeholder = "Add Todo Item" / >
        <
        button type = "submit"
        className = { styles.todobutton } > Add < /button> < /
        form > <
        /div>
    )
};

export default Form;