import React, { useEffect, useRef } from 'react'

export default ({ children, anchor, visible }) => {
    let dropdown = useRef(null)
    let dropdownContainer = useRef(null)

    useEffect(() => {
        if (visible) {
            let { clientWidth, style } = dropdown.current
            let anchorOffset = dropdownContainer.current.clientWidth
            style.left =  (clientWidth - anchorOffset) * -1 + 'px'
        }
    }, [visible]);

    return (
        <div className="dropdown-container" ref={dropdownContainer}>
            { anchor }
            { visible && 
                <div className="dropdown" ref={dropdown}>
                    { children }
                </div>
            }
        </div>
    )
}