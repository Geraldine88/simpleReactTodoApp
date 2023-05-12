//Functional component for each  individual item nested in TodoList.js

import styles from '../style.module.css';

const Todo = ({ todoItem, todoList, setTodoList }) => {
    //Functionality on button under each item
    const deleteTodo = () => {
        //todoList is the list of all items
        //Filter filters a particular array and removes certain elements from it
        //Each element is called 'item' and we want to remove current item from list of item 
        //The code reads: filter the todoList, delete current item from the list of items OR keep items whose id is not equal to the current item's id
        //todoList.filter((item)) loops through all items and filters them
        // item.id !== todoItem.id checks if every item's id(item.id) is equal to the current item's id(todoItem.id)
        //Filter will find the current item (todoItem) by its id and remove it from the list of items (item)
        //Then the rest of the items will be kept in the list of items

        setTodoList(todoList.filter((item) => item.id !== todoItem.id));
    };
    return ( <
        div >
        <
        div className = { styles.todoitem } >
        <
        h3 className = { styles.todoname } > { todoItem.name } < /h3> <
        button onClick = { deleteTodo }
        className = { styles.deletebutton } > Delete Item < /button> < /
        div > <
        /div>
    );
};

export default Todo;