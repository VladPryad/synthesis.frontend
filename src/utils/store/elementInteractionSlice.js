import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CONTRACTS_OWNER } from '../../config/constants';
import elementList from '../../config/elementList';
import element from "../../contracts/Element";
import molecule from "../../contracts/Molecule";
import {BigNumber} from "bignumber.js";

export const requestObtainElementThunk = createAsyncThunk(
  'elementInteraction/requestObtain',
  async ({ account, provider, id, amount }, thunkAPI) => {
    const web3 = provider;

    const elementContract = new web3.eth.Contract(element.abi, element.address);

    amount = web3.utils.toWei(amount.toString(), 'ether');
    amount = new BigNumber(amount);

    let res = await elementContract.methods.requestObtain(account, id, amount, "0x00").send({from: account})
    .on('receipt', (r) => console.log("Obtain element receipt",{r}))
    .on('error', (err) => {
        console.log("Error while obtaining Element",{err})
        throw err;
    });

    return res;
  }
)

export const transferElementToMoleculeThunk = createAsyncThunk(
    'elementInteraction/transferParticle',
    async ({ account, provider, id, amount }, thunkAPI) => {
      const web3 = provider;
  
      const elementContract = new web3.eth.Contract(element.abi, element.address);

      amount = web3.utils.toWei(amount.toString(), 'ether');
      amount = new BigNumber(amount);
  
      let res = await elementContract.methods.safeTransferFrom(account, molecule.address, id, amount, "0x00").send({from: account})
      .on('receipt', (r) => console.log("Transfer element receipt",{r}))
      .on('error', (err) => {
          console.log("Error while transferring element to Molecule",{err})
          throw err;
      });
  
      return res;
    }
  )

export const elementInteractionSlice = createSlice({
    name: 'elementInteraction',
    initialState: {
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [requestObtainElementThunk.pending]: (state) => {
        state.loading = true

        console.log("Executing request element transaction")
      },
      [requestObtainElementThunk.fulfilled]: (state, action) => {
        state.loading = false

        console.log("Successfully obtained element");
      },
      [requestObtainElementThunk.rejected]: (state, action) => {
        state.loading = false

        console.log("Failed request of element obtaining", action.payload)
      },

      [transferElementToMoleculeThunk.pending]: (state) => {
        state.loading = true

        console.log("Executing element transfer transaction")
      },
      [transferElementToMoleculeThunk.fulfilled]: (state, action) => {
        state.loading = false

        console.log("Successfully transferred element to Molecule");
      },
      [transferElementToMoleculeThunk.rejected]: (state, action) => {
        state.loading = false

        console.log("Failed to transfer element", action.payload)
      },
    },
  })
  
export const { } = elementInteractionSlice.actions
export default elementInteractionSlice.reducer