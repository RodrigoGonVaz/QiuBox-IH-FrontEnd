import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArteContext from '../../../context/Artesania/ArteContext'





const EditArte = () => {
    
    // 1. ESTADO GLOBAL
	const params = useParams()
	const idArte = params.id
    
	const ctx = useContext(ArteContext)
    
	const {
        getArtesania,
        updateArtesania,
        singleArte 
	} = ctx
    //console.log(singleArte)

	const {
        arteTitle,
        artePrice,
        arteImage,
        shortDescription,
        arteHashTag,
        arteStock,
	} = ctx.singleArte
    
	// 2. ESTADO LOCAL
	const [artesaniaData, setArtesaniaData] = useState({
        arteTitle: "",
        // arteUsername: "",
        artePrice: "",
        arteImage: "",
        shortDescription: "",
        arteHashTag: "",
        arteStock: "",
	})
    
    // 3. FUNCIONES
	// USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
	useEffect(() => {

        getArtesania(idArte)

    }, [])

    // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
    useEffect(() => {

        const {
            arteTitle,
            artePrice,
            arteImage,
            shortDescription,
            arteHashTag,
            arteStock,
        } = ctx.singleArte
        
        setArtesaniaData({
            arteTitle,
            artePrice,
            arteImage,
            shortDescription,
            arteHashTag,
            arteStock,
        })
    }, [singleArte])
    
    const handleChange = (e) => {
        e.preventDefault()
        setArtesaniaData({
            ...artesaniaData,
            [e.target.name]: e.target.value
        })
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        updateArtesania(artesaniaData, idArte)
        
    }
    
    let hashT = singleArte.arteHashTag
    console.log("Este es el hash", hashT)

	return (
		<>
		</>
	)
}

export default EditArte
