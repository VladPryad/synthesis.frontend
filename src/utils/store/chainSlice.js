import { createSlice } from '@reduxjs/toolkit';

export const chainSlice = createSlice({
    name: 'chain',
    initialState: {
      chainId: 1
    },
    reducers: {
      chainChanged: (state, action) => {
        console.log("CHAIN CHANGE: ", action, state);
          state.chainId = action.payload;
      }
    }
  })
  
export const { chainChanged } = chainSlice.actions
export default chainSlice.reducer