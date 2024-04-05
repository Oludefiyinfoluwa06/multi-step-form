import React from 'react'
import { useStepContext } from '../contexts/StepContext'
import { FaAngleLeft } from 'react-icons/fa'

const ProgressBar = () => {
    const { progress, previous } = useStepContext()

    return (
        <div className='flex items-center justify-start gap-2 h-1 w-full mt-6'>
            {progress > 20 && (
                <p className='text-3xl cursor-pointer' onClick={previous}>
                    <FaAngleLeft />
                </p>
            )}
            <div className='h-1 w-full bg-slate-200'>
                <div
                    className={`bg-green-600 h-1 rounded-[50px]`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressBar