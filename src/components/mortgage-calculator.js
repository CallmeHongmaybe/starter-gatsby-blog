import { debounce } from "lodash";
import React, { useState, useEffect } from "react";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let sliderFields = [
    {
        name: "purchaseAmount",
        formattedName: "Purchase Amount",
        min: 0,
        max: 1000000,
        unit: "$"
    },
    {
        name: "downPayment",
        formattedName: "Down Payment",
        min: 0,
        max: 1000000,
        unit: "$"
    },
    {
        name: "repaymentTime",
        formattedName: "Repayment Time",
        min: 0,
        max: 50,
        unit: "years"
    },
    {
        name: "annualInterestRate",
        formattedName: "Interest Rate",
        min: 0,
        max: 15,
        unit: "%"
    },
]

const MortgageCalculator = () => {
    let [input, setInput] = useState({ purchaseAmount: 0, downPayment: 0, annualInterestRate: 0, repaymentTime: 0 })
    let [monthlyPayment, setMonthlyPayment] = useState(null)

    let calcResult = (principalLoanAmount, annualInterestRate, repaymentTime) => {
        if (repaymentTime === 0) return principalLoanAmount
        if (principalLoanAmount < 0) return 0
        const i = (annualInterestRate / 12) / 100; // Convert annual interest rate to monthly rate
        const n = repaymentTime * 12; // Convert loan term to months 

        const numerator = (principalLoanAmount) * (i * Math.pow(1 + i, n));
        const denominator = Math.pow(1 + i, n) - 1;

        const monthlyPayment = numerator / denominator;
        return monthlyPayment
    }

    const debouncedSetInput = debounce((name, value) => {
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }, 300);


    let SliderInput = ({ min, max, name, formattedName, unit }) => {

        let sliderPct = (input[name] / max) * 100
        let remainingPct = 100 - sliderPct
        // console.log('sliderPct', name, sliderPct)

        return (
            <div
                id={`${name}Input`}
                className="flex flex-col w-full phone:h-auto items-start py-2 phone:py-2"
            >
                <div className="inline-flex w-[inherit]" id={`${name}Label`}>
                    <span className="w-1/2 whitespace-nowrap extrabold-text-manually">{formattedName}</span>
                    <span className="w-1/2 text-right extrabold-text-manually">{
                        unit === "$" ? USDollar.format(input[name]) : `${input[name]} ${unit}`}</span>
                </div>
                <div className="h-[15px] w-full rounded-full relative">
                    <input
                        type="range"
                        min={min}
                        className="w-[inherit]"
                        max={max}
                        name={name}
                        onInput={(ev) => {
                            debouncedSetInput(name, parseFloat(ev.target.value))
                        }}
                        value={input[name]}
                    />
                    <div
                        className={`w-full h-full ${
                            sliderPct === 100 || sliderPct === 0 
                            ? 'rounded-full' 
                            : 'rounded-s-full'} bg-custom-orange-fade absolute top-0 bottom-0 left-0 float-left mt-2`}
                        style={{ width: `${sliderPct}%` }}
                    />
                    <div
                        className={`w-full h-full ${
                            remainingPct === 100 || remainingPct === 0 
                            ? 'rounded-full' 
                            : 'rounded-e-full'} bg-white absolute top-0 bottom-0 right-0 float-right mt-2`}
                        style={{ width: `${remainingPct}%`}}
                    />
                </div>
            </div>
        )
    }

    let ResultLine = ({ formattedName, result }) => (
        <span className="inline-flex w-[inherit]">
            <p className="w-1/2 bold-text-manually" id="totalPaymentdiv">
                {formattedName}
            </p>
            <div className="text-xl w-1/2 select-all text-center text-custom-orange extrabold-text-manually">
                {result}
            </div>
        </span>
    )

    useEffect(() => {
        let principalLoanAmount = input.purchaseAmount - input.downPayment
        setMonthlyPayment(calcResult(principalLoanAmount, input.annualInterestRate, input.repaymentTime))
    }, [input])

    return (
        <div className="flex flex-row tablet:flex-col phone:flex-col justify-center w-full h-full items-center gap-12">
            <div
                className="bg-custom-navy text-white flex flex-col items-start justify-center 
                laptop:w-1/2 laptop:h-[80%]
                tablet:h-fit tablet:max-w-6xl tablet:container
                phone:h-fit phone:max-w-6xl phone:container
                font-sans 
                laptop:pl-32 laptop:py-18 laptop:pr-8
                tablet:p-8 
                phone:p-8
                tablet:items-center phone:items-center
                "
            >
                <h2 className="text-[3.125rem] phone:text-3xl font-black font-sans w-full pb-3 leading-10 tracking-wide whitespace-nowrap">
                    Mortgage Calculator
                </h2>
                <p className="my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel est a nulla accumsan dapibus non vehicula ex. Nam tempus efficitur diam, id convallis sem.
                </p>
                <div id="entryBoxes" className="
                laptop:grid laptop:grid-cols-2 gap-x-6 gap-y-4
                tablet:grid tablet:grid-cols-2
                phone:grid phone:grid-rows-4
                w-full"
                >
                    {sliderFields.map(props => <SliderInput {...props} />)}
                </div>
                <div
                    id="outputBox"
                    className="flex flex-col w-full justify-start items-center rounded-lg mt-2 phone:p-2 phone:m-2"
                >
                    <ResultLine formattedName={"Loan Amount"} result={USDollar.format(input.purchaseAmount - input.downPayment)} />
                    <ResultLine formattedName={"Monthly Payment"} result={monthlyPayment ? USDollar.format(monthlyPayment) : "Uncalculable"} />
                </div>
            </div>
            <div className="
                laptop:w-1/2 laptop:h-1/2
                tablet:max-w-6xl tablet:container tablet:h-full tablet:mx-auto
                phone:max-w-6xl phone:container phone:h-full phone:mx-auto
                flex flex-col justify-evenly 
                laptop:text-left tablet:text-center phone:text-center
                laptop:items-start tablet:items-center phone:items-center
                ">
                <h2 className="text-zinc-800 
                laptop:text-6xl tablet:text-3xl phone:text-2xl
                font-black leading-10 tracking-wide">Try our awesome Calculator</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel est a nulla accumsan dapibus non vehicula ex. Nam tempus efficitur diam, id convallis sem. Sed suscipit eleifend eros, eget mollis nunc interdum eu.</p>
                <button className="w-36 h-16 bg-custom-orange text-white shadow extrabold-text-manually">Register</button>
            </div>
        </div>
    )
}

const MortgageCalculatorSection = () => {
    return (
        <section id="calculator" className='w-full h-screen flex flex-col mx-auto justify-evenly items-center'>
            <MortgageCalculator />
        </section>
    )
}

export default MortgageCalculatorSection
