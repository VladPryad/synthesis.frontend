import Grid from "@material-ui/core/Grid";
import particleIndex from "../../../config/particleIndex";
import { useWeb3React } from "@web3-react/core";
import store from "../../../utils/store";
import { transferParticleToElementThunk } from "../../../utils/store/particleInteractionSlice";

export function ParticleCard(props) {
    const { id, amount } = props;

    const particle = Object.entries(particleIndex).find(ent => ent[1] == id);

    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const transferToElement = async () => {

        let amount = prompt("Enter amount", "1.0");

        amount = Number.parseFloat(amount);
    
        if(account) {
            store.dispatch(transferParticleToElementThunk({ provider: library, account, id, amount }));
        } else {
            console.log("Cannot request transfer, connect wallet");
        }
    }

    return (
        <Grid item xs={4}>
                <div /*style={{background: "green"}}*/>{particle[0]}: {amount} {particle[0]}
                    <button onClick={() => transferToElement()}> to Element balance </button>
                </div>
        </Grid>
    )
}