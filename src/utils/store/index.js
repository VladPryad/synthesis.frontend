import { configureStore } from '@reduxjs/toolkit'
import chainReducer from './chainSlice'
import particlesBalanceReducer from './particleBalanceSlice'
import accountReducer from './accountSlice'
import providerReducer from './providerSlice'
import elementsBalanceSlice from './elementBalanceSlice'
import moleculesBalanceSlice from './moleculeBalanceSlice'
import moleculeInteractionSlice from './moleculeInteractionSlice'
import elementInteractionSlice from './elementInteractionSlice'
import particleInteractionSlice from './particleInteractionSlice'

  export default configureStore({
    reducer: {
      chain: chainReducer,
      particlesBalance: particlesBalanceReducer,
      elementsBalance: elementsBalanceSlice,
      moleculesBalance: moleculesBalanceSlice,
      moleculeInteraction: moleculeInteractionSlice,
      elementInteraction: elementInteractionSlice,
      particleInteraction: particleInteractionSlice,
      account: accountReducer,
      provider: providerReducer
    }
  }) 