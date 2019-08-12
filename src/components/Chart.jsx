import React, { useState } from 'react'
import OptionsDropdown from './OptionsDropdown'

export default function Chart ({ children, config = { 
        title: 'Repo Hierarchy',
        options: 'default',

    } 
}) {

    const [optionsVisible, setOptionsVisible] = useState(false)

    let options =  {
        'FullScreen': {
            icon: 'ion-ios-expand',
            cb: () => {

            }
        },
        'Save as Image': {
            icon: 'ion-ios-image',
            cb: () => {
                // TODO
            }
        },
        'Export to CSV': {
            icon: 'ion-ios-filing',
            cb: () => {

            }
        }
    }


    return (
        <section className="chart">
            <section className="chart-header-container">
                <span>{ config.title }</span>
                <span className="options-container">
                    <OptionsDropdown
                        options={ options }
                        visible={ optionsVisible }
                    >
                        <i
                            className="ion-ios-more"
                            onClick={ () => setOptionsVisible(!optionsVisible) }
                        />
                    </OptionsDropdown>
                </span>
            </section>
            { children }
        </section>
    )
}