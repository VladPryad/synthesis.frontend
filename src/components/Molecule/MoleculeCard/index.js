import { useWeb3React } from "@web3-react/core";
import { requestObtainMoleculeThunk } from '../../../utils/store/moleculeInteractionSlice'
import store from "../../../utils/store";
import elementList from "../../../config/elementList";
import elementSequence from "../../../config/elementSequence";

export function MoleculeCard(props) {
    const { mol, isSpare } = props;

    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const requestObtain = async () => {
    
        if(account) {
            store.dispatch(requestObtainMoleculeThunk({ provider: library, account,id:  mol.id }));
        } else {
            console.log("Cannot request molecule obtain, connect wallet");
        }
    }

    const printMoleculeCompound = () => {
        let formula = [];

        let elements =  Object.entries(elementList);

        for(let el of elementSequence) {
            let element = elements.find(desc => desc[0] == el);

            let atomQuantity = mol.compound[element[1].id];

            if(atomQuantity != 0) formula.push([el, atomQuantity > 1 ? <sub>{atomQuantity.toString()}</sub> : '']);
        }

        return formula;
    }

    return (
        <div>MoleculeCard: {mol.id} Description: {mol.uri} Compound: {printMoleculeCompound()}
            { isSpare && 
                <button onClick={() => requestObtain()}> Request obtain this one </button>
            }
        </div>
    )
}