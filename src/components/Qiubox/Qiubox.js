// ./client/src/components/Glasses.js
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import QiuboxContext from '../../context/Qiubox/QiuboxContex'



export default function Qiubox() {

	// GLOBAL
	const ctx = useContext(QiuboxContext)

	const {
		listQiubox,
		getListQiubox
	} = ctx

	useEffect(() => {
		
		getListQiubox()

	}, [])


	return (
		<>
	
	<section class="py-14 lg:py-24">
        <div class="container">
          <h2 class="text-center text-3xl lg:text-4xl text-primary-dark-blue mb-5 lg:text-left lg:mb-10">
            ¿Qiubox en tu caja?
          </h2>
          <div class="grid grid-cols-1 gap-5 lg:gap-7 lg:grid-cols-4">
				{
					listQiubox.map((e) => {
						return (

                <article class="bg-white">
                  <Link to={`/qiubox/${e._id}`}>
                  <div class="aspect-w-16 aspect-h-10 lg:aspect-w-4 lg:aspect-h-3">
                    <img
                      src={e.qiuboxImage}
                      alt="arte"
                    />
                  </div>
                  </Link>
                  <div class="px-7 pt-5 pb-10 lg:p-6">
                    <span class="text-neutral-grayish-blue text-xs">
                      Por: Francisca Rivera Pérez
                    </span>
                    <h4 class="text-primary-dark-blue text-sm py-2 hover:text-rosamx-600">
                    <Link to={`/qiubox/${e._id}`}>{e.qiuboxTitulo}
                      {" "} <br/>${e.qiuboxPrice}
                      <span className="text-gray-600 text-sm"> /mxn</span></Link>
                    </h4>
                    <div>
                    </div>
                    <p class="text-neutral-grayish-blue text-xs">
                      {e.shortDescription}
                    </p>
                  </div>
                </article>
						)
					})

				}	
          </div>
		</div>
	</section>
		
		</>
	)
}