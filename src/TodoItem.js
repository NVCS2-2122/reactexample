function TodoItem({title,price,id,isDone,handleMarkAsDone}) {    
    const style = {
        backgroundColor: isDone ? "green" : "red"
    }
    
    return (
        <li 
            onClick={() => {handleMarkAsDone(id)}} 
            style={style}
        >
            {title}
            &nbsp;${price}
        </li>
    )
}

export default TodoItem