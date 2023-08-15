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
        const i = (annualInterestRate / 12) / 100; // Convert annual interest rate to monthly rate
        const n = repaymentTime * 12; // Convert loan term to months 

        const numerator = (principalLoanAmount) * (i * Math.pow(1 + i, n));
        const denominator = Math.pow(1 + i, n) - 1;

        const monthlyPayment = numerator / denominator;
        return monthlyPayment
    }

    let SliderInput = ({ min, max, name, formattedName, unit }) => {

        const debouncedSetInput = debounce((name, value) => {
            setInput(prevInput => ({
                ...prevInput,
                [name]: value
            }));
        }, 300);

        return (
            <div
                id={`${name}Input`}
                className="flex flex-col w-full phone:w-1/3 phone:h-auto items-start py-2 phone:border-r phone:py-2"
            >
                <div className="inline-flex w-[inherit]" id={`${name}Label`}>
                    <span className="w-1/2 whitespace-nowrap">{formattedName}</span>
                    <span className="w-1/2 text-right">{
                        unit === "$" ? USDollar.format(input[name]) : `${input[name]} ${unit}`}</span>
                </div>
                <input
                    type="range"
                    min={min}
                    className="w-[inherit]"
                    max={max}
                    name={name}
                    onChange={(ev) => debouncedSetInput(name, parseFloat(ev.target.value))}
                    value={input[name]}
                />
            </div>
        )
    }

    useEffect(() => {
        let principalLoanAmount = input.purchaseAmount - input.downPayment
        setMonthlyPayment(calcResult(principalLoanAmount, input.annualInterestRate, input.repaymentTime))
    }, [input])

    return (
        <div className="flex flex-row justify-center w-full h-full items-center gap-12">
            <div
                className="bg-gray-700 text-white flex flex-col items-start justify-center w-1/2 font-sans pl-32 py-18 pr-8 h-[80%] phone:space-y-1 phone:rounded-lg phone:shadow-lg phone:w-auto phone:h-auto phone:m-4 phone:p-8"
            >
                <h2 className="text-[3.125rem] phone:text-3xl font-black font-sans w-full pb-3 leading-10 tracking-wide whitespace-nowrap">
                    Mortgage Calculator
                </h2>
                <p className="my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel est a nulla accumsan dapibus non vehicula ex. Nam tempus efficitur diam, id convallis sem.
                </p>
                <div id="entryBoxes" className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                    {sliderFields.map(props => <SliderInput {...props} />)}
                </div>
                <div
                    id="outputBox"
                    className="flex flex-col w-full justify-start items-center rounded-lg mt-2 phone:p-2 phone:m-2"
                >
                    <span className="inline-flex w-[inherit]">
                        <p className="w-1/2" id="totalPaymentdiv">
                            Loan Amount
                        </p>
                        <div className="text-xl w-1/2 select-all text-center">
                            {USDollar.format(input.purchaseAmount - input.downPayment)}
                        </div>
                    </span>
                    <span className="inline-flex w-[inherit]">
                        <p className="w-1/2" id="monthlyPaymentdiv">Monthly Payment</p>
                        <div className="text-xl w-1/2 select-all text-center">
                            {monthlyPayment ? USDollar.format(monthlyPayment)
                                : "Uncalculable"}
                        </div>
                    </span>
                </div>
            </div>
            <div className="w-1/2 h-1/2 flex flex-col justify-evenly items-start">
                <h2 className="text-zinc-800 text-6xl font-black leading-10 tracking-wide">Try our awesome Calculator</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel est a nulla accumsan dapibus non vehicula ex. Nam tempus efficitur diam, id convallis sem. Sed suscipit eleifend eros, eget mollis nunc interdum eu.</p>
                <button className="w-36 h-16 bg-orange-400 text-white shadow">Register</button>
            </div>
        </div>
    )
}

const MortgageCalculatorSection = () => {
    return (
        <section className='w-full h-screen flex flex-col mx-auto justify-evenly items-center'>
            <MortgageCalculator />
        </section>
    )
}

export default MortgageCalculatorSection
