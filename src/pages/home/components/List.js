import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { TopicListWrapper, ListItem, ListInfo } from '../style'
const showImg = topic =>
    topic.get('img') ? (
        <img alt="" className="pic" src={topic.get('img')} />
    ) : null

const List = ({ topicList }) => (
    <TopicListWrapper>
        {topicList.map((topic, index) => {
            return (
                <Link key={index} to={`/detail/${index}`}>
                    <ListItem key={index}>
                        {showImg(topic)}
                        <ListInfo>
                            <h3 className="title">{topic.get('title')}</h3>
                            <p className="desc">{topic.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                </Link>
            )
        })}
    </TopicListWrapper>
)
const mapState = state => ({
    topicList: state.getIn(['home', 'topicList']),
})

export default connect(
    mapState,
    {}
)(List)
