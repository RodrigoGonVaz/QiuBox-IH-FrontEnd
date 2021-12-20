import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ArteContext from "../../context/Artesania/ArteContext";

const Artesanias = () => {
  //Estado Global
  const ctx = useContext(ArteContext);
  console.log(ctx) //*{artesanias: Array(0), hola: 'mundo', singleArte: {…}, changeText: ƒ}

  const { artesanias, getArtesanias } = ctx; //<-- destruccturacion
  const arte = ctx.artesanias
  const hashArte = arte[0]
  console.log("Estas son", hashArte)

  //*Estado Local
  useEffect(() => {
    getArtesanias();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Listado de Artesanias
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0">
            <Link to="/artesanias/crear">
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rosamx-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Vender Artesania
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white">
					<div>
						<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {artesanias.map((element, i) => {
		return (
        <div className="wrapper bg-rosamx-600 antialiased text-gray-900">
          <div>
          <Link to={`/artesanias/${element._id}`}>
            <img
              src={element.arteImage}
              alt=" random imgee"
              className="w-full object-cover object-center rounded-lg shadow-md"
            />
          </Link>

            <div className="relative px-4 -mt-16  ">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                  {element.arteHashTag.map((elem, i) => {
		                return (                
                <div className="flex flex-wrap ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    <span className="flex flex-wrap inline-block bg-rosamx-800 rounded-full px-3 py-1 text-xxs font-semibold text-gray-100 mr-2 mb-2">#{elem}</span>
                </div>
                )})}
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {element.arteTitle}
                </h4>

                <div className="mt-1">
                  ${element.artePrice}
                  <span className="text-gray-600 text-sm"> /mxn</span>
                </div>
                <div className="mt-4">
                  <span className="text-rosamx-700 text-md font-semibold">
                  En stock: {element.arteStock}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-600 text-sm">
                  Descripción: {element.shortDescription}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )})}
      </div>
          </div>
        </div>
    </>
  );
};

export default Artesanias;
