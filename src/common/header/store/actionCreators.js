import {
    SEARCH_BLUR,
    SEARCH_FOCUS,
    ADD_HEADER_LIST,
    SEARCH_INFO_LEAVE,
    SEARCH_INFO_ENTER,
    SWITCH_SEARCH_INFO,
} from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const addData2List = data => ({
    type: ADD_HEADER_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})

export const handleFocus = () => ({
    type: SEARCH_FOCUS,
})

export const handleBlur = () => ({
    type: SEARCH_BLUR,
})

export const handleMouseEnter = () => ({
    type: SEARCH_INFO_ENTER,
})

export const handleMouseLeave = () => ({
    type: SEARCH_INFO_LEAVE,
})

export const switchSearchInfo = page => ({
    type: SWITCH_SEARCH_INFO,
    page,
})
export const getSearchList = () => {
    return dispatch => {
        axios
            .get('/api/headerList.json')
            .then(res => {
                dispatch(addData2List(res.data.data))
            })
            .catch(e => {
                console.log(e)
            })
    }
}
