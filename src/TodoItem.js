import React from 'react'

export default ({children, index, itemOnClick}) => {
    return (
        <li onClick={() => itemOnClick(index)}>{children}</li>
    )
}