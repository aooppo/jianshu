import { fromJS } from 'immutable'
import { SET_HOME_DATA } from './constants'

const defaultState = fromJS({
    topicList: [],
    bannersList: [],
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_HOME_DATA:
            return state.merge({
                topicList: action.data.get('topicList'),
            })

        default:
            return state
    }
}
