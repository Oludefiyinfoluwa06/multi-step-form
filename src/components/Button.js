import React from "react";
import { useStepContext } from '../contexts/StepContext'

const Button = ({ disabled }) => {
    const { next } = useStepContext()

    return (
        <button className={`px-7 py-2 text-white rounded-lg ${disabled ? 'bg-slate-200' : 'bg-black'}`} disabled={disabled} onClick={next}>Continue</button>
    )
}

export default Button