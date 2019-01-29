import { fromJS } from 'immutable'
import {
    SEARCH_BLUR,
    SEARCH_FOCUS,
    ADD_HEADER_LIST,
    SEARCH_INFO_ENTER,
    SEARCH_INFO_LEAVE,
    SWITCH_SEARCH_INFO,
} from './constants'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 0,
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
            return state.set('focused', false)
        case ADD_HEADER_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage,
            })
        case SEARCH_INFO_ENTER:
            return state.set('mouseIn', true)
        case SEARCH_INFO_LEAVE:
            return state.set('mouseIn', false)
        case SWITCH_SEARCH_INFO:
            return state.set('page', action.page)
        default:
            return state
    }
}
