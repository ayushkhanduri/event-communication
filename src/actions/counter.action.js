
export const incrementCounter = () => (
    {
        type: "INCREMENT"
    }
)

export const setCounterValue = (value)=>{
    return {
        type: "SET_VALUE",
        payload: value
    }
}