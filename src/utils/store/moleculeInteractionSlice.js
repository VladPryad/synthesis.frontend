import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CONTRACTS_OWNER } from '../../config/constants';
import elementList from '../../config/elementList';
import molecule from "../../contracts/Molecule";

export const requestObtainMoleculeThunk = createAsyncThunk(
  'moleculeInteraction/requestObtain',
  async ({ account, provider, id }, thunkAPI) => {
    const web3 = provider;

    const moleculeContract = new web3.eth.Contract(molecule.abi, molecule.address);

    let res = await moleculeContract.methods.requestObtain(account, id).send({from: account})
    .on('receipt', (r) => console.log("Obtain molecule receipt",{r}))
    .on('error', (err) => {
        console.log("Error while obtaining Molecule",{err})
        throw err;
    });

    return res;
  }
)

export const moleculeInteractionSlice = createSlice({
    name: 'moleculeInteraction',
    initialState: {
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [requestObtainMoleculeThunk.pending]: (state) => {
        state.loading = true

        console.log("Executing request molecule transaction")
      },
      [requestObtainMoleculeThunk.fulfilled]: (state, action) => {
        state.loading = false

        console.log("Successfully obtained molecule");
      },
      [requestObtainMoleculeThunk.rejected]: (state, action) => {
        state.loading = false

        console.log("Failed request of molecule obtaining", action.payload)
      },
    },
  })
  
export const {  } = moleculeInteractionSlice.actions
export default moleculeInteractionSlice.reducer