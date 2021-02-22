import * as actions from "./action";

const defaultState = {
    loading:true
} 

const reducer = (oldState = defaultState, payload) => {
    switch (payload.type) {
        case actions.WEBSITE_INITIALIZED:
            return {
                ...oldState,
                ...payload.data
            }
            default:
                return {
                    ...oldState
                }
    }
}

export default reducer