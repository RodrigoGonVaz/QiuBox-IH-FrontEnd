import { useReducer } from 'react'

import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axiosClient from './../../config/axios'


const UserState = (props) => {

	// 1. INITIAL STATE
	const initialState = {
		currentUser: {
			nombre: "",
			apellido: "",
			estadoMx: "",
			userName: "",
			email: "",
            telefono: "",
            userImage: "",
            userShortBio: "",
            arte: "",
			password: ""
		},
        authStatus: false
	}

	// 2. CONFIGURACIÓN DEL REDUCER
	const [globalState, dispatch] = useReducer(UserReducer, initialState)


	// 3. FUNCIONES
	const registerUser = async (form) => {

		const res = await axiosClient.post("users/registro", form)
		console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

        const token = res.data.data

        dispatch({
            type: "REGISTRO_EXITOSO",
            payload: token
        })

    }

    const loginUser = async (form) =>{
        
        const res = await axiosClient.post("users/iniciar-sesion", form)
		console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

        const token = res.data.data

        dispatch({
            type: "LOGIN_EXITOSO",
            payload: token
        })
    }

    const verifyingToken = async () => {

		const token = localStorage.getItem("token")

		// ANEXAR TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
		if(token) {
			axiosClient.defaults.headers.common["x-auth-token"] = token
		} else {
			delete axiosClient.defaults.headers.common["x-auth-token"]
		}

		try {
			
			const res = await axiosClient.get("users/verifytoken")

			console.log(res)

			const userData = res.data.data

			dispatch({
				type: "GET_DATA_USER",
				payload: userData
			})

		} catch (error) {
			console.log(error)
		}


	}

    const logoutUser = async () => {

		dispatch({
            type: "LOGOUT_USUARIO"
        })

	}


	// 4. RETORNO
	return (
		<UserContext.Provider
			value={{
				currentUser: globalState.currentUser,
                authStatus: globalState.authStatus,
				registerUser,
                loginUser,
                verifyingToken,
                logoutUser
			}}
		>

			{props.children}

		</UserContext.Provider>

	)

}




export default UserState