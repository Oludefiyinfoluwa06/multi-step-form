import { createContext, useContext, useState } from "react";

export const StepContext = createContext()

export const StepProvider = ({ children, totalSteps }) => {
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(100 / totalSteps)
    const [isCompleted, setIsCompleted] = useState(false)

    const next = () => {
        setStep((prevStep) => {
            const nextStep = prevStep + 1
            const newProgress = (nextStep / totalSteps) * 100
            setProgress(newProgress)
            if (nextStep > 5) setIsCompleted(true)
            return nextStep
        })
    }
    
    const previous = () => {
        setStep((prevStep) => {
            const nextStep = prevStep - 1
            const newProgress = (nextStep / totalSteps) * 100
            setProgress(newProgress)
            return nextStep
        })
    }
    
    const value = {
        step,
        next,
        previous,
        progress,
        isCompleted
    }

    return (
        <StepContext.Provider value={value}>
            {children}
        </StepContext.Provider>
    )
}

export const useStepContext = () => {
    return useContext(StepContext)
}