import React from 'react'
import Dropdown from './Dropdown'

export default ({ children, options, visible, cb }) => {

    let optionMap = Object.entries(options)

    return (
        <Dropdown
            anchor={ children }
            visible={ visible }
            cb={ cb }
        >
            <ul className="options-list">
                {   optionMap.map(([text, meta]) => 
                        <li
                            key={text}
                            className="option-option"
                            onClick={ () => meta.cb() }
                        >
                            <span>{text}</span>
                            <i className={meta.icon} />
                        </li>
                    )
                }
            </ul>
        </Dropdown>
    )
}