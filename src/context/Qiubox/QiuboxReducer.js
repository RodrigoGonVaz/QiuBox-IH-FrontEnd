// ./client/src/context/Glasses/GlassesReducer.js


const reducer = (globalState, action) => {

	switch(action.type){

		case "CREATE_CHECKOUT_SESSION":
			return {
				...globalState,
				checkoutURL: action.payload
			}

		case "GET_SINGLE_QIUBOX":
			return {
				...globalState,
				singleQiubox: action.payload
			}

		case "GET_ALL_QIUBOX":
			return {
				...globalState,
				listQiubox: action.payload
			}

		default:
			return globalState


	}


}

export default reducer