import { fromJS } from 'immutable'
import { GET_DATA } from './constants'

const defaultState = fromJS({
    title: '',
    content: '',
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_DATA:
            return state.merge({
                ...action.data.toJS(),
            })
        default:
            return state
    }
}
