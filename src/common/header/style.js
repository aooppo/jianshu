import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({ href: '/' })`
    background: url(${logo});
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    padding-right: 20px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 5px;
    width: 70px;
    height: 100%;
    font-size: 17px;
    margin: 0 auto;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        padding: 0 0;
        width: 40px;
        margin: 0 0;
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div`
    weight: 100px;
    float: left;
    position: relative;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        line-height: 30px;
        width: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    background: red;
    left: 0
    top: 56px;
    width: 240px; 
    padding-left: 0;
    padding-top: 15px;
    margin-left: 10px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.span`
    width: 140px;
    margin-left: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoItem = styled.a`
    line-height: 15px;
    border: 1px solid #ddd;
    padding: 0 5px;
    font-size: 12px;
    color: #787878;
    border-radius: 3px;
    display: block;
    float: left;
    // margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const SearchInfoList = styled.div`
    overflow: hidden;
    margin-left: 10px;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 12px;
    color: #969696;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 260px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 30px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &.slide-enter {
        transition: all 0.2s ease-out;
    }
    &.slide-enter-active {
        width: 340px;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active {
        width: 260px;
    }
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 340px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    background: #eee;
    height: 38px;
    border-radius: 19px;
    line-height: 38px;
    margin-right: 20px;
    float: right;
    margin-top: 9px;
    padding: 0 35px 0 20px;
    margin: 9px 5px 0 15px;
    font-size: 15px;
    border: 1px solid rgba(236, 97, 73, 0.7);
    color: #777;
    &.reg {
        color: #ec6149;
        background-color: transparent;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
