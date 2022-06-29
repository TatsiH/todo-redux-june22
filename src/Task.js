import {useState} from "react";
import {connect} from "react-redux";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

const Task = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [changeTask, setChangeTask] = useState(" ")
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)

    const toggle = () => {
        setIsOpenUpdate(!isOpenUpdate)
    }

    return(
        <div>
            <li>
                {props.grandTask.task}
                {' '}
                <button onClick={toggle}>Update</button>
                {isOpenUpdate && <UpdateTask toggle={toggle} grandTask={props.grandTask}/>}
                <DeleteTask key={props.grandTask.id} grandTask={props.grandTask}/>
            </li>
            </div>

    )}

export default Task;