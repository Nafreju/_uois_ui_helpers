import { UserActions } from "reducers/UserReducers"
import { PartUsersQuery } from "queries/PartUsersQuery"
import { UserTasksQuery } from "queries/UserTasksQuery"




const PartUsersFetchHelper = (letters, query, resultSelector, dispatch, getState) => {
    const result = query(letters)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(UserActions.partUsersInsert(json))
        )
    return result
}

export const PartUsersFetch = (letters) => (dispatch, getState) => {
    const partUsersSelector = (json) => json.data.userByLetters
    const bodyFunc = async () => {
        const usersData = await PartUsersFetchHelper(letters, PartUsersQuery, partUsersSelector, dispatch, getState)
        return usersData
    }
    return bodyFunc()

}

const UserTasksFetchHelper = (userId, query, resultSelector, dispatch, getState) => {
    const result = query(userId)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(UserActions.updateUser(json))
        )
    return result
}

export const UserTasksFetch = (userId) => (dispatch, getState) => {
    const userByIdSelector = (json) => json.data.userById
    const bodyFunc = async () => {
        const userTasksData = await UserTasksFetchHelper(userId, UserTasksQuery, userByIdSelector, dispatch, getState)
        return userTasksData
    }
    return bodyFunc()
}

