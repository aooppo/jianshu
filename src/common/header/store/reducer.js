import { fromJS } from 'immutable'
import { SEARCH_BLUR, SEARCH_FOCUS } from './constants'

const defaultState = fromJS({
    focused: false,
    list: [],
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
            return state.set('focused', false)
        default:
            return state
    }
}
