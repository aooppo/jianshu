import React, { Component } from 'react'

import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
//  ({ match }) => (

// )

class Detail extends Component {
    componentDidMount() {
        this.props.getData(this.props.match.params.id)
    }
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{ __html: content }} />
            </DetailWrapper>
        )
    }
}

const mapState = state => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
})
const mapDispatch = dispatch => ({
    getData(id) {
        dispatch(actionCreators.getDetailData(id))
    },
})
export default connect(
    mapState,
    mapDispatch
)(Detail)
