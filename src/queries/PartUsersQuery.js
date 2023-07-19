import { authorizedFetch } from "../fetches/authorizedFetch"

export const PartUsersQueryJSON = (letters) => ({
    "query":
        `query ($letters: String!) {
            userByLetters (letters: $letters) {
                id
                name
                surname
                email
            }
      }`,
      "variables": {"letters": letters}
})

/**
 * Performs userByLetters request using authorizedFetch
 * @param {string} letters substring of user name or surname whose info we want to fetch (at least 3)
 * @returns {Promise<Response>} A promise representing userByLetters
 */
export const PartUsersQuery = (letters) => 
    authorizedFetch('/gql', {
        body: JSON.stringify(PartUsersQueryJSON(letters)),
    })
