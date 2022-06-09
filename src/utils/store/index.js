import { configureStore } from '@reduxjs/toolkit'
import chainReducer from './chainSlice'
import particlesBalanceReducer from './particleBalanceSlice'
import accountReducer from './accountSlice'
import providerReducer from './providerSlice'
import elementsBalanceSlice from './elementBalanceSlice'
import moleculesBalanceSlice from './moleculeBalanceSlice'

  export default configureStore({
    reducer: {
      chain: chainReducer,
      particlesBalance: particlesBalanceReducer,
      elementsBalance: elementsBalanceSlice,
      moleculesBalance: moleculesBalanceSlice,
      account: accountReducer,
      provider: providerReducer
    }
  }) 