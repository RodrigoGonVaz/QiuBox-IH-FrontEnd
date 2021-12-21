

//Estado Global - STORE 
//Todos los componentes en REACT van a tener acceso a al estado global
//La estructura que se utiliza para generar el estado global se le conoce como FLUX

//1.IMPORT
import { useReducer } from "react";
import axiosClient from "../../config/axios";
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
    }


    //2. Config de reducer y creacion del estado global- uso del Hook
    const [globalState, dispatch] = useReducer(ArteReducer, initialState)



    //3.Funciones de cambio en estado Global
        const getArtesanias = async() => {
        //console.log("Obteniendo Guitarras....") <-- al darle click en comp./guit/index
        const res = await axiosClient.get("artesanias/leer")
        console.log(res)
		
        const list = res.data.data
        console.log(list) 

		dispatch({
			type: "GET_ARTESANIAS",
			payload: list
		})
    }

        const getArtesania = async(arteId) => {

        const res = await axiosClient.get(`artesanias/leeruna/${arteId}`)
        //console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …} se invoca en Single/index.js
        const selectedArte = res.data.data

        dispatch({
            type: "GET_ARTESANIA",
            payload: selectedArte
        })
    }

	    const createArtesania = async (form) => {
    		const res = await axiosClient.post("artesanias/crear", form)
		    console.log(res) 
	}

	    const updateArtesania = async (form, idArte) => {

            const res = await axiosClient.put(`artesanias/editar/${idArte}`, form)

            const updateArtesania = res.data.data

            dispatch({
                type: "UPDATE_ARTESANIA",
                payload: updateArtesania
            })
	}

        const deleteArtesania = async (idArte) => {
            const res = await axiosClient.delete(`artesanias/borrar/${idArte}`)
    }
    

    //4. Retorno
    return (
        <ArteContext.Provider 
        value={{
            artesanias: globalState.artesanias,
            hola: globalState.hola,
            singleArte: globalState.singleArte,
            getArtesanias,
            getArtesania,
            createArtesania,
            updateArtesania,
            deleteArtesania
        }} >
                {/* Es la representacion de todos los componentes del router - Outlet(de estado global) */}
            {props.children}


        </ArteContext.Provider>
    )

}

export default ArteState