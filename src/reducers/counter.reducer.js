export const CounterReducer = (state= {time:0} ,action) => {
    switch(action.type) {
        case 'INCREMENT': return {
            ...state,
            time: ++state.time
        }
        case 'SET_VALUE' : return{
            ...state,
            time: action.payload
        }

        default: return state;
    }
}