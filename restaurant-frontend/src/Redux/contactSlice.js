import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour récupérer les informations de contact depuis l'API
export const fetchContactData = createAsyncThunk('contact/fetchContactData', async () => {
  try {
    const response = await axios.get('http://localhost:5000/contact');
    return response.data[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de contact : ', error);
    throw error;
  }
});

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    data: null,
    status: 'idle', // idle, loading, succeeded, failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContactData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default contactSlice.reducer;
