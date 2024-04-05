import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Button from './Button'

import img1 from '../assets/FormTwo/img1.png'
import img2 from '../assets/FormTwo/img2.png'
import img3 from '../assets/FormTwo/img3.png'
import img4 from '../assets/FormTwo/img4.png'
import img5 from '../assets/FormTwo/img5.png'

const FormTwo = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const answers = [
        {
            id: 1,
            img: img1,
            text: 'Learning specific skills to advance my career',
        },
        {
            id: 2,
            img: img2,
            text: 'Exploring new topics I\'m interested in',
        },
        {
            id: 3,
            img: img3,
            text: 'Refreshing my math foundations',
        },
        {
            id: 4,
            img: img4,
            text: 'Exercising my brain to stay sharp',
        },
        {
            id: 5,
            img: img5,
            text: 'Something else',
        },
    ]
    
    const handleSelectOption = (option) => {
        setSelectedOption(option)
    }

    return (
        <div className='w-full min-w-[100%]'>
            <ProgressBar />
            <div className='flex items-center justify-center gap-5 flex-col mt-6'>
                <h1 className='md:text-3xl text-2xl text-black font-bold text-center'>Which are you most interested in?</h1>
                <p className='text-center'>Choose just one. This will help us get you started (but won't limit your experience).</p>

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

export default FormTwo