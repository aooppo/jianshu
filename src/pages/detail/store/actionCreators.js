import { GET_DATA } from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const getData = data => ({
    type: GET_DATA,
    data: fromJS(data),
})
export const getDetailData = id => {
    return dispatch => {
        axios
            .get(`/api/detail/${id}.json`)
            .then(res => {
                dispatch(getData(res.data))
            })
            .catch(e => {
                dispatch(
                    getData({
                        title: 'not found',
                        content: 'Ops. Error',
                    })
                )
            })
    }
}
