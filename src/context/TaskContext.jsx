import createDataContext from "./createDataContext"

const taskReducer = (state, action) => {
    const { tasks } = state
    switch(action.type) {
        case 'addTask' : 
            return { tasks : tasks.concat([action.payload.task]) }
        case 'removeTask' :
            return { tasks : tasks.filter(task => task.id != action.payload.task.id) }
        default: return state
    }
}

const addTask = dispatch => ({ task }) => {
    dispatch({
        type: 'addTask',
        payload : {
            task : task
        }
    })
}

const removeTask = dispatch => ({ task }) => {
    dispatch({
        type: 'removeTask',
        payload : {
            task : task
        }
    })
}


export const { Context, Provider } = createDataContext(taskReducer, {addTask, removeTask}, { tasks : [] })