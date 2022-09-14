import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDealers = createAsyncThunk('dealers/getDealers', async ({page = 1, limit = 9}) => {
  const response = await axios.get("https://mitsubishi-50.sudahdistaging.in/api/frontend/search-dealers", {
    params: {
      page,
      limit
    }
  });
  return response.data.data;
});

export const getDealersLatLong = createAsyncThunk('dealers/getDealers', async ({page = 1, limit = 9, latlong}) => {
  const response = await axios.get("https://mitsubishi-50.sudahdistaging.in/api/frontend/search-dealers", {
    params: {
      page,
      limit,
      latlong
    }
  });
  return response.data.data;
});

export const getDealersKeyword = createAsyncThunk('dealers/getDealers', async ({page = 1, limit = 9, keyword}) => {
  const response = await axios.get("https://mitsubishi-50.sudahdistaging.in/api/frontend/search-dealers", {
    params: {
      page,
      limit,
      keyword
    }
  });
  return response.data.data;
});


const dealerSlice = createSlice({
  name: 'dealer',
  initialState: {
    dealers: [],
    keyword: "",
    params: {page: 1, limit: 9},
    latlong: ""
  },
  reducers: {
    updateKeyword: (state, action) => {
      state.keyword = action.payload
    },
    updateParams: (state, action) => {
      state.params = action.payload
    },
    updateLatLong: (state, action) => {
      state.latlong = action.payload
    }
  },
  extraReducers: {
    [getDealers.fulfilled]: (state, action) => {
      state.dealers = action.payload
    },
    [getDealersLatLong.fulfilled]: (state, action) => {
      state.dealers = action.payload
    },
    [getDealersKeyword.fulfilled]: (state, action) => {
      state.dealers = action.payload
    },
  },
});

export const {updateKeyword, updateParams, updateLatLong} = dealerSlice.actions
export default dealerSlice.reducer;