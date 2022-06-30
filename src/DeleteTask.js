import {connect} from "react-redux";

function DeleteTask (props) {
    return(
        <div>
            <button onClick={() => props.deleteTask(props.grandTask.id)}>Del</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch({
        type: "DELETE_TASK",
        payload: id,
    })
})

export default connect(null, mapDispatchToProps)(DeleteTask);