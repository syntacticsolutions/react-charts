import React, { useEffect, useRef, useCallback } from 'react'

export default ({ children, anchor, visible, cb }) => {
    let dropdown = useRef(null)
    let dropdownContainer = useRef(null)

    const hideOnDocumentClick = useCallback(() => {
        if (visible) {
            cb()
            document.removeEventListener('click', hideOnDocumentClick)
        }
    }, [visible, cb])

    useEffect(() => {
        let { clientWidth, style } = dropdown.current
        let anchorOffset = dropdownContainer.current.clientWidth
        style.left =  (clientWidth - anchorOffset) * -1 + 'px'

        visible ? document.addEventListener('click', hideOnDocumentClick)
            : document.removeEventListener('click', hideOnDocumentClick)
    }, [visible, hideOnDocumentClick]);

    return (
        <div className="dropdown-container" ref={dropdownContainer}>
            { anchor }
            <div style={{ visibility: visible ? 'visible' : 'hidden' }} className="dropdown" ref={dropdown} >
                { children }
            </div>
        </div>
    )
}