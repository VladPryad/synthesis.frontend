import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import elementList from '../../config/elementList';
import element from "../../contracts/Element";

export const getElementBalanceThunk = createAsyncThunk(
  'elementsBalance/getElementsBalance',
  async ({ account, provider }, thunkAPI) => {
    const web3 = provider;

    const elementContract = new web3.eth.Contract(element.abi, element.address);

    const balances = {};

    for(let el in elementList) {
        let balance = await elementContract.methods.balanceOf(account, elementList[el].id).call()

        balances[el] = balance;
    }

    let locked = await elementContract.methods.getParticlesBalance(account).call()

    return { balances , locked }
  }
)

export const elementsBalanceSlice = createSlice({
    name: 'elementsBalance',
    initialState: {
      balances: {
        C: 0,
        Cl: 0,
        H: 0,
        Li: 0,
        N: 0,
        Na: 0,
        O: 0,
        P: 0,
        S: 0,
      },
      lockedParticles: [],
      loading: false
    },
    reducers: {
    },
    extraReducers: {
      [getElementBalanceThunk.pending]: (state) => {
        state.loading = true

        console.log("Loading elements balances")
      },
      [getElementBalanceThunk.fulfilled]: (state, { payload }) => {
        state.loading = false

        const { balances, locked } = payload;

        state.balances = balances;
        state.lockedParticles = locked;

        console.log("Successfully fetched elements balances: ", payload)
      },
      [getElementBalanceThunk.rejected]: (state) => {
        state.loading = false

        console.log("Failed fetching elements balances")
      },
    },
  })
  
export const { fetchParticlesBalance } = elementsBalanceSlice.actions
export default elementsBalanceSlice.reducer