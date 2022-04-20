import { useState } from 'react'
function useOpen() {
    const [isOpen, setIsOpen] = useState(false)
    function toggle() {
        setIsOpen(!isOpen)
    }
    return { isOpen, toggle }
}

import useOpen from './hooks/useOpen'
export const App = () => {
    const { isOpen, toggle } = useOpen()
    return (
        <div className="app">
            {isOpen
                && <NewMenu toggle={toggle} />}
            <main>
                <button
                    onClick={toggle}
                    type="button"
                >
                    MENU
                </button>
                <Welcome />
            </main>
        </div>
    )
}