import {useState} from "react";
import {connect} from "react-redux";



function UpdateTodo(props) {
    console.log(props)
    const [newTask, setNewTask] = useState(props.grandTask.task);

    function saveButton() {
        const updatedCard = {
            task: newTask
        }
        props.updateTask(props.grandTask, updatedCard)
        props.toggle()
    }

    return (
        <div>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={saveButton}>Save</button>
            <button onClick={props.toggle}>Cancel</button>
        </div>
    )
}

    const mapDispatchToProps = dispatch => ({
        updateTask: (id, updatedCard) => dispatch ({
            type: 'UPDATE_TASK',
            payload: {id, updatedCard}
        })
    })


export default connect(null, mapDispatchToProps)(UpdateTodo);