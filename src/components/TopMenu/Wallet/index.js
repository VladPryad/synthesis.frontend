import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from "@web3-react/core"

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})


export function Wallet() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

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
        <div className="flex flex-col items-center justify-center">
            <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
                {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
            <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
        </div>
    )
}