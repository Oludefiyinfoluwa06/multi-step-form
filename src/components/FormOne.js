import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Button from './Button'

import img1 from '../assets/FormOne/img1.png'
import img2 from '../assets/FormOne/img2.png'
import img3 from '../assets/FormOne/img3.png'
import img4 from '../assets/FormOne/img4.png'
import img5 from '../assets/FormOne/img5.png'
import img6 from '../assets/FormOne/img6.png'

const FormOne = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const answers = [
        {
            id: 1,
            img: img1,
            text: 'Student or soon to be enrolled',
        },
        {
            id: 2,
            img: img2,
            text: 'Professional pursuing a career',
        },
        {
            id: 3,
            img: img3,
            text: 'Parent of a school-age child',
        },
        {
            id: 4,
            img: img4,
            text: 'Lifelong learner',
        },
        {
            id: 5,
            img: img5,
            text: 'Teacher',
        },
        {
            id: 6,
            img: img6,
            text: 'Other',
        },
    ]

    const handleSelectOption = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className='w-full min-w-[100%]'>
            <ProgressBar />
            <div className='flex items-center justify-center gap-5 flex-col mt-6'>
                <h1 className='md:text-3xl text-2xl text-black font-bold text-center'>Which describes you best?</h1>
                <p className='text-center'>This will help us personalize your experience</p>

                <div className='flex items-start justify-center sm:w-[400px] md:w-[600px] w-[100%] flex-col gap-2'>
                    {answers.map(answer => (
                        <div
                            key={answer.id}
                            className={`flex items-center justify-start gap-2 border ${selectedOption?.id === answer.id ? 'border-red-500 shadow-md' : 'border-slate-100'} w-full p-4 rounded-md cursor-pointer`}
                            onClick={() => handleSelectOption(answer)}
                        >
                            <img src={answer.img} alt={answer.id} width={30} height={30} />
                            <p>{answer.text}</p>
                        </div>
                    ))}
                </div>

                <Button disabled={!selectedOption} />
            </div>
        </div>
    )
}

export default FormOne