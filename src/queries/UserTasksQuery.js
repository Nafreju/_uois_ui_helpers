import { authorizedFetch } from '../fetches/authorizedFetch'


export const UserTasksQueryJSON = (userId) => ({
    "query":
        `query ($id: ID!) {
            userById (id: $id) {
                id
                name
                surname
                tasks {
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
      "variables": {"id": userId}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const UserTasksQuery = (userId) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserTasksQueryJSON(userId)),
    })