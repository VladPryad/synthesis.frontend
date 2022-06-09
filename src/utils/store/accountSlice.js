import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: 'address',
    initialState: {
      address: null
    },
    reducers: {
        setAccount: async (state, action) => {
          state.address = action.payload;
        }
    }
  })
  
export const { setAccount } = accountSlice.actions
export default accountSlice.reducer