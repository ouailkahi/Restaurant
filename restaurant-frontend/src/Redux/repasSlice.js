import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour récupérer les informations de contact depuis l'API
export const fecthRepasData = createAsyncThunk('repas/fecthRepasData', async () => {
  try {
    const response = await axios.get('http://localhost:5000/repas');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de repas : ', error);
    throw error;
  }
});

const repasSlice = createSlice({
  name: 'repas',
  initialState: {
    repas: [],
    status: 'idle', // idle, loading, succeeded, failed
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthRepasData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fecthRepasData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.repas = action.payload;
      })
      .addCase(fecthRepasData.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default repasSlice.reducer;
