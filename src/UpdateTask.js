import {useState} from "react";
import {connect} from "react-redux";



function UpdateTask(props) {
    console.log(props)
    const [newTask, setNewTask] = useState(props.grandTask.task);

    function saveButton() {
        props.updateTask(props.grandTask.id, newTask)
        props.toggle()
    }


    return (
        <div>
            <input value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick={saveButton}>Save</button>
            <button onClick={props.toggle}>Cancel</button>
        <hr/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateTask: (id, task) => dispatch({
        type: 'UPDATE_TASK',
        payload: {id, task}})
})


export default connect(null, mapDispatchToProps)(UpdateTask);