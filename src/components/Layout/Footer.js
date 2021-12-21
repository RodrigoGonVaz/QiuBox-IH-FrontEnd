// ./client/src/Layout/Footer.js
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="mt-10 relative bg-yellow-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{"height": 80}}
        >
          <svg
            className="bg-rosamx-600 absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-rosamx-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Cuéntanos tu experiencia!</h4>
              <h5 className="text-lg mt-0 mb-2 text-sky-900">
              Encuéntranos en cualquiera de estas plataformas, respondemos de 1-2 días hábiles.
              </h5>
              <div className="mt-6">
                <Link
                  to="https://www.twitter.com/creativetim"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter  bg-white text-lightBlue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </Link>
                <Link
                  to="https://www.facebook.com/creativetim"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square bg-white text-lightBlue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </Link>
                <Link
                  to="https://www.dribbble.com/creativetim"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </Link>
                <Link
                  to="https://www.github.com/creativetimofficial"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github bg-white text-blueGray-800 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </Link>
              </div>
              <p className="text-sm mt-6 text-blueGray-500 font-semibold">
                Actualmente v1.1.0. IronHack
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="text-sky-900"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Proyect
                </a>
                , docs
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  targe="_blank"
                  className="text-sky-900"
                >
                  {" "}
                  Taco lover
                </a>
                .
              </p>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Qiubox Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Términos y condiciones 
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Aviso de Privacidad
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sky-900 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-sky-900" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © 2021 Qiubox by{" "}
                <a
                  href="https://twitter.com/MexaVerse"
                  className="text-sky-900 hover:text-blueGray-800"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @Mexaverse
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
