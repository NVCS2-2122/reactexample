function TodoItem({title,id,isDone,handleMarkAsDone}) {    
    const style = {
        backgroundColor: isDone ? "green" : "red"
    }
    
    return (
        <li 
            onClick={() => {handleMarkAsDone(id)}} 
            style={style}>{title}
        </li>
    )
}

export default TodoItem