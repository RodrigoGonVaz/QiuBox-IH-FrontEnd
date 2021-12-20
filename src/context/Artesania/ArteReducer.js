

const reducer = (globalState, action) => {
    switch (action.type) {

        case "GET_ARTESANIAS":
            return {
                ...globalState,
                artesanias: action.payload //action = dispatch
            }

        case "GET_ARTESANIA":
        case "UPDATE_ARTESANIA":
        case "DELETE_ARTESANIA":
            return {
                ...globalState,
                singleArte: action.payload //action = dispatch
            }
        


        default:
            return globalState
    }
}

export default reducer