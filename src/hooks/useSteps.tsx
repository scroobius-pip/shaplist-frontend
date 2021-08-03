import React, { useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'

interface StepsContainerProps {
    children: React.ReactElement[]
}

interface StepProps {
    children: React.ReactElement[] | React.ReactElement
}
const defaultStyle = {
    transition: `opacity 200ms ease`,
    opacity: 1
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 }
}

function useSteps() {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    let count: number
    const forward = () => setCurrentStepIndex((i) => i + 1)
    const back = () => setCurrentStepIndex((i) => i > 0 ? i - 1 : 0)

    const StepsContainer: React.FunctionComponent<StepsContainerProps> = ({ children }) => {
        useEffect(() => { count = children.length }, [])
        // const keyedChildren = children.map((c, i) => <React.Fragment key={i}>{c}</React.Fragment>)
        return <Transition in={true} timeout={100} appear >
            {state => (
                <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
                    {children[currentStepIndex]}
                </div>
            )}
        </Transition>
    }


    return {
        Steps: StepsContainer,
        back,
        forward,
        get currentPage() { return currentStepIndex + 1 },

    }
}

export default useSteps