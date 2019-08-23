const initialState = {
    config: []
}

const mutations = {
    'SET_DATA': (state, [index, json]) => {
        return {
            ...state,
            config: state.config.map((conf, ind) => {
                if (ind === index) conf['data'] = json
                return conf
            })
        }
    },
    'SET_CONFIG': (state, config) => {
        return {
            ...state,
            config
        }
    }
}

const DashboardReducer = (state = initialState, { type, payload }) => {
    if (mutations[type]) {
        return mutations[type](state, payload)
    }
    return { ...state }
}

export default DashboardReducer
