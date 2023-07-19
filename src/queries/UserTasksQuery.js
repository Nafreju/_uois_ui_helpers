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
 * Performs userById request using authorized fetch
 * @param {string} userId id of user we want to get information about
 * @returns {Promise<Response>} A promise representing userById
 */
export const UserTasksQuery = (userId) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserTasksQueryJSON(userId)),
    })