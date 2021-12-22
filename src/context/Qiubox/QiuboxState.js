// ./client/src/context/Glasses/GlassesState.js

import { useReducer } from 'react'
import QiuboxContext from './QiuboxContex'
import QiuboxReducer from './QiuboxReducer'

import axiosClient from '../../config/axios'


const QiuboxState = props => {

	const initialState = {
		listQiubox: [],
		singleQiubox: {
			_id: "",
			qiuboxTitulo: "",
			qiuboxPrice: "",
			shortDescription: "",
			qiuboxImage: "",
            arte: "",
			precioID: "",
			productoID: "",
		},
		checkoutURL: ""
	}

	const [globalState, dispatch]	= useReducer(QiuboxReducer, initialState)	


	const getListQiubox = async () => {

		const res = await axiosClient.get("qiubox/leer")

		dispatch({
			type: "GET_ALL_Qiubox",
			payload: res.data.data
		})

	}

	const getSingleQiubox = async (id) => {

		const res = await axiosClient.get(`qiubox/leeruna/${id}`)

		dispatch({
			type: "GET_SINGLE_QIUBOX",
			payload: res.data.data
		})

	}

	const getCheckoutSession = async (precioID) => {

		let quantity = 1

		const form = {
			cart: [{
				quantity,
				price:  precioID
			}]
		}

		const res = await axiosClient.post("api/checkout/create-checkout-session", form)

			
		dispatch({

			type: "CREATE_CHECKOUT_SESSION",
			payload: res.data.session.url // URL DE CHECKOUT DE STRIPE

		})

	}




	return (
		<QiuboxContext.Provider
			value={{
				listQiubox: globalState.listQiubox,
				singleQiubox: globalState.singleQiubox,
				checkoutURL: globalState.checkoutURL,
				getListQiubox,
				getSingleQiubox,
				getCheckoutSession
			}}
		>
			{props.children}
		</QiuboxContext.Provider>
	)


}


export default QiuboxState