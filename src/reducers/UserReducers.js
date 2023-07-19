import { createSlice } from "@reduxjs/toolkit";

//redux slice for managing state of users
export const userSlice = createSlice({
    name: "users",
    initialState: {},
    reducers: {
        updateUser: (state, action) => {
            const newItem = action.payload;
            const oldItem = state[newItem.id]
            state[newItem.id] = {...oldItem, ...newItem} //updates atributes of existing user
            
            return state
        },
        addTask: (state, action) => {
            const userId = action.payload.user.id
            const oldTasks = state[userId].tasks
            state[userId].tasks = [...oldTasks, action.payload] //adds task to given user
            return state
        },
        partUsersInsert: (state, action) => {
            state = {}
            action.payload.map(item => state[item.id] = {...item}) //insert partial info
            return state
        },
        //updates existing task of user
        updateTask: (state, action) => {
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