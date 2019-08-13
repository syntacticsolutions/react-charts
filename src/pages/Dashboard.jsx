import React from 'react'
import Tree from '../components/Tree'
import Line from '../components/Line'
import PercentageBar from '../components/PercentageBar'

export default function Dashboard () {

    return (
    <section class="dashboard">
        <Tree />
        <Line />
        <PercentageBar />
    </section>
    )
}