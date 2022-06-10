import { MoleculeCard } from "../MoleculeCard";
import store from "../../../utils/store";
import { useWeb3React } from "@web3-react/core";
import elements from '../../../config/elementList';
import { getMoleculeBalanceThunk } from "../../../utils/store/moleculeBalanceSlice";

export function MoleculeList() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const { moleculesBalance } = store.getState();

    if(account) {
        store.dispatch(getMoleculeBalanceThunk({ provider: library, account }));
    } else {
        console.log("Cannot fetch element balances, connect wallet");
    }

    const obtainedList = moleculesBalance.obtained.map(id => <MoleculeCard key={id} id={id} isSpare={false} />);
    const spareList = moleculesBalance.spare.map(id => <MoleculeCard key={id} id={id} isSpare={true} />);

    return (
        <div>Element List
            Locked elements: { moleculesBalance.lockedElements.join(" - ") }
            Your molecules: {obtainedList}
            Spare molecules: {spareList}
        </div>

    )
}