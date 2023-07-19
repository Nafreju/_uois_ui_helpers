import { UserActions } from "reducers/UserReducers"
import { PartUsersQuery } from "queries/PartUsersQuery"
import { UserTasksQuery } from "queries/UserTasksQuery"



/**
 * Ask for users given by letters
 * @param {*} letters substring of user's name or surname to be fetched (at least length of 3)
 * @param {*} query to specify which atributes to fetch
 * @param {*} resultSelector get important part of response
 * @param {*} dispatch to use it on redux-store
 * @param {*} getState 
 * @returns promise
 */
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

/**
 * Fetches users from server and puts them int store
 * @param {*} letters 
 * @returns {Function} A function which accepts dispatch and getState from redux
 */
export const PartUsersFetch = (letters) => (dispatch, getState) => {
    const partUsersSelector = (json) => json.data.userByLetters
    const bodyFunc = async () => {
        const usersData = await PartUsersFetchHelper(letters, PartUsersQuery, partUsersSelector, dispatch, getState)
        return usersData
    }
    return bodyFunc()

}


/**
 * Ask for tasks of user given by id
 * @param {*} userId id of user whose task will be fetched
 * @param {*} query query for getting tasks
 * @param {*} resultSelector selected correct part of response
 * @param {*} dispatch to use it on redux-store
 * @param {*} getState 
 * @returns promise
 */
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

/**
 * Fetches user tasks from server and puts it into store
 * @param {*} userId 
 * @returns {Function} A function which accepts dispatch and getState from redux
 */
export const UserTasksFetch = (userId) => (dispatch, getState) => {
    const userByIdSelector = (json) => json.data.userById
    const bodyFunc = async () => {
        const userTasksData = await UserTasksFetchHelper(userId, UserTasksQuery, userByIdSelector, dispatch, getState)
        return userTasksData
    }
    return bodyFunc()
}

