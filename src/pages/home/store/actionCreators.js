import { SET_HOME_DATA } from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = data => ({
    type: SET_HOME_DATA,
    data: fromJS(data),
})
export const getHomeData = () => {
    return dispatch => {
        axios
            .get('/api/homeData.json')
            .then(res => {
                dispatch(changeHomeData(res.data.data))
            })
            .catch(e => {
                console.log(e)
            })
    }
}
