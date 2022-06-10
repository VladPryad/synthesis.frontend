import { useWeb3React } from "@web3-react/core";
import { requestObtainMoleculeThunk } from '../../../utils/store/moleculeInteractionSlice'
import store from "../../../utils/store";

export function MoleculeCard(props) {
    const { id, isSpare } = props;

    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const requestObtain = async () => {
    
        if(account) {
            store.dispatch(requestObtainMoleculeThunk({ provider: library, account, id }));
        } else {
            console.log("Cannot request molecule obtain, connect wallet");
        }
    }

    return (
        <div>MoleculeCard: {id}
            { isSpare && 
                <button onClick={() => requestObtain()}> Request obtain this one </button>
            }
        </div>
    )
}