import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import store from '.';
import electron from '../../contracts/Electron';
import proton from '../../contracts/Proton';
import neutron from '../../contracts/Neutron';

export const getParticlesBalanceThunk = createAsyncThunk(
  'particlesBalance/getParticlesBalance',
  async ({ account, provider }, thunkAPI) => {
    const web3 = provider;

    const electronContract = new web3.eth.Contract(electron.abi, electron.address);
    const protonContract = new web3.eth.Contract(proton.abi, proton.address);
    const neutronContract = new web3.eth.Contract(neutron.abi, neutron.address);

    return {
      electron: await electronContract.methods.balanceOf(account).call(),
      proton: await protonContract.methods.balanceOf(account).call(),
      neutron: await neutronContract.methods.balanceOf(account).call(),
    }
  }
)

export const particlesBalanceSlice = createSlice({
    name: 'particlesBalance',
    initialState: {
      balances: {
        electron: 0,
        proton: 0,
        neutron: 0,
      },
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [getParticlesBalanceThunk.pending]: (state) => {
        state.loading = true
        console.log("Loading particle balances")
      },
      [getParticlesBalanceThunk.fulfilled]: (state, action) => {
        state.loading = false
        state.balances = action.payload
        console.log("Successfully fetched particle balances: ", action)
      },
      [getParticlesBalanceThunk.rejected]: (state, action) => {
        state.loading = false
        console.log("Failed fetching particle balances", action.payload)
      },
    },
  })
  
export const {  } = particlesBalanceSlice.actions
export default particlesBalanceSlice.reducer