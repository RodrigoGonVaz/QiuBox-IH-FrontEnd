
import UserContext from "../../context/User/UserContext";
import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from './../../estados.json'


const Register = () => {

    
    // const algo = data
    // console.log(algo)


    const ctx = useContext(UserContext)

    const { registerUser } = ctx

    const [newUser, setNewUser] = useState({
		nombre: "",
        userName: "",
        userImage: "",
		email: "",
        userShortBio: "",
        estadoMx:"",
		password: "",
		confirmarpassword: ""
	})

	const handleChange = (e) => {
		e.preventDefault()

		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		e.preventDefault()

		registerUser(newUser)

	}



  return (
    <div>
      <div
        className="relative min-h-screen w-100 flex items-center justify-center bg-center"
        style={{
          backgroundImage:
            "url(https://as2.ftcdn.net/v2/jpg/03/45/52/75/1000_F_345527543_mSUaQVFFnIDyqTkNXlkmuKpyv5nvozfQ.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-xl mr-auto">Registrate</h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
              </div>
              <div className="mt-5">
                <div className="form">
                  <div>
                    <label className="text-lg font-semibold text-gray-600 py-2">
                      Sube una foto tuya
                      <abbr title="required" className="text-red-500">
                        *
                      </abbr>
                    </label>
                    <div className="flex items-center py-4">
                      <div className="w-20 h-20 mr-4 flex-none rounded-xl border overflow-hidden">
                        <img
                          className="w-20 h-20 mr-4 object-cover"
                          src="https://i.ibb.co/x133BKX/MrTaco.png"
                          alt="Avatar Upload"
                        />
                      </div>
                      <label className="cursor-pointer ">
                        <span className="focus:outline-none text-white text-md py-2 px-4 rounded-full bg-rosamx-700 hover:bg-green-500 hover:shadow-lg">
                          Subir
                        </span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <div className="md:flex flex-row md:space-x-4 w-full text-md">
                    <div className="mb-3 space-y-2 w-full text-md">
                      <label className="font-semibold text-gray-600 py-2">
                        Nombre <abbr title="required" className="text-red-500">*</abbr>
                      </label>
                      <input
                        placeholder="Tacoberto"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="nombre"
                        id="nombre"
                      />
                      <p className="text-red text-md hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-md">
                      <label className="font-semibold text-gray-600 py-2">
                        Nombre de Usuario <abbr title="required" className="text-red-500">*</abbr>
                      </label>
                      <input
                        placeholder="MrTaco"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="userName"
                        id="userName"
                      />
                      <p className="text-red text-md hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <div className="mb-3 space-y-2 w-full text-md">
                    <label className=" font-semibold text-gray-600 py-2">
                      Email <abbr title="required" className="text-red-500">*</abbr>
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-rosamx-700 justify-center items-center  text-xl rounded-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="mrtaco@mexaverse.com"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-md">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Telefono (+52)
                      </label>
                      <input
                        placeholder="5513843972"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                    
                    {/* <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Estado: <abbr title="required" className="text-red-500"> *</abbr>
                      </label>

                    <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        name="integration[city_id]"
                        id="integration_city_id"
                      >{algo.map(elem =>
                        <option key={elem.id} value={elem.id}>{elem.name}</option>
                          )}
                      </select>
                      <p className="text-sm text-red-500 hidden mt-3" id="error">
                        Please fill out this field.
                      </p>
                    </div> */}
                  </div>

                  <div className="md:flex flex-row md:space-x-4 w-full text-md">
                    <div className="mb-3 space-y-2 w-full text-md">
                      <label className="font-semibold text-gray-600 py-2">
                        Contraseña <abbr title="required" className="text-red-500">*</abbr>
                      </label>
                      <input
                        placeholder="Holamundo1"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        
						name="password"
                        required="required"
                        type="password"
                        id="password"
                      />
                      <p className="text-red text-md hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-md">
                      <label className="font-semibold text-gray-600 py-2">
                        Confirmar Contraseña <abbr title="required" className="text-red-500">*</abbr>
                      </label>
                      <input
                        placeholder="Holamundo1"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        
						name="confirmarpassword"
                        required="required"
                        type="password"
                        id="confirmarpassword"
                      />
                      <p className="text-red text-md hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <div className="flex-auto w-full mb-1 text-md space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      required=""
                      name="message"
                      id=""
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter your comapny info"
                      spellCheck="false"
                    ></textarea>
                    <p className="text-md text-gray-400 text-left my-3">
                      You inserted 0 characters
                    </p>
                  </div>
                  <p className="text-md text-red-500 text-right my-3">
                    Required fields are marked with an asterisk{" "}
                    <abbr title="Required field">*</abbr>
                  </p>
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      {" "}
                      Cancel{" "}
                    </button>
                    <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
