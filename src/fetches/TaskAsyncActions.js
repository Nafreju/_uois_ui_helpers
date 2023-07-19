import { UserActions } from "reducers/UserReducers"


/**
 * Async function which inserts task into server and response stores into store via reducer addTask
 * @param {Object} task task object to be inserted
 * @returns {Function} A function which accepts dispatch and getState from redux
 */
export const TaskAsyncInsert = (task) => (dispatch, getState) => {
    const taskMutationJSON = (task) => {
        return {
            query: `mutation ($userId: ID!, $name: String!, $briefDes: String, $detailedDes: String, $reference: String, $dateOfSubmission: DateTime, $dateOfFulfillment: DateTime) {
                        taskInsert(task: {userId: $userId, name: $name, briefDes: $briefDes, detailedDes: $detailedDes, reference: $reference, dateOfSubmission: $dateOfSubmission, dateOfFulfillment: $dateOfFulfillment}) {
                            id
                            msg
                            task {
                                id
                                lastchange
                                name
                                briefDes
                                detailedDes
                                reference
                                dateOfEntry
                                dateOfSubmission
                                dateOfFulfillment
                            }
                        }
                    }`,
            variables: task
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(taskMutationJSON(task))
    }


    return fetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.taskInsert.msg
                if (msg === "fail") {
                    console.log("Insert selhalo")
                } else {
                    const newTask = json.data.taskInsert.task
                    dispatch(UserActions.addTask({...newTask, user:{id:task.userId}}))
                }
                return json
            }
        )   
}

/**
 * Async function which updates task into server and updates response task into store via reducer updateTask
 * @param {*} task task object to be updated
 * @returns A function which accepts dispatch and getState from redux
 */
export const TaskAsyncUpdate = (task) => (dispatch, getState) => {
    const taskMutationJSON = (task) => {
        return {
            query: `mutation ($id: ID!, $name: String, $briefDes: String, $detailedDes: String, $reference: String, $dateOfSubmission: DateTime, $dateOfFulfillment: DateTime, $lastchange: DateTime!) {
                taskUpdate(task: {id: $id, name: $name, briefDes: $briefDes, detailedDes: $detailedDes, reference: $reference, dateOfSubmission: $dateOfSubmission, dateOfFulfillment: $dateOfFulfillment, lastchange: $lastchange}) {
                    id
                    msg
                    task {
                        id
                        lastchange
                        name
                        briefDes
                        detailedDes
                        reference
                        dateOfEntry
                        dateOfSubmission
                        dateOfFulfillment
                    }
                }
            }`,
            variables: task
        }
    }
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(taskMutationJSON(task))
    }

    return fetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.taskUpdate.msg
                if (msg === "fail") {
                    console.log("Insert selhalo")
                } else {
                    const newTask = json.data.taskUpdate.task
                    dispatch(UserActions.updateTask({...newTask, user:{id:task.userId}}))
                }
                return json
            }
        ) 
}

