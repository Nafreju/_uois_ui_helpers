import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/UserReducers'
import { Provider } from 'react-redux'
import taskReducer from "reducers/TaskReducers"
import groupReducer from 'reducers/GroupReducers'
import { PartUsersFetch, UserTasksFetch } from 'fetches/UserAsyncActions'
import { PartGroupsFetch, GroupMembershipsFetch } from 'fetches/GroupAsyncActions'
import { TaskAsyncInsert, TaskAsyncUpdate } from 'fetches/TaskAsyncActions'





export const store = configureStore({
    reducer: {
        users : userReducer,
        tasks : taskReducer,
        groups: groupReducer
    },
})

const dispatch = store.dispatch


export const actions = {
    partUsersFetch: (letters) => dispatch(PartUsersFetch(letters)),
    userTasksFetch: (userId) => dispatch(UserTasksFetch(userId)),
    partGroupsFetch: (letters) => dispatch(PartGroupsFetch(letters)),
    groupMembershipsFetch: (groupId) => dispatch(GroupMembershipsFetch(groupId)),
    addTask: (newTask) => dispatch(TaskAsyncInsert(newTask)),
    addTasks: (group, task) => {
        group?.memberships.map(member => (
            dispatch(TaskAsyncInsert({...task, userId:member.user.id}))
        ))
    },
    updateTask: (task) => dispatch(TaskAsyncUpdate(task))
}


export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}