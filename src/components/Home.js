//Import
import React, { useContext } from "react";
import UserContext from '../context/User/UserContext'

const Home = () => {
  const ctx = useContext(UserContext)

  const {
  	verifyToken
  } = ctx

  return (
    <>
      <section
        className="header relative pt-16 items-center flex h-screen"
        style={{ maxHeight: 860 }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Te invito a un hermoso recorrido a nuestra cultura Mexicana 
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                ¿Porque les llamamos artesanias? 
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  ...LINK...
                </a>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consectetur est, ullam perferendis voluptatum, dignissimos ipsum reiciendis dolorum repudiandae quaerat quod. Repellat iusto neque ut unde magnam commodi officia explicabo.
              </p>
              <div className="mt-12">
                <a
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  href="/learning-lab/tailwind-starter-kit/documentation/download"
                >
                  Comenzar
                </a>
                <a
                  href="https://github.com/creativetimofficial/tailwind-starter-kit"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-rosamx-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inicar Sesión
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"
          alt="..."
          style={{ maxHeight: 860 }}
        />
      </section>

      <section class="mt-40 pb-40 relative bg-blueGray-100">
        <div
          class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
          style={{ height: 80 }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://d1ih8jugeo2m5m.cloudfront.net/2021/08/venta-de-artesanias-por-internet-700x400.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: 95, top: -94 }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Tailwind Starter Kit comes with a huge number of Fully
                        Coded CSS components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="green"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                          </svg>
                        </i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React, Vue
                        and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Tailwind Starter Kit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                href="/learning-lab/tailwind-starter-kit/documentation/css/alerts"
              >
                View All
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="https://diariobasta.com/wp-content/uploads/2021/04/artesanias-mexicanas-emblematicas.jpg"
                  className="w-full align-middle rounded absolute shadow-lg"
                  style={{ maxWidth: 100, left: 145, top: -29, zIndex: 3 }}
                />
                <img
                  alt="..."
                  src="http://astrolabio.com.mx/wp-content/uploads/2015/10/ae35121fca76999d1c597c34fa11f9cf.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg"
                  style={{ maxWidth: 210, left: 260, top: -160 }}
                />
                <img
                  alt="..."
                  src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/inline-images/Oaxaca-artesanias.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg"
                  style={{ maxWidth: 180, left: 40, top: -225, zIndex: 2 }}
                />
                <img
                  alt="..."
                  src="http://www.teorema.com.mx/wp-content/uploads/artesan%C3%ADas.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl"
                  style={{ maxWidth: 200, left: -50, top: 25 }}
                />
                <img
                  alt="..."
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg"
                  style={{ maxWidth: 580, left: -20, top: 210 }}
                />
                <img
                  alt="..."
                  src="https://www.yoinfluyo.com/images/stories/hoy/jun19/260619/artesanias_p.jpg"
                  className="w-full align-middle rounded absolute shadow-xl"
                  style={{ maxWidth: 120, left: 195, top: 95 }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <div className="bg-rosamx-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                    <p className="text-base text-white opacity-75 mt-2">
                      A JavaScript library for building user interfaces
                      maintaned by Facebook and community of developers.
                    </p>
                  </div>
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Vue.js
                    </p>
                    <p className="text-base text-white opacity-75 mt-2">
                      An open-source Model–view–viewmodel JavaScript framework
                      for building user interfaces.
                    </p>
                  </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                    <p className="text-base text-white opacity-75 mt-2">
                      Object-oriented programming language that conforms to the
                      ECMAScript specification.
                    </p>
                  </div>
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Angular
                    </p>
                    <p className="text-base text-white opacity-75 mt-2">
                      a JavaScript-based open-source front-end web framework
                      mainly maintained by Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl">
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
                </i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
              <a
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                href="/learning-lab/tailwind-starter-kit/documentation/vue/alerts"
              >
                View all
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you &#x27;re good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform: {
                    scale: 1,
                    perspective: 1040,
                    rotateY: "-11deg",
                    rotateX: "2deg",
                    rotate: "2deg",
                  },
                }}
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/documentation.png"
              />
            </div>
          </div>
        </div>
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Tailwind Starter Kit is a completly new product built using our
              past experience in web templates. Take the examples we made for
              you and start playing with them.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-pink-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/login.jpg"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/profile.jpg"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/landing.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-rosamx-400 overflow-hidden">
        <div class="container mx-auto pb-64">
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i class="fas fa-code-branch text-xl">Hola</i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
                Open Source
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Since
                <a
                  href="https://tailwindcss.com/"
                  class="text-blueGray-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  TailwindCSS
                </a>
                is an open source project we wanted to continue this movement
                too. You can give this version a try to feel the design and also
                test the quality of the code!
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
              <a
                href="https://github.com/creativetimofficial/tailwind-starter-kit"
                target="_blank"
                class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                rel="noreferrer"
              >
                Github Star
              </a>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="500px"
                height="500px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
              >
                <path
                  fill="#7CB342"
                  d="M82.82,12.292L82.82,12.292c-0.003-0.002-0.005-0.005-0.007-0.007c-7.949-7.734-33.721,4.812-57.562,28.028
	C10.942,54.244,5.786,71.806,13.735,79.547c0.002,0.002,0.005,0.004,0.007,0.007h-0.001c14.304,13.929,37.499,13.926,51.801-0.007
	C89.376,56.324,97.131,26.225,82.82,12.292z"
                />
                <path
                  fill="#F1F7E9"
                  d="M54.033,68.333c-7.265,7.074-15.488,11.844-22.867,13.82c10.207,2.901,21.695,0.441,29.728-7.382
	c13.841-13.489,22.44-30.181,22.44-43.573c-0.001-1.049-0.073-2.044-0.178-3.015C78.992,39.371,68.545,54.196,54.033,68.333z"
                />
                <path
                  fill="#DBEBC7"
                  d="M60.894,70.771c-6.106,5.946-14.207,8.788-22.225,8.538c-2.55,1.241-5.071,2.192-7.502,2.844
	c10.207,2.901,21.695,0.441,29.728-7.382c13.841-13.489,22.44-30.181,22.44-43.573c0-0.658-0.03-1.294-0.071-1.922
	C82.438,42.289,74.028,57.971,60.894,70.771z"
                />
                <path
                  fill="#F1F7E9"
                  d="M23.959,76.517c-1.722,0-4.091-0.303-5.573-1.745c-1.143-1.113-1.719-2.854-1.719-5.179
	c0-7.058,5.195-16.669,13.233-24.5c19.167-18.659,37.725-28.425,46.155-28.425c1.387,0,1.999,0.293,2.104,0.397
	c0.091,0.084,0.331,0.592,0.331,1.803c0,8.119-10,26.075-29.108,44.69C41.3,71.429,31.319,76.517,23.959,76.517z"
                />
                <path
                  fill="#DBEBC7"
                  d="M49.382,59.558C41.3,67.429,31.319,72.517,23.959,72.517c-1.722,0-4.091-0.303-5.573-1.745
	c-0.806-0.785-1.324-1.89-1.563-3.283c-0.093,0.72-0.156,1.427-0.156,2.104c0,2.324,0.576,4.065,1.719,5.179
	c1.481,1.442,3.851,1.745,5.573,1.745c7.36,0,17.341-5.088,25.423-12.959C68.49,44.942,78.49,26.986,78.49,18.867
	c0-0.889-0.13-1.396-0.234-1.638C76.662,26.146,66.814,42.575,49.382,59.558z"
                />
                <path
                  fill="#7A5649"
                  d="M34.768,62.411c-6.624-2.203-11.436-8.38-11.436-15.744c0-9.205,7.464-16.67,16.667-16.67
	c7.42,0,13.637,4.887,15.796,11.586c-3.559,4.531-7.954,9.519-13.39,14.81C39.894,58.841,37.276,60.842,34.768,62.411z"
                />
                <path
                  fill="#EEEAE8"
                  d="M34.143,54.732c-2.5-1.818-4.144-4.745-4.144-8.065c0-5.514,4.486-10.003,10-10.003
	c3.256,0,6.123,1.585,7.95,4.001c-2.803,3.34-6.151,7.015-10.195,10.954C36.545,52.794,35.333,53.822,34.143,54.732z"
                />
                <path
                  fill="#D7CCC8"
                  d="M39.999,40.664c2.315,0,4.424,0.812,6.112,2.143c0.635-0.728,1.251-1.444,1.837-2.142
	c-1.827-2.416-4.694-4.001-7.95-4.001c-5.514,0-10,4.489-10,10.003c0,0.672,0.084,1.322,0.212,1.955
	C31.158,44.085,35.186,40.664,39.999,40.664z"
                />
                <path
                  fill="#568B3F"
                  d="M39.999,29.997c2.171,0,4.233,0.429,6.127,1.188c1.247-0.93,2.482-1.83,3.693-2.671
	c-2.437-1.329-5.148-2.181-8.01-2.432c-1.826,1.372-3.668,2.825-5.517,4.344C37.486,30.154,38.724,29.997,39.999,29.997z"
                />
                <path
                  fill="#568B3F"
                  d="M23.333,46.667c0-1.855,0.316-3.635,0.876-5.302c-1.774,1.807-3.404,3.664-4.866,5.551
	c0.038,3.097,0.781,6.059,2.08,8.726c0.808-1.327,1.709-2.655,2.692-3.968C23.612,50.096,23.333,48.417,23.333,46.667z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
//#ea0599
