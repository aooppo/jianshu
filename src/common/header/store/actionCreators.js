import { SEARCH_BLUR, SEARCH_FOCUS } from './constants'

export const handleFocus = () => ({
    type: SEARCH_FOCUS,
})

export const handleBlur = () => ({
    type: SEARCH_BLUR,
})
