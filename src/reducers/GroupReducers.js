import { createSlice } from "@reduxjs/toolkit";

export const groupSlice = createSlice({
    name: "groups",
    initialState: {},
    reducers: {
        partGroupsInsert: (state, action) => {
            state = {}
            action.payload.map(item => state[item.id] = {...item})
            return state 
        },
        updateGroup: (state, action) => {
            const newItem = action.payload;
            const oldItem = state[newItem.id]
            state[newItem.id] = {...oldItem, ...newItem}
            
            return state
        }
    }
})

export const GroupActions = groupSlice.actions

export default groupSlice.reducer