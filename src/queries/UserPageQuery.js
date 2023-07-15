import { authorizedFetch } from '../fetches/authorizedFetch'

/**
 * Funkce vytvářející JSON string dotaz
 *  
 */
export const UserPageQueryJSON = () => ({
    "query":
        `{
          userPage {
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
            studyPrograms {
              id
            }
            email
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const UserPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserPageQueryJSON()),
    })