import { createSlice } from "@reduxjs/toolkit";

//redux slice for managing state of groups
export const groupSlice = createSlice({
    name: "groups",
    initialState: {},
    reducers: {
        partGroupsInsert: (state, action) => {
            state = {}
            action.payload.map(item => state[item.id] = {...item}) //inserts group into state with id as key
            return state 
        },
        updateGroup: (state, action) => {
            const newItem = action.payload;
            const oldItem = state[newItem.id]
            state[newItem.id] = {...oldItem, ...newItem} //updates group with new item
            
            return state
        }
    }
})

export const GroupActions = groupSlice.actions

export default groupSlice.reducer