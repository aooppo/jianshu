import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style'
import { actionCreators } from './store'

class Header extends Component {
    getSearchInfo = () => {
        const {
            focused,
            list,
            page,
            totalPage,
            mouseIn,
            handleMouseEnter,
            handleMouseLeave,
            switchSearchInfo,
        } = this.props
        const jsList = list.toJS()
        const data = []
        if (jsList.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                let item = jsList[i]
                data.push(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch
                        onClick={() =>
                            switchSearchInfo(page, totalPage, this.spinIcon)
                        }
                    >
                        <span
                            ref={icon => {
                                this.spinIcon = icon
                            }}
                            className="iconfont spin"
                        >
                            &#xe851;
                        </span>
                        <span>换一换</span>
                    </SearchInfoSwitch>
                    <SearchInfoList>{data}</SearchInfoList>
                </SearchInfo>
            )
        }
    }

    render() {
        const { focused, list, handleBlur, handleFocus } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleFocus(list)}
                                onBlur={handleBlur}
                            />
                        </CSSTransition>
                        <span
                            className={
                                focused
                                    ? 'focused iconfont zoom'
                                    : 'iconfont zoom'
                            }
                        >
                            &#xe60b;
                        </span>
                        {this.getSearchInfo()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapState = state => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
})

const mapDispatch = dispatch => ({
    handleFocus(list) {
        dispatch(actionCreators.handleFocus())
        if (list.size === 0) {
            dispatch(actionCreators.getSearchList())
        }
    },
    handleBlur() {
        dispatch(actionCreators.handleBlur())
    },
    handleMouseEnter() {
        dispatch(actionCreators.handleMouseEnter())
    },
    handleMouseLeave() {
        dispatch(actionCreators.handleMouseLeave())
    },
    switchSearchInfo(page, totalPage, spinIcon) {
        let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, '')
        if (originAngle) {
            originAngle = parseInt(originAngle, 10)
        } else {
            originAngle = 0
        }
        spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
        if (page + 1 < totalPage) {
            dispatch(actionCreators.switchSearchInfo(page + 1))
        } else {
            dispatch(actionCreators.switchSearchInfo(0))
        }
    },
})
export default connect(
    mapState,
    mapDispatch
)(Header)
