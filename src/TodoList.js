import TodoItem from './TodoItem'
import React, {useState} from 'react'

function TodoList() {
    //const todos = ["college essay","study for math test"]
    const [newTodoText,setTodoText] = useState("")
    const [todos,setTodos] = useState([
        {
            title:"college essay",
            id: 1,
            isDone: false,
            price: Math.floor(Math.random()*11)
        }
        ,
        {
            title:"study for math test",
            id: 2,
            isDone: true,
            price: Math.floor(Math.random()*11)
        }
        
    ])

    const handleMarkAsDone = (id) => {
       const index =  todos.findIndex( (todo) => todo.id == id )
       todos[id-1].isDone = !todos[id-1].isDone
       setTodos([...todos])
       alert(todos[id-1].isDone)
    }

    const addTodo = () => {
        const newTodo = {
            title: newTodoText,
            id: todos.length + 1,
            isDone: true
        }
        //todos.push(newTodo)
        setTodos([...todos,newTodo])
    }
    
    return (
        <section>
            <input 
                onChange={(e) => {
                    setTodoText(e.target.value)
                }}
            />
            <input 
                onClick={addTodo} 
                type="submit" 
                value="Add" 
            />
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