const initialState = {
    title: "To do list",
    todoList: [
        {
            id: Math.random(),
            task: "Task 1",
            isDone: false
        },
        {
            id: Math.random(),
            task: "Task 2",
            isDone: false
        },
        {
            id: Math.random(),
            task: "Task 3",
            isDone: false
        },
        {
            id: Math.random(),
            task: "Task 4",
            isDone: false
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CREATE_TASK":
            return {...state, todoList: [...state.todoList, action.payload]};
        case "DELETE_TASK":
            console.log(action.payload)
            const list = initialState.todoList.filter(el => el.id !== action.payload)
            return {...state, list};
        case 'UPDATE_TASK':
            const newTodo = state.todoList.map(el => el.id === action.payload.id ? {...el, task:action.payload.task} : el)
            return {...state, todoList: newTodo}
        default:
            return state;
    }
}
export default reducer;