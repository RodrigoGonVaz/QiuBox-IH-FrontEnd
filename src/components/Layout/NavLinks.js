import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'


const NavLinks = () => {

	const ctx = useContext(UserContext)

	const {
		currentUser,
		verifyingToken,
		logoutUser
	} = ctx

	useEffect(() => {
		verifyingToken()
	}, [])

  return (
    <>
      <ul className="font-semibold text-lg flex flex-col justify-end content-end">
        <li>
          <Link
           className="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700"
            to="/"
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            className="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700"
            to="/artesanias"
          >
            Artesanias 🎨
            
          </Link>
        </li>
        <li>
          <Link
            className="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700"
            to="/qiubox"
          >
            Qiubox
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </Link>
        </li>
        {
							currentUser.nombre ?
        <>
        <li>	
          <Link to="/profile" className="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700">
                PERFIL <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg> 
								</Link>
          </li>
          <li>
            <a onClick={() => logoutUser()} href="/" className="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700">Cerrar sesión
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
            </a>
          </li>
					</>
          :
          <>
          <li>
            <Link to="/registro" class="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700">
                      Crear cuenta
            </Link>
          </li>
          <li>
          <Link to="/iniciar-sesion" class="mb-1 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-rosamx-600 to-rosamx-300 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-rosamx-700 hover:to-indigo-700">
										Iniciar sesión
					</Link>
          </li>
          </>
        }
      </ul>
    </>
  );
};

export default NavLinks;
