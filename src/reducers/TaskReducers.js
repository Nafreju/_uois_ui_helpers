import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuid1 } from "uuid"

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {},
    reducers: {
        //taskInsert
        insertTask: (state, action) => {
            const task = action.payload;
            const id = task['id'] || uuid1()
            if (!task['id']) {
                task['id'] = id
            }
            
            state[id] = task
            return state
        },
        loadFromServer: (state, action) => {
            console.log(action.payload)
            //const tasks = action.payload
            //state = {...state, ...tasks}
            action.payload.map(item => state[item.id] = {...item})
            return state
        },
        updateTask: (state, action) => {
            const newTask = action.payload;
            state[newTask.id] = newTask
            
            return state
        } 
        
    }
})

export const TaskActions = taskSlice.actions

export default taskSlice.reducer