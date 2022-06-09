import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CONTRACTS_OWNER } from '../../config/constants';
import elementList from '../../config/elementList';
import molecule from "../../contracts/Molecule";

export const getMoleculeBalanceThunk = createAsyncThunk(
  'moleculesBalance/getMoleculesBalance',
  async ({ account, provider }, thunkAPI) => {
    const web3 = provider;

    const moleculeContract = new web3.eth.Contract(molecule.abi, molecule.address);

    const obtained = [];
    const spare = [];

    const tokenCount = await moleculeContract.methods.tokenCounter().call();

    for(let i = 0; i < Number.parseInt(tokenCount); i++) {
        let owner = await moleculeContract.methods.ownerOf(i).call();

        if(owner == account) {
            obtained.push(i);
        } else if (owner == CONTRACTS_OWNER) {
            spare.push(i);
        }
    }

    let locked = await moleculeContract.methods.getElementsBalance(account).call()

    return { obtained, spare , locked }
  }
)

export const moleculesBalanceSlice = createSlice({
    name: 'moleculesBalance',
    initialState: {
      obtained: [],
      spare: [],
      lockedElements: [],
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [getMoleculeBalanceThunk.pending]: (state) => {
        state.loading = true

        console.log("Loading molecules balances")
      },
      [getMoleculeBalanceThunk.fulfilled]: (state, { payload }) => {
        state.loading = false

        const { obtained, spare, locked } = payload;

        state.obtained = obtained;
        state.spare = spare;
        state.lockedElements = locked;

        console.log("Successfully fetched molecules balances: ", payload)
      },
      [getMoleculeBalanceThunk.rejected]: (state) => {
        state.loading = false

        console.log("Failed fetching molecules balances")
      },
    },
  })
  
export const { fetchParticlesBalance } = moleculesBalanceSlice.actions
export default moleculesBalanceSlice.reducer