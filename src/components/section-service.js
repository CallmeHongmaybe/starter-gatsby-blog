import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

let styles = {
    itemsCenter: 'flex items-center justify-center',
    flexColEvenly: `flex flex-col items-center justify-evenly`,
    flexColCenter: 'flex flex-col items-center justify-center',
}

// https://tailwind-elements.com/docs/standard/components/carousel/ 

function Carousel({ products }) {

    const projectList = JSON.parse(products)

    // the slider also slides automatically once every 10 seconds 
    return (
        <>
            <div className="flex laptop:flex-[5] flex-row items-center list-none relative tablet:h-fit phone:h-fit tablet:mx-10 sm:mx-5">
                <div className='grid min-h-full min-w-full text-gray-700
                            laptop:grid-cols-3 laptop:gap-12
                            tablet:grid-rows-3 tablet:gap-12
                            phone:grid-rows-3 phone:gap-12
                            '>
                    {
                        projectList.map(({ id, image, title, description }) => (
                            <div
                                key={id}
                                className="relative flex flex-col text-center justify-evenly"
                            >
                                <div className={`z-10 px-6 py-4 ${styles.flexColEvenly} tablet:w-full phone:w-full laptop:h-3/4 tablet:h-fit phone:h-fit border-black shadow-md`}>
                                    <div class="h-1/2 flex items-center">
                                        <div className={`bg-custom-orange w-24 h-24 rounded-full shadow ${styles.itemsCenter}`}>
                                            {/* <FontAwesomeIcon icon={faCheckCircle} className='text-4xl text-white' /> */}
                                            <GatsbyImage image={image.gatsbyImageData} />
                                        </div>
                                    </div>
                                    <div className={`h-1/2 ${styles.flexColEvenly}`}>
                                        <span className="font-bold text-center text-zinc-800 text-3xl leading-10 mb-2 sm:text-2xl whitespace-nowrap">{title}
                                        </span>
                                        <p className={`text-base sm:text-2xl leading-10`}>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )
}
// make this section a slider
export default function ServiceSection({ products }) {
    return (
        <section id="service" className={`max-w-6xl h-screen tablet:h-fit phone:h-fit ${styles.flexColCenter} mx-auto`}>
            <h2 className="text-zinc-800 font-black leading-10 tracking-wide 
            laptop:text-6xl tablet:text-4xl phone:text-2xl w-3/4
            text-center flex-1">
                High Quality Output, Awesome Service
            </h2>
            <Carousel products={products} />
        </section>
    )
}
