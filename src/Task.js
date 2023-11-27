export let Task = (props) => {
    return(
        <div  className="task" style={{background : props.completed ? "green" : "red"}}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>x</button>
      </div>)
}