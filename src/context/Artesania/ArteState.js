

//Estado Global - STORE 
//Todos los componentes en REACT van a tener acceso a al estado global
//La estructura que se utiliza para generar el estado global se le conoce como FLUX

//1.IMPORT
import { useReducer } from "react";
// import axiosClient from "../../config/axios";
import ArteContext from "./ArteContext";
import ArteReducer from "./ArteReducer";




const ArteState = (props) => {

    //Todo lo que tenga que ver con artesanias se guarda en este estado global
    //1.Initial State

    const initialState = {
        artesanias: [],
        singleArte: {
            _id: "",
            arteTitle: "",
            arteUsername: "",
            artePrice: "",
            arteImage: "",
            shortDescription: "",
            arteHashTag: "",
            arteFav: "",
            arteStock: "",
        },
        hola: "mundo"
    }


    //2. Config de reducer y creacion del estado global- uso del Hook
    const [globalState, dispatch] = useReducer(ArteReducer, initialState)



    //3.Funciones de cambio en estado Global
    const changeText = () => {

        dispatch({
            type: "CHANGE_TEXT",
            //datos reales que cambia el estado global
            payload: "Estoy aprendiendo context sin morir"
        })

    }

   /* const getGuitars = async() => {
        //console.log("Obteniendo Guitarras....") <-- al darle click en comp./guit/index
        const res = await axiosClient.get("guitars/readall")
        console.log(res)
		
        const list = res.data.data
        console.log(list) 

		dispatch({
			type: "GET_GUITARS",
			payload: list
		})
    }

    const getGuitar = async(guitarId) => {

        const res = await axiosClient.get(`guitars/readone/${guitarId}`)
        //console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …} se invoca en Single/index.js
        const selectedGuitar = res.data.data

        dispatch({
            type: "GET_GUITAR",
            payload: selectedGuitar
        })

    }

	const createGuitar = async (form) => {

		const res = await axiosClient.post("guitars/create", form)

		console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

	}

	const updateGuitar = async (form, idGuitar) => {

		const res = await axiosClient.put(`guitars/edit/${idGuitar}`, form)

		const updatedGuitar = res.data.data

		dispatch({
			type: "UPDATE_GUITAR",
			payload: updatedGuitar
		})
	}
    */

    //4. Retorno
    return (
        <ArteContext.Provider 
        value={{
            artesanias: globalState.artesanias,
            hola: globalState.hola,
            singleArte: globalState.singleArte,
            changeText,
            // getGuitars,
            // getGuitar,
            // createGuitar,
            // updateGuitar
        }} >
                {/* Es la representacion de todos los componentes del router - Outlet(de estado global) */}
            {props.children}


        </ArteContext.Provider>
    )

}

export default ArteState