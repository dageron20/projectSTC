import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        userIp: '',
        valueDoc: ''
    },
    reducers: {
        increment(state) {
            if(state.count  < 100)
                state.count = state.count + 1
        },
        decrement(state) {
            if(state.count  > 0)
                state.count = state.count - 1
        },
        setUserIp(state, action){
            state.userIp = action.payload
        },
        setValueDoc(state, action){
            state.valueDoc = action.payload
        },
        // writeValueDoc(state, action){
        //
        // }
    }
})

export default toolkitSlice.reducer
export const {increment, decrement, setUserIp, setValueDoc} = toolkitSlice.actions