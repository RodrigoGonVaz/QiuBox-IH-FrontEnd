import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
    return (
        <>
            <ul className='ml-5 flex flex-col content-end'>
              <li>
                <Link className="text-rosamx-600 hover:text-rosamx-700" to="/">
                  Home
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
