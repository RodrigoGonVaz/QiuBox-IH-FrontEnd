import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="font-semibold text-lg flex flex-col justify-end content-end">
        <li>
          <Link
            className="flex flex-row text-rosamx-600 hover:text-rosamx-700"
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
            className="text-rosamx-600 hover:text-rosamx-700"
            to="/artesanias"
          >
            Artesanias 🎨
          </Link>
        </li>
        <li>
          <Link
            className="flex flex-row text-rosamx-600 hover:text-rosamx-700"
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
      </ul>
    </>
  );
};

export default NavLinks;
