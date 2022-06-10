import { ElementCard } from "../ElementCard";
import store from "../../../utils/store";
import { useEffect } from "react";
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice";
import { useWeb3React } from "@web3-react/core";
import elements from '../../../config/elementList';
import { getElementBalanceThunk } from "../../../utils/store/elementBalanceSlice";

export function ElementList() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const { elementsBalance } = store.getState();

    if(account) {
        store.dispatch(getElementBalanceThunk({ provider: library, account }));
    } else {
        console.log("Cannot fetch element balances, connect wallet");
    }

    const elList = [];

    for(let el in elements) {
        let amount = elementsBalance.balances[el];

        elList.push(
            <ElementCard key={el} amount={amount} symbol={el} element={elements[el]} />
        )
    }

    return (
        <div>Element List
            Locked particles: { elementsBalance.lockedParticles } 
                {elList}
        </div>

    )
}