import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState, useRef, useEffect } from 'react';

let productList = [
    {
        "id": "a7b3c4d5-ef1a-2b8c-3d4e-5f6a7b8c9d0e",
        "name": "Online Banking",
        "desc": "Manage your accounts, transfer funds, and pay bills conveniently through online banking."
    },
    {
        "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        "name": "Investment Advisory",
        "desc": "Receive expert advice on investment strategies and portfolio management tailored to your financial goals."
    },
    {
        "id": "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        "name": "Credit Card Services",
        "desc": "Apply for credit cards, track transactions, and manage card rewards and benefits."
    },
    {
        "id": "9c0d1e2f-3a4b-5c6d-7e8f-9a0b1c2d3e4f",
        "name": "Mortgage Loans",
        "desc": "Explore mortgage options, calculate payments, and apply for home loans."
    },
    {
        "id": "3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d",
        "name": "Retirement Planning",
        "desc": "Plan for a secure retirement with personalized strategies, investment advice, and retirement calculators."
    },
    {
        "id": "7e8f9a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b",
        "name": "Insurance Services",
        "desc": "Explore various insurance options including life, health, auto, and home insurance."
    },
    {
        "id": "3e4f5a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b",
        "name": "Personal Budgeting",
        "desc": "Create and track budgets, set financial goals, and manage your spending habits."
    },
    {
        "id": "9e0f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b",
        "name": "Tax Preparation",
        "desc": "Access tools and resources for tax preparation, filing, and optimizing tax strategies."
    },
    {
        "id": "5e6f7a8b-9c0d-1e2f-3a4b-5c6d7e8f9a0b",
        "name": "Student Loan Services",
        "desc": "Manage student loans, explore repayment options, and access educational resources."
    }
]

function throttle(func, wait) {
    let canBeToggledAgain = true

    return (...args) => {
        if (canBeToggledAgain) {
            func.apply(this, args)
            canBeToggledAgain = false
            setInterval(() => canBeToggledAgain = true, wait)
        }
    }
}

// credit: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useThrottledInterval(callback, delay, pause) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            if (!pause) savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay, pause]);
}

const transformStyle = (pct) => {
    return {
        transform: `translateX(${pct}%)`,
        transition: '1s'
    }
}

function CarouselButtons(num_buttons, evt, x) {
    const buttons = []
    for (let i = 0; i <= num_buttons - 1; i++) {
        buttons.push(<p key={i} className="mr-2 text-xs" onClick={() => evt(-325.5 * i)}>{x == -325.5 * i ? "⚪" : "⚫"}</p>)
    }
    return buttons
}

// https://tailwind-elements.com/docs/standard/components/carousel/ 

function Carousel({ products }) {

    const [x, setX] = useState(0);
    const [pauseInterval, setPauseInterval] = useState(false);

    const projectList = JSON.parse(products)

    let paginatedBlocks = (productsList) => {
        let blockBucket = []
        for (let i = 0; i < productsList.length; i += 3) {
            blockBucket.push(productList.slice(i, i + 3))
        }
        return blockBucket
    }

    let paginatedServices = paginatedBlocks(projectList)

    const goLeft = () => {
        x >= 0 ? setX(-(paginatedServices.length - 1) * 325.5) : setX(x + 325.5)
    }

    const goRight = () => {
        x <= -(paginatedServices.length - 1) * 325.5 ? setX(0) : setX(x - 325.5)
    }

    const throttledGoRight = throttle(goRight, 2000);
    // useThrottledInterval(goRight, 5000, pauseInterval);

    const handleGoRight = () => {
        // setPauseInterval(true);
        throttledGoRight();
        // setTimeout(() => setPauseInterval(false), 2000);
    };

    // the slider also slides automatically once every 10 seconds 
    return (
        <>
            <div className="flex flex-[5] flex-row overflow-hidden items-center list-none relative h-full sm:h-screen md:mx-10 sm:mx-5">
                <button className="absolute pl-10 text-red-500 text-5xl font-thin z-10" onClick={goLeft}>{"<"}</button>
                {
                    paginatedServices
                        .map(page => (
                            <div className='grid grid-cols-3 gap-12 min-h-full min-w-full text-gray-700'>
                                {
                                    page.map(({ _id, name, desc }) => (
                                        <div key={_id} className="relative flex flex-col justify-start text-center" style={transformStyle(x)}>
                                            <div className="z-10 px-6 py-4 flex flex-col items-center justify-evenly lg:w-1/3 md:w-full sm:w-full sm:flex-[3] h-3/4 border-black shadow-md">
                                                <div class="h-1/2 flex items-center">
                                                    <div class="bg-orange-400 w-24 h-24 rounded-full shadow flex justify-center items-center">
                                                    <FontAwesomeIcon icon={faCheckCircle} className='text-4xl text-white'/>
                                                    </div>
                                                </div>
                                                <div className='h-1/2 flex flex-col justify-evenly items-center'>
                                                    <span className="font-bold text-center text-zinc-800 text-3xl leading-10 mb-2 sm:text-2xl whitespace-nowrap">{name}
                                                    </span>
                                                    <p className={`text-base sm:text-2xl leading-10`}>{desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                }

                <button className="absolute pr-10 items-center text-red-500 text-5xl font-thin z-4 right-0" onClick={handleGoRight}>{">"}</button>
            </div>
            <div>
                <div className="flex flex-row z-3 w-full justify-center bottom-0 mt-5 hover:cursor-pointer">
                    {[...CarouselButtons(paginatedServices.length, setX, x)]}
                </div>
            </div>
        </>
    )
}
// make this section a slider
const ServiceSection = () => {
    return (
        <section className='max-w-6xl h-screen flex flex-col mx-auto justify-center items-centers'>
            <div className="flex justify-center items-end align-text-top text-6xl text-zinc-800 font-black leading-10 tracking-wide flex-[2] text-center">
                <h2>High Quality Output, Awesome Service</h2>
            </div>
            <Carousel products={JSON.stringify(productList)} />
        </section>
    )
}

export default ServiceSection