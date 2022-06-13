import { useWeb3React } from "@web3-react/core"
import { injected } from "../../../utils/chains"
import { Button } from "@material-ui/core"
import store from "../../../utils/store"
import { getMoleculeBalanceThunk } from "../../../utils/store/moleculeBalanceSlice"
import { getElementBalanceThunk } from "../../../utils/store/elementBalanceSlice"
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice"
import { useEffect } from "react"


export function Wallet() {
    const { active, account, chainId, library, connector, activate, deactivate } = useWeb3React()

    useEffect(() => {
        if(account) {
            store.dispatch(getParticlesBalanceThunk({ provider: library, account }));
        } else {
            console.log("Cannot fetch particle balances, connect wallet");
        }
    }, [account]);

    useEffect(() => {
        if(account) {
            store.dispatch(getElementBalanceThunk({ provider: library, account }));
        } else {
            console.log("Cannot fetch element balances, connect wallet");
        }
    }, [account]);

    useEffect(() => {
        if(account) {
            store.dispatch(getMoleculeBalanceThunk({ provider: library, account }));
        } else {
            console.log("Cannot fetch molecule balances, connect wallet");
        }
    }, [account]);

    async function connect() {
        try {
            await activate(injected)

        } catch (ex) {
            console.error(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.error(ex)
        }
    }

    return (
        <div style={{marginTop: "10px"}} className="flex flex-col items-center justify-center">
            {active ? 
            <Button variant="contained" color="secondary" onClick={disconnect}>Disconnect</Button> : 
            <Button variant="contained" color="primary" onClick={connect}>Connect Wallet</Button>}

            <div style={{marginTop: "10px"}}>
            {active ? <span><small><b>{[account.slice(0, 8), account.slice(34, account.length - 1)].join("...")}</b></small></span> : <span></span>}
            </div>
        </div>
    )
}