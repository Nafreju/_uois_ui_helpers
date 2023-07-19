import { authorizedFetch } from "fetches/authorizedFetch";

const PartGroupsQueryJSON = (letters) => ({
    "query":
        `query ($letters: String!) {
            groupByLetters (letters: $letters) {
                id
                name
            }
    }`,
    "variables": {"letters": letters}
})

/**
 * Performs groupByLetters request using authorizedFetch
 * @param {string} letters letters substring of group name which members we want to fetch (at least 3)
 * @returns {Promise<Response>} A promise representing groupByLetters
 */
export const PartGroupsQuery = (letters) => 
authorizedFetch('/gql', {
    body: JSON.stringify(PartGroupsQueryJSON(letters)),
})