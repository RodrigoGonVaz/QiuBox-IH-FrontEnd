import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
    return (
        <>
            <ul className='font-semibold text-lg flex flex-col justify-end content-end'>
              <li>
                <Link className="flex flex-row text-rosamx-600 hover:text-rosamx-700" to="/">
                Home 
                  <svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>
                  
                </Link>
              </li>
              <li>
                <Link className="text-rosamx-600 hover:text-rosamx-700" to="/artesanias">
                  Artesanias
                </Link>
              </li>
              <li>
                <Link className="text-rosamx-600 hover:text-rosamx-700" to="#">
                  Qiubox
                </Link>
              </li>
            </ul>

        </>
    )
}

export default NavLinks
