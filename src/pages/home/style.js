import styled from 'styled-components'

export const HomeWrapper = styled.div`
    // background: #eee;
    width: 65%;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    width: 65%;
    margin: 0 0;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    boder-radius: 2px;
    .banner-img {
        width: 95%;
    }
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #0b0606;
`
export const HomeRight = styled.div`
    // background: blue;
    float: right;
    width: 32%;
    // color: white
    margin: 0 0;
`

export const TopicListWrapper = styled.div`
    float: left;
    margin-left: 15px;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const RecommendListWrapper = styled.div`
    margin-top: 4px;
    margin-left: 10px;
    padding-bottom: 4px;
    min-height: 228px;
    width: 270px;
`

export const RecommendItem = styled.img`
    width: 280px;
    height: 50px;
    padding-top: 4px;
    padding-bottom: 4px;
`
export const TopicItem = styled.div`
    padding: 20px 0;
    margin-left: 10px;
    width: 65%;
    overflow: hidden;
    height: 220px;
    border-bottom: 1px solid #0b0606;
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`
export const TopicInfo = styled.div`
    padding: 10px 0;
    margin-left: 10px;
    width: 500px;
    height: 100px;
    border-bottom: 1px solid #0b0606;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    margin-left: 12px;
    border-bottom: 1px solid #0b0606;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #969696;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
