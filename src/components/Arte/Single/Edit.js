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
        {/* {hashT.map((elem) =>{
            return (
                <p>HOLA</p>
            )
        })} */}
      <div className="container mx-auto mb-60">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="mt-20 w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  `url(${artesaniaData.arteImage})`,
              }}
            ></div>
            <section className="max-w-4xl p-6 mx-auto bg-rosamx-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
              <h1 className="text-xl font-bold text-white capitalize dark:text-white">
                Vende tu producto 🪅
              </h1>
              <form onSubmit={(event) => { handleSubmit(event) }}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-white dark:text-gray-200" htmlFor="username">
                    Titulo de la Artesania
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }
                      name="arteTitle"
                      id="username"
                      type="text"
                      value={artesaniaData.arteTitle}
                      placeholder="Barro Negro de Oaxaca"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="emailAddress"
                    >
                      $ Precio (MXN)
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }
                      name="artePrice"
                      id="emailAddress"
                      type="number"
                      value={artesaniaData.artePrice}
                      placeholder="$525.89"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>



                  <div>
                    <label className="text-white dark:text-gray-200" htmlFor="arteHashTag">
                      HashTag #1
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }
                      name="arteHashTag" 
                      id="arteHashTag"
                      type="text"
                      value={artesaniaData.arteHashTag}
                      placeholder="#BarroNegro"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>
                 
{/* 
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      HashTag #2
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }
                      name="arteHashTag" 
                      id="arteHashTag"
                      type="text"
                      placeholder="#Oaxaca"
                      value={artesaniaData.arteHashTag[1]}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div> */}


                  {/* <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      Usuario
                    </label>
                    <select 
                      onChange={ (event) => { handleChange(event) } }
                      name="arteUsername" 
                      id="arteUsername"
                      type="arteUsername"
                      placeholder="Hola"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option className="border-pink-500" disableselected="false" value="">--Seleccionar 🌮--</option>
                        <option value={newArtesania.arteUsername}> {newArtesania.arteUsername} </option>
                    </select>
                  </div> */}

                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      Participar en Qiubox
                    </label>
                    <div className="mt-3 flex justify-center">
                        <div>
                            <div className="form-check">
                            <input
                            onChange={ (event) => { handleChange(event) } }
                            name="arteQiubox"
                            className="form-check-input appearance-none h-4 w-4 border border-rosamx-600 rounded-sm bg-white checked:bg-rosamx-600 checked:border-rosamx-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label inline-block text-gray-100" htmlFor="flexCheckDefault">
                                Si quiero participar 
                            </label>
                            </div>
                        </div>
                    </div>
                  </div>
                  
                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      En Stock
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }
                      name="arteStock"
                      id="arteStock"
                      type="number"
                      placeholder="25"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      Descripción del producto
                    </label>
                    <textarea
                      onChange={ (event) => { handleChange(event) } }
                      name="shortDescription" 
                      id="shortDescription"
                      value={artesaniaData.shortDescription}
                      placeholder="Producto totalmente hecho a mano..."
                      type="textarea"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      className="text-white dark:text-gray-200"
                      htmlFor="passwordConfirmation"
                    >
                      Imagen prueba #2
                    </label>
                    <input
                      onChange={ (event) => { handleChange(event) } }   
                      id="file-upload"
                      name="arteImage"
                      type="text"
                      value={artesaniaData.arteImage}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white">
                      Image
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span className="">Upload a file</span>
                            <input
                              onChange={ (event) => { handleChange(event) } }                         
                              id="file-upload"
                              name="arteImage"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 text-white">or drag and drop</p>
                        </div>
                        <p className="text-xs text-white">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
		</>
	)
}

export default EditArte
