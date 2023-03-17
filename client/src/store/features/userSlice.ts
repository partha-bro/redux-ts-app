import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { fetchURL } from "../../api/agent";
import { IUser } from "../../interfaces/user";

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

interface InitialState {
    data: IUser[],
    status: string
}

const initialState : InitialState = {
    data: [],
    status: STATUS.IDLE
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state,action)=>{
            state.status = STATUS.LOADING
        }).addCase(fetchUser.fulfilled, (state,action:PayloadAction<IUser[]>)=>{
            state.status = STATUS.IDLE
            state.data = action.payload
        }).addCase(fetchUser.rejected, (state,action)=>{
            state.status = STATUS.ERROR
        })
    },
})

export const {} = userSlice.actions
export default userSlice.reducer

export const fetchUser = createAsyncThunk<IUser[]>('feature/user', async ()=>{
    const response : AxiosResponse = await axios.get(`${fetchURL}/api/v1/users`)
    const jsonData : any= await response.data
    return jsonData.data
})