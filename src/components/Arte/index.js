import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import ArteContext from '../../context/Artesania/ArteContext'



const Artesanias = () => {

    //Estado Global
    const ctx = useContext(ArteContext)
    //console.log(ctx) //*{artesanias: Array(0), hola: 'mundo', singleArte: {…}, changeText: ƒ}
    

    const { guitars, hola, changeText, getGuitars } = ctx //<-- destruccturacion

    //*Estado Local
	// useEffect(() => {
	// 	getGuitars()
	// },[]) //cuando hay un arreglo vacio significa que va a ejecutarse 1 sola vez

    return (
        <div>
            Aqui va todo {hola}
        </div>
    )
}

export default Artesanias
