import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CONTRACTS_OWNER } from '../../config/constants';
import particleIndex from '../../config/particleIndex';
import element from "../../contracts/Element";
import electron from "../../contracts/Electron";
import proton from "../../contracts/Proton";
import neutron from "../../contracts/Neutron";
import {BigNumber} from "bignumber.js";


export const transferParticleToElementThunk = createAsyncThunk(
  'particleInteraction/transferParticle',
  async ({ account, provider, id, amount }, thunkAPI) => {
    const web3 = provider;

    let particleContract;

    switch(id) {
        case particleIndex['EEE']:
            particleContract = new web3.eth.Contract(electron.abi, electron.address);
            break;
        case particleIndex['PPP']:
            particleContract = new web3.eth.Contract(proton.abi, proton.address);
            break;
        case particleIndex['NNN']:
            particleContract = new web3.eth.Contract(neutron.abi, neutron.address);
            break;
        default:
            throw new Error("No such particle exists");
            break;
    }

    amount = web3.utils.toWei(amount.toString(), 'ether');
    amount = new BigNumber(amount);

    let res = await particleContract.methods.transfer(element.address, amount).send({from: account})
    .on('receipt', (r) => console.log("Transfer particles receipt",{r}))
    .on('error', (err) => {
        console.log("Error while transferring particles to Element",{err})
        throw err;
    });

    return res;
  }
)

export const particleInteractionSlice = createSlice({
    name: 'particleInteraction',
    initialState: {
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [transferParticleToElementThunk.pending]: (state) => {
        state.loading = true

        console.log("Executing transfer particle transaction")
      },
      [transferParticleToElementThunk.fulfilled]: (state, action) => {
        state.loading = false

        console.log("Successfully transferred particles to Element");
      },
      [transferParticleToElementThunk.rejected]: (state, action) => {
        state.loading = false

        console.log("Failed to transfer particles", action.payload)
      },
    },
  })
  
export const {  } = particleInteractionSlice.actions
export default particleInteractionSlice.reducer