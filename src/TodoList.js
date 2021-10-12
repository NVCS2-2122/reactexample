import TodoItem from './TodoItem'
import {useState} from 'react'

function TodoList() {
    //const todos = ["college essay","study for math test"]
    const [todos,setTodos] = useState([
        {
            title:"college essay",
            id: 1,
            isDone: false
        }
        ,
        {
            title:"study for math test",
            id: 2,
            isDone: false
        }
        
    ])

    const handleMarkAsDone = (id) => {
       const index =  todos.findIndex( (todo) => todo.id == id )
       todos[id-1].isDone = true
       setTodos(todos)
       alert(todos[id-1].isDone)
    }
    
    return (
        <section>
            {todos.map((todo) => 
                <TodoItem 
                    handleMarkAsDone={handleMarkAsDone}
                    title={todo.title}
                    key={todo.id}
                    id={todo.id}
                    isDone={todo.isDone}
                />
            )}
        </section>
    )
}

export default TodoList