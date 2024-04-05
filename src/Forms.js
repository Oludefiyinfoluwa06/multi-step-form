import React from 'react'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'
import Page from './components/Page'
import FormThree from './components/FormThree'
import LastPage from './components/LastPage'
import LearningPaths from './components/LearningPaths'
import { useStepContext } from './contexts/StepContext'

const Forms = () => {
    const { step, isCompleted } = useStepContext()

    return (
        <div className='w-full h-full overflow-hidden'>
            {step === 1 && (
                <FormOne />
            )}
            {step === 2 && (
                <FormTwo />
            )}
            {step === 3 && (
                <Page />
            )}
            {step === 4 && (
                <FormThree />
            )}
            {step === 5 && (
                <LastPage />
            )}
            {isCompleted && (
                <LearningPaths />
            )}
        </div>
    )
}

export default Forms