import { useWeb3React } from "@web3-react/core"
import { injected } from "../../../utils/chains"
import { Button } from "@material-ui/core"


export function Wallet() {
    const { active, account, chainId, library, connector, activate, deactivate } = useWeb3React()

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
            <Button variant="contained" onClick={disconnect}>Disconnect</Button> : 
            <Button variant="contained" onClick={connect}>Connect Wallet</Button>}

            <div style={{marginTop: "10px"}}>
            {active ? <span><small><b>{[account.slice(0, 8), account.slice(34, account.length - 1)].join("...")}</b></small></span> : <span></span>}
            </div>
        </div>
    )
}