import React, { Component } from 'react'
import SlideShow from 'react-image-show'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import TopicList from './components/List'
import Recommend from './components/Recommend'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

const urlArray = [
    'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    'https://upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    'https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
    'https://upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
]
class Home extends Component {
    componentDidMount() {
        this.props.getHomeData()
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <SlideShow
                        className="banner-img"
                        images={urlArray}
                        width="100%"
                        imagesWidth="610px"
                        imagesHeight="270px"
                        imagesHeightMobile="56vw"
                        thumbnailsWidth="90%"
                        thumbnailsHeight="5vw"
                        arrows
                        indicators
                        infinite
                        fixedImagesHeight
                    />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                </HomeRight>
                <TopicList />
            </HomeWrapper>
        )
    }
}

const mapDispatch = dispatch => ({
    getHomeData() {
        dispatch(actionCreators.getHomeData())
    },
})
export default connect(
    null,
    mapDispatch
)(Home)
