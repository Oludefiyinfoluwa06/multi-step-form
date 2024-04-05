import React from 'react'
import ProgressBar from './ProgressBar'
import Button from './Button'
import { FaStar } from 'react-icons/fa'

import img from '../assets/LastPage/img.png'

const LastPage = () => {
    return (
        <div className='w-full min-w-[100%]'>
            <ProgressBar />
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='flex items-center justify-between gap-5 mt-6 md:flex-nowrap flex-wrap'>
                    <img src={img} alt="Hero" width={400} height={400} />
                    <div className='flex items-start justify-start flex-col gap-5'>
                        <h1 className='text-3xl text-black font-bold'>You're on your way</h1>
                        <div className='flex flex-col items-start justify-start gap-3'>
                            <div className="flex gap-1 text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p><em>"Though it's engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</em></p>
                            <p>- <em>Jacob S.</em></p>
                        </div>
                    </div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default LastPage