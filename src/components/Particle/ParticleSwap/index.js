import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/dist/fonts.css'
import { useWeb3React } from "@web3-react/core";
import { useEffect } from 'react';
import { injected } from '../../../utils/chains';
import { TOKEN_LIST } from '../../../config/tokenList';
import { ParticleBoard } from '../ParticleBoard';

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
        library,
        setError,
    } = useWeb3React();

    console.log({account, chainId, library, active});

    const theme = {
        primary: '#1F4A05',
        secondary: '#5F7D52',
        interactive: '#CBD6BA',
        container: '#D9ECD9',
        module: '#E9F7DF',
        accent: '#8E8B78',
        outline: '#CADDC2',
        dialog: '#FFF',
        fontFamily: 'Nunito',
        borderRadius: 0.8,
      }

    return (
        <div>
            <ParticleBoard />
            <div className="Uniswap">
                <SwapWidget
                    provider={library?.currentProvider}
                    jsonRpcEndpoint={jsonRpcEndpoint}
                    theme={theme}
                    tokenList={TOKEN_LIST}
                />
            </div>
        </div>
    )
}