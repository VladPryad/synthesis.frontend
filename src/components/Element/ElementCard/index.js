import { useWeb3React } from "@web3-react/core";
import store from "../../../utils/store";
import { requestObtainElementThunk, transferElementToMoleculeThunk } from "../../../utils/store/elementInteractionSlice";

export function ElementCard(props) {
    const { amount, symbol, logo, element } = props;

    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    // request obtain
    const transferToMolecule = async () => {

        let amount = prompt("Enter amount", "1.0");

        amount = Number.parseFloat(amount);
    
        if(account) {
            store.dispatch(transferElementToMoleculeThunk({ provider: library, account, id: element.id, amount }));
        } else {
            console.log("Cannot request transfer, connect wallet");
        }
    }

    const requestObtain = async () => {
        let amount = prompt("Enter amount", "1.0");

        amount = Number.parseFloat(amount);

        if(account) {
            store.dispatch(requestObtainElementThunk({ provider: library, account, id: element.id, amount }));
        } else {
            console.log("Cannot request obtain, connect wallet");
        }
    }

    return (
        <div>ElementCard: {symbol}:{element.id} Amount: {amount} Compound: {element.compound} 
            <button onClick={() => transferToMolecule()}> to Molecule balance </button>
            <button onClick={() => requestObtain()}> request obtain </button>
        </div>
    )
}