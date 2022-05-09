import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/dist/fonts.css'
import { useWeb3React } from "@web3-react/core";

const jsonRpcEndpoint = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'

export function ParticleSwap() {
    const {
        account,
        activate,
        active,
        chainId,
        connector,
        deactivate,
        error,
        provider,
        setError,
    } = useWeb3React();

    return (
        <div className="Uniswap">
            <SwapWidget
                provider={provider}
                jsonRpcEndpoint={jsonRpcEndpoint}
            />
        </div>
    )
}