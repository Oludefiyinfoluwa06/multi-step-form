import React, { useState, useEffect } from 'react'

import img from '../assets/LearningPath/img.png'

const Loading = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center" style={{ minHeight: '85vh' }}>
        <div className="border-yellow-400 p-7 rounded-full border-8"></div>
        <p className="font-bold text-center">Finding learning path recommendations for you based on your responses</p>
        </div>
    )
}

const Path = () => {
    const paths = [
        {
            id: 1,
            title: 'Foundational Math',
            content: 'Build your foundational skills in algebra, geometry, and probablility.',
            img: img,
            popular: true,
        },
        {
            id: 2,
            title: 'Mathematical Thinking',
            content: 'Build your foundational skills in algebra, geometry, and probablility.',
            img: img,
            popular: false,
        }
    ]

    return (
        <div className='flex items-center justify-center gap-5 flex-col px-12' style={{ minHeight: '100vh' }}>
            <h1 className='md:text-3xl text-2xl text-black font-bold text-center'>Learning paths based on your answers</h1>
            <p className='text-center'>Choose one to get started. You can switch anytime.</p>

            <div className='flex items-center justify-center gap-10 md:flex-nowrap flex-wrap'>
                {paths.map(path => (
                    <div className='border border-slate p-4 rounded-md relative w-[350px]' key={path.id}>
                        {path.popular && <button className='absolute top-[-15px] left-[50%] translate-x-[-50%] px-3 py-1 bg-yellow-400 rounded-[50px] uppercase text-sm'>Most Popular</button>}
                        <div className='flex justify-center gap-5 md:flex-nowrap flex-wrap-reverse'>
                            <p><strong>{path.title}</strong> {path.content}</p>
                            <img src={path.img} alt={path.id} width={100} height={100} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const LearningPaths = () => {
    const [showLoading, setShowLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    return showLoading ? <Loading /> : <Path />
}

export default LearningPaths