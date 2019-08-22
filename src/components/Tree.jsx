import React from 'react'
import Chart from './Chart'
import EChart from './EChart'
const data = require('../assets/fixtures/repo_hierarchy.json')

export default ({ config }) => {

    let option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        grid: {
            left: '10%'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: config.left,
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }

    return (
        <Chart config={config}>
            <EChart option={ option } config={ config }/>
        </Chart>
    )
}