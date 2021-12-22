import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
    return (
        <>
            <ul>
              <li>
                <Link className="hover:text-rosamx-300" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/artesanias">
                  Artesanias
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="#">
                  Qiubox
                </Link>
              </li>
            </ul>

        </>
    )
}

export default NavLinks
