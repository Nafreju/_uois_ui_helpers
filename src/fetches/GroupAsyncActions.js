import { GroupActions } from "reducers/GroupReducers"
import { PartGroupsQuery } from "queries/PartGroupsQuery"
import { GroupMembershipsQuery } from "queries/GroupMembershipsQuery"

/**
 * Ask for groups given by letters
 * @param {string} letters substring of group name of group to be fetched (at least length of 3) 
 * @param {*} query to specify which atributes to fetch
 * @param {*} resultSelector get important part of response
 * @param {*} dispatch to use it on redux-store
 * @param {*} getState 
 * @returns promise
 */
const PartGroupsFetchHelper = (letters, query, resultSelector, dispatch, getState) => {
    const result = query(letters)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.partGroupsInsert(json))
        )
    return result
}

/**
 * Fetches group from server and puts it into store
 * @param {string} letters letters substring of group name of group to be fetched (at least length of 3) 
 * @returns {Function} A function which accepts dispatch and getState from redux
 */
export const PartGroupsFetch = (letters) => (dispatch, getState) => {
    const partGroupsSelector = (json) => json.data.groupByLetters
    const bodyFunc = async () => {
        const partGroupsData = await PartGroupsFetchHelper(letters, PartGroupsQuery, partGroupsSelector, dispatch, getState)
        return partGroupsData
    }
    return bodyFunc()
}

/**
 * Ask for members of group given by id
 * @param {*} groupId group from which members are beeing fetched
 * @param {*} query query for getting memberships
 * @param {*} resultSelector selected correct part of response
 * @param {*} dispatch to use it on redux-store
 * @param {*} getState 
 * @returns promise
 */
const GroupMembershipsFetchHelper = (groupId, query, resultSelector, dispatch, getState) => {
    const result = query(groupId)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.updateGroup(json))
        )
    return result
}

/**
 * Fetches members of group given by id from server. Puts result into store
 * @param {string} groupId id of group to fetch memberships from 
 * @returns {Function} A function which accepts dispatch and getState from redux
 */
export const GroupMembershipsFetch = (groupId) => (dispatch, getState) => {
    const groupByIdSelector = (json) => json.data.groupById
    const bodyFunc = async () => {
        const groupMembershipsData = await GroupMembershipsFetchHelper(groupId, GroupMembershipsQuery, groupByIdSelector, dispatch, getState)
        return groupMembershipsData
    }
    return bodyFunc()
}