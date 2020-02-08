import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "@reach/router";

export default function DashboardSelector ({ axios, history }) {
    const dashboardList = useSelector(({DashboardReducer}) => DashboardReducer.dashboardList)
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get(`/api/dashboard-list`)
        .then(({ data }) => {

            dispatch({
                type: 'SET_DASHBOARD_LIST',
                payload: data
            })
        })
        // eslint-disable-next-line
    }, [])

    return (
        <section class="dashboard-selector">
            {dashboardList && dashboardList.map(dash => (
                <Link to={`/analytics/${dash.path}`}
                    class="dashboard-card"
                >
                    <h3 class="dash-title">{dash.title}</h3>
                    <p class="dash-description">{dash.description}</p>
                </Link>
            ))}
        </section>
    )
}