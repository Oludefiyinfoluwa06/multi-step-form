import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Button from './Button'

const FormThree = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const answers = [
        {
            id: 1,
            equation: '5 * ½ = ?',
            title: 'Arithmetic',
            text: 'Introductory'
        },
        {
            id: 2,
            equation: '3x + 5 = 4',
            title: 'Basic Algebra',
            text: 'Foundational'
        },
        {
            id: 3,
            equation: 'x = ((-b ± √((b ^ 2) - 4ac)) / 2a)',
            title: 'Intermediate Algebra',
            text: 'Intermediate'
        },
        {
            id: 4,
            equation: '3x + 5 = 4',
            title: 'Calculus',
            text: 'Advanced'
        },
    ]

    const handleSelectOption = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className='w-full min-w-[100%]'>
            <ProgressBar />
            <div className='flex items-center justify-center gap-5 flex-col mt-6 text-center'>
                <h1 className='md:text-3xl text-2xl text-black font-bold'>What is your math comfort level?</h1>
                <p>Choose the highest level you feel confident in - you can always adjust later</p>

                <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-2'>
                    {answers.map(answer => (
                        <div
                            key={answer.id}
                            className={`flex flex-col items-center justify-center gap-2 border ${selectedOption?.id === answer.id ? 'border-red-500 shadow-md' : 'border-slate-100'} w-[200px] p-4 rounded-md cursor-pointer h-[200px]`}
                            onClick={() => handleSelectOption(answer)}
                        >
                            <p>{answer.equation}</p>
                            <p className='text-center'>{answer.title}</p>
                            <p className="text-center text-slate-500">{answer.text}</p>
                        </div>
                    ))}
                </div>

                <Button disabled={!selectedOption} />
            </div>
        </div>
    )
}

export default FormThree