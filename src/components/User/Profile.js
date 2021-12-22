// ./src/components/User/Profile.js

import React from "react";

export default function Profile() {
  return (
    <div>
      <main class="mt-96 bg-rosamx-700">
        <section class="h-100 w-100">
          <div
            class="h-100 w-100"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Vt37v1J/IMG-3574.jpg)",
            }}
          >
          </div>
          <div
            class="top-auto bottom-0 left-0 right-0 w-full text-rosamx-200 pointer-events-none  h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              class="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                class="text-rosamx-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img
                        alt="..."
                        src="https://i.ibb.co/Vt37v1J/IMG-3574.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Conectar
                      </button>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span class="text-sm text-blueGray-400">Amigos</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span class="text-sm text-blueGray-400">Artesanias</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span class="text-sm text-blueGray-400">Comentarios</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-12">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
				  José Alfonso Soteno Fernández
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Metepec, Estado de México
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Maestro alfarero
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    “Árboles de la vida”.
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
					  Este maestro alfarero es originario de Metepec, Estado de México, y forma parte de la legendaria familia Soteno, famosa de manera internacional por posicionar a Metetpc como uno de los lugares más importantes de México en materia de alfarería y por su trabajo en piezas conocidas como “árboles de la vida”.

					<p>El maestro Soteno, quien comenzó su trabajo como alfarero a los 8 años, es creador de “árboles de la vida” monumentales que requieren de un dominio perfecto de la técnica y que implican una gran complejidad. Sus obras se exponen en recintos culturales como el Museo Nacional de Culturas Populares, el Museo de Arte Popular y la Casa de las Américas en La Habana, Cuba.</p>

                      </p>
                      <a href="#pablo" class="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div class="text-sm text-blueGray-500 font-semibold py-1">
                    Made by{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      class="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      @Mexadata
                    </a>{" "}
                    {" "}
                    <a
                      href="https://www.creative-tim.com"
                      class="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
