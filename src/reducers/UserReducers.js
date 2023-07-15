import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {},
    reducers: {
        addUser: (state, action) => {
            const task = action.payload
            state.push(task)
            return state
        },
        deleteUser: (state, action) => {
            const task = action.payload
            const newState = state.filter(i => i.id !== task.id)
            return newState
        },
        updateUser: (state, action) => {
            const newItem = action.payload;
            const oldItem = state[newItem.id]
            state[newItem.id] = {...oldItem, ...newItem}
            
            return state
        },
        loadFromServer: (state, action) => {
            console.log(action.payload)
            action.payload.map(item => state[item.id] = {...item})
            return state
        },
        addTask: (state, action) => {
            const userId = action.payload.user.id
            const oldTasks = state[userId].tasks
            state[userId].tasks = [...oldTasks, action.payload]
            return state
        },
        partUsersInsert: (state, action) => {
            state = {}
            action.payload.map(item => state[item.id] = {...item})
            return state
        },
        updateTask: (state, action) => {
            console.log("inside reducer", action.payload)
            const userId = action.payload.user.id
            const tasks = state[userId].tasks
            const taskId = action.payload.id

            const newTasks= tasks.map((task, index) => {
                if (task.id === taskId) {
                    return action.payload
                }
                return task
            })
            state[userId].tasks = newTasks
            return state
        }
        
    }
})

export const UserActions = userSlice.actions

export default userSlice.reducer