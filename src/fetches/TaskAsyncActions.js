import { TaskPageQuery } from "queries/TaskPageQuery"
import { UserActions } from "reducers/UserReducers"



export const TaskAsyncInsert = (task) => (dispatch, getState) => {
    const taskMutationJSON = (task) => {
        return {
            query: `mutation ($userId: ID!, $name: String!, $briefDes: String!, $detailedDes: String!, $reference: String!, $dateOfSubmission: DateTime!, $dateOfFulfillment: DateTime!) {
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
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                console.log("task is here", task)
                const msg = json.data.taskInsert.msg
                if (msg === "fail") {
                    console.log("Insert selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const newTask = json.data.taskInsert.task
                    dispatch(UserActions.addTask({...newTask, user:{id:task.userId}}))
                }
                return json
            }
        )   
}


export const TaskAsyncUpdate = (task) => (dispatch, getState) => {
    const taskMutationJSON = (task) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $briefDes: String!, $detailedDes: String!, $reference: String!, $dateOfSubmission: DateTime!, $dateOfFulfillment: DateTime!, $lastchange: DateTime!) {
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
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                //console.log(json)
                //console.log("task as input", task)
                const msg = json.data.taskUpdate.msg
                if (msg === "fail") {
                    console.log("Insert selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const newTask = json.data.taskUpdate.task
                    dispatch(UserActions.updateTask({...newTask, user:{id:task.userId}}))
                }
                return json
            }
        ) 
}


/*
mutation {

  taskInsert(task: {
    userId: "2d9dc9a8-a4a2-11ed-b9df-0242ac120003"
    name: "mujnovejtask"
    briefDes: "nove brief"
    detailedDes: "nove deta"
    reference:"nove ref"
    dateOfEntry: "2023-05-30T05:59:32.689363"
    dateOfSubmission:"2023-05-30T05:59:32.689363"
    dateOfFulfillment: "2023-05-30T05:59:32.689363"
  }){
    id
    msg
    task {
      id
      lastchange
      name
      briefDesc
      detailedDesc
      reference
      dateOfEntry
      dateOfSubmission
      dateOfFulfillment
      event {
        id
      }
      user {
        id
        name
      }
    }
  }
}
tohle vrátí event a user null... proč? k čemu bych měl do parametrů query dávat event id a user id a co reprezentují?
*/