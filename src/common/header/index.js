import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
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
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>java</SearchInfoItem>
                        <SearchInfoItem>投资</SearchInfoItem>
                        <SearchInfoItem>react</SearchInfoItem>
                        <SearchInfoItem>教育2</SearchInfoItem>
                        <SearchInfoItem>java3</SearchInfoItem>
                        <SearchInfoItem> AAA</SearchInfoItem>
                        <SearchInfoItem>reacts</SearchInfoItem>
                        <SearchInfoItem> ufo</SearchInfoItem>
                        <SearchInfoItem>ENG</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }
    render() {
        const { focused, handleBlur, handleFocus } = this.props
        return (
            <HeaderWrapper>
                <Logo />
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
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </CSSTransition>
                        <span
                            className={
                                focused ? 'focused iconfont' : 'iconfont'
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
})

const mapDispatch = dispatch => ({
    handleFocus() {
        dispatch(actionCreators.handleFocus())
    },
    handleBlur() {
        dispatch(actionCreators.handleBlur())
    },
})
export default connect(
    mapState,
    mapDispatch
)(Header)
