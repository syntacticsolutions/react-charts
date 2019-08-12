import React from 'react'
import Dropdown from './Dropdown'

export default ({ children, options, visible }) => {

    let optionMap = Object.entries(options)

    return (
        <Dropdown
            anchor={ children }
            visible={ visible }
        >
            <ul>
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