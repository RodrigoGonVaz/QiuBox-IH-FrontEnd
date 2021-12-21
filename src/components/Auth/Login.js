// ./client/src/Auth/Login.js
import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'


export default function Login() {

  const ctx = useContext(UserContext)

  const {
    loginUser
  } = ctx


  // 1. ESTADO LOCAL
  const [logUser, setLogUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
		e.preventDefault()

		setLogUser({
			...logUser,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		loginUser(logUser)

	}

	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://cdn.worldvectorlogo.com/logos/ironhack-1.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Aún sin cuenta? &nbsp;
          <Link to="/registro">
            <a className="font-medium text-yellow-500 hover:text-yellow-300">
              Regístrate aquí.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form 
            className="space-y-6"
            onSubmit={(e) => { handleSubmit(e) }}
          >
            <div>
              <label for="email" className="block text-sm font-medium text-gray-700">
                Tu correo electrónico
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => { handleChange(evt) }} 
                  name="email" 
                  type="email" 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" className="block text-sm font-medium text-gray-700">
                Tu contraseña
              </label>
              <div className="mt-1">
                <input 
                  onChange={(evt) => { handleChange(evt) }} 
                  name="password" 
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>


            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Acceder a tu cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
	)
}

      // <main>
      //   <section className="relative w-full h-full">
      //     <div
      //       className="absolute top-0 w-full h-full bg-rosamx-800"
      //       style={{
      //         backgroundImage:
      //           "url(https://as2.ftcdn.net/v2/jpg/03/45/52/75/1000_F_345527543_mSUaQVFFnIDyqTkNXlkmuKpyv5nvozfQ.jpg)",
      //         backgroundSize: "100%",
      //       }}
      //     ></div>
      //     <div className="container mx-auto px-4 h-full">
      //       <div className="flex content-center items-center justify-center h-full">
      //         <div className="w-full lg:w-4/12 px-4">
      //           <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-rosamx-400 mt-60 border-0">
      //             <div className="rounded-t mb-0 px-6 py-6">
      //               <div className="text-center mb-3">
      //                 <h6 className="text-gray-600 text-sm font-bold">
      //                   Iniciar Sesión con
      //                 </h6>
      //               </div>
      //               <div className="btn-wrapper text-center">
      //                 <button
      //                   className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
      //                   type="button"
      //                   style={{ transition: "all .15s ease" }}
      //                 >
      //                   <img
      //                     alt="..."
      //                     className="w-5 mr-1"
      //                     src="https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/main/Login%20Page/react-login-page/src/assets/img/google.svg"
      //                   />
      //                   Github
      //                 </button>
      //                 <button
      //                   className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
      //                   type="button"
      //                   style={{ transition: "all .15s ease" }}
      //                 >
      //                   <img
      //                     alt="..."
      //                     className="w-5 mr-1"
      //                     src="https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/main/Login%20Page/react-login-page/src/assets/img/google.svg"
      //                   />
      //                   Google
      //                 </button>
      //               </div>
      //               <hr className="mt-6 border-b-1 border-gray-400" />
      //             </div>
      //             <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      //               <div className="text-gray-500 text-center mb-3 font-bold">
      //                 <small>O Iniciar sesión con correo</small>
      //               </div>
      //               <form onSubmit={(e) => { handleSubmit(e) }}>
      //                 <div className="relative w-full mb-3">
      //                   <label
      //                     className="block uppercase text-gray-700 text-xs font-bold mb-2"
      //                     htmlFor="grid-password"
      //                   >
      //                     Email
      //                   </label>
      //                   <input
      //                     onChange={(e) => { handleChange(e) }} 
      //                     name="email" 
      //                     type="email" 
      //                     className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
      //                     placeholder="Email"
      //                     style={{ transition: "all .15s ease" }}
      //                   />
      //                 </div>

      //                 <div className="relative w-full mb-3">
      //                   <label
      //                     className="block uppercase text-gray-700 text-xs font-bold mb-2"
      //                     htmlFor="grid-password"
      //                   >
      //                     Password
      //                   </label>
      //                   <input
      //                     onChange={(e) => { handleChange(e) }} 
      //                     type="password"
      //                     name="password"
      //                     className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
      //                     placeholder="Password"
      //                     style={{ transition: "all .15s ease" }}
      //                   />
      //                 </div>
      //                 <div>
      //                   <label className="inline-flex items-center cursor-pointer">
      //                     <input
      //                       id="customCheckLogin"
      //                       type="checkbox"
      //                       className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
      //                       style={{ transition: "all .15s ease" }}
      //                     />
      //                     <span className="ml-2 text-sm font-semibold text-gray-700">
      //                       Recuerdame
      //                     </span>
      //                   </label>
      //                 </div>

      //                 <div className="text-center mt-6">
      //                   <button
      //                     className="bg-rosamx-600 text-white active:bg-rosamx-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
      //                     type="button"
      //                     style={{ transition: "all .15s ease" }}
      //                   >
      //                     Iniciar Sesión 🪅
      //                   </button>
      //                 </div>
      //               </form>
      //             </div>
      //           </div>
      //           <div className="flex flex-wrap mt-6">
      //             <div className="w-1/2">
      //               <a
      //                 href="#pablo"
      //                 // onClick={(e) => e.preventDefault()}
      //                 className="text-gray-300"
      //               >
      //                 <small>Forgot password?</small>
      //               </a>
      //             </div>
      //             <div className="w-1/2 text-right">
      //               <a
      //                 href="#pablo"
      //                 // onClick={(e) => e.preventDefault()}
      //                 className="text-gray-300"
      //               >
      //                 <small>Create new account</small>
      //               </a>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </main>