import { authorizedFetch } from "fetches/authorizedFetch";


const GroupMembershipsQueryJSON = (groupId) => ({
    "query":
        `query ($id: ID!) {
            groupById (id: $id) {
                id
                memberships {
                    user {
                        id
                    }
                }
            }   
    }`,
  "variables": {"id": groupId}
})

/**
 * Performs groupById request using authorizedFetch
 * @param {string} groupId id of group which memberships we want to fetch 
 * @returns {Promise<Response>} A promise representing groupById request
 */
export const GroupMembershipsQuery = (groupId) => 
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupMembershipsQueryJSON(groupId)),
    })