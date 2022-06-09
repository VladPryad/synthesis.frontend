import { createSlice } from '@reduxjs/toolkit';

export const providerSlice = createSlice({
    name: 'provider',
    initialState: {
      provider: null
    },
    reducers: {
        setProvider: async (state, action) => {
          state.provider = action.payload;
        }
    }
  })
  
export const { setProvider } = providerSlice.actions
export default providerSlice.reducer