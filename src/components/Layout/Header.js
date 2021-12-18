// ./client/src/Layout/Header.js
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex flex-wrap">
        <nav className="flex w-screen justify-between bg-yellow-300 text-gray-600">
          <div className="w-full xl:px-12 py-6 px-5 flex space-x-12 items-center ">
            <Link className="text-2xl font-bold" to="#">
              <img
                className="h-12 w-auto"
                src="https://i.ibb.co/RHg3b7c/Logo-Qiubox-F.png"
                alt="algo"
              />
            </Link>
            <ul className="hidden md:flex mx-auto px-5 font-semibold space-x-12">
              <li>
                <Link className="hover:text-gray-900" to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="#">
                  Productos
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="#">
                  Qiubox
                </Link>
              </li>
            </ul>
            <div className="flex-grow border-2 border-rosamx-200 py-1 px-3 lg:flex justify-between round hidden">
              <input
                className="flex-grow text-gray-600 focus:outline-none"
                type="text"
                placeholder="Buscar Producto ..."
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-gray-600 transition duration-100 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
            <div className="hidden xl:flex items-center text-gray-600 space-x-5 items-center">
              <Link className="hover:text-gray-900" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link className="flex items-center hover:text-gray-900" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute flex ml-4 -mt-5">
                  <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75"></span>
                  <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
                </span>
              </Link>
            </div>
          </div>
          <Link
            className="flex xl:hidden items-center mr-6 hover:text-gray-900"
            to="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="h-3 w-3 absolute bg-pink-500 opacity-75 inline-flex rounded-full animate-ping"></span>
              <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
            </span>
          </Link>
          <Link
            className="xl:hidden self-center mr-12 hover:text-gray-900"
            to="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Link>
        </nav>
      </header>
    </>
  );
}

//className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700">
