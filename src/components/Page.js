import React from 'react'
import ProgressBar from './ProgressBar'
import Button from './Button'

import img from '../assets/Page/img.png'

const Page = () => {
    return (
        <div className='w-full min-w-[100%]'>
            <ProgressBar />
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='flex items-center justify-between gap-7 mt-6 md:flex-nowrap flex-wrap'>
                    <img src={img} alt="Hero" width={500} height={500} />
                    <div className='flex items-start justify-start flex-col gap-5'>
                        <h1 className='text-3xl text-black font-bold'>You're in the right place</h1>
                        <p>Brilliant gets hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science, and computer science.</p>
                    </div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Page