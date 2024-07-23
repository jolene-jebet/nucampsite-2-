import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

// fetching data from the server
export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const campsitesSlice = createSlice({
    name: 'campsites',
    //to set default values in our store
    initialState: { isLoading: true, errMess: null, campsitesArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampsites.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCampsites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.campsitesArray = action.payload;
            })
            .addCase(fetchCampsites.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

//reducer that is being exported
export const campsitesReducer = campsitesSlice.reducer;