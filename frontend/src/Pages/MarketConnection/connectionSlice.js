import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Api from '../../Config/Api.js'
import {universalToast} from '../../Components/ToastMessages/ToastMessages.js'

// INN orqali do'konni topish
export const getMarketByInn = createAsyncThunk(
    'connections/getMarketByInn',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/connections/getmarketbyinn', body)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konni ulash uchun so'rovni yuborish
export const createRequestToConnection = createAsyncThunk(
    'connections/createRequestToConnection',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/connections/createrequest', body)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konning ulash uchun kelgan so'rovlarini olish
export const incomingRequestsToConnection = createAsyncThunk(
    'connections/incomingRequestsToConnection',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post(
                '/connections/getincomingrequests',
                body
            )
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konning ulash uchun yuborilgan so'rovlarini olish
export const sendingRequestsToConnection = createAsyncThunk(
    'connections/sendingRequestsToConnection',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post(
                '/connections/getsendingrequests',
                body
            )
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konning ulash uchun kelgan so'rovlar sonini olish
export const getNewRequestsToConnection = createAsyncThunk(
    'connections/getNewRequestsToConnection',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/connections/getnewrequests', body)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konning ulash uchun kelgan so'rovga javob berish
export const answerToRequest = createAsyncThunk(
    'connections/answerToRequest',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/connections/answertorequest', body)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Do'konning ulash uchun kelgan so'rovni o'chirish
export const deleteRequestToConnection = createAsyncThunk(
    'connections/deleteRequestToConnection',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post('/connections/deleterequest', body)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Ulangan do'konlar ro'yxatini olish
export const getConnectionMarkets = createAsyncThunk(
    'connections/getConnectionMarkets',
    async (body = {}, {rejectWithValue}) => {
        try {
            const {data} = await Api.post(
                '/connections/getconnectionmarkets',
                body
            )
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const connectionSlice = createSlice({
    name: 'connections',
    initialState: {
        marketByInn: null,
        connections: [],
        loading: false,
        errorLoading: null,
        incomingRequests: [],
        sendingRequests: [],
        countOfNewRequests: 0,
    },
    reducers: {},
    extraReducers: {
        [getMarketByInn.pending]: (state) => {
            state.loading = true
        },
        [getMarketByInn.fulfilled]: (state, {payload}) => {
            state.marketByInn = payload
            state.loading = false
        },
        [getMarketByInn.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [createRequestToConnection.pending]: (state) => {
            state.loading = true
        },
        [createRequestToConnection.fulfilled]: (state, {payload}) => {
            universalToast(payload.message, 'success')
            state.loading = false
            state.marketByInn = null
        },
        [createRequestToConnection.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [incomingRequestsToConnection.pending]: (state) => {
            state.loading = true
        },
        [incomingRequestsToConnection.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.incomingRequests = payload
        },
        [incomingRequestsToConnection.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [sendingRequestsToConnection.pending]: (state) => {
            state.loading = true
        },
        [sendingRequestsToConnection.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.sendingRequests = payload
        },
        [sendingRequestsToConnection.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [getNewRequestsToConnection.pending]: (state) => {
            state.loading = true
        },
        [getNewRequestsToConnection.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.countOfNewRequests = payload
        },
        [getNewRequestsToConnection.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [answerToRequest.pending]: (state) => {
            state.loading = true
        },
        [answerToRequest.fulfilled]: (state, {payload}) => {
            state.loading = false
            universalToast(payload, 'success')
        },
        [answerToRequest.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [deleteRequestToConnection.pending]: (state) => {
            state.loading = true
        },
        [deleteRequestToConnection.fulfilled]: (state, {payload}) => {
            state.loading = false
            universalToast(payload, 'success')
        },
        [deleteRequestToConnection.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
        [getConnectionMarkets.pending]: (state) => {
            state.loading = true
        },
        [getConnectionMarkets.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.connections = payload
        },
        [getConnectionMarkets.rejected]: (state, {payload}) => {
            universalToast(payload, 'error')
            state.loading = false
        },
    },
})

export default connectionSlice.reducer