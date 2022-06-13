import Grid from "@material-ui/core/Grid";
import particleIndex from "../../../config/particleIndex";
import { useWeb3React } from "@web3-react/core";
import store from "../../../utils/store";
import { transferParticleToElementThunk } from "../../../utils/store/particleInteractionSlice";
import Avatar from "material-ui/Avatar";
import { Button } from "@material-ui/core";
import { formatAmount } from "../../../utils/format";

export function ParticleCard(props) {
    const { id, amount, enableTransfer } = props;

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

    const name = particle[1] == 0 ? 
        "e⁻" : particle[1] == 1 ?
        "p⁺" : "n⁰";

    const color = particle[1] == 0 ? 
        "#74D8E5" : particle[1] == 1 ?
        "#E574A2" : "#E5DE74";

    return (
        <Grid item xs={4}>
                <div id="outer" style={{marginTop: "30px", marginBottom: "30px", padding: "5px", border: "1px solid white", borderRadius: "50px", backgroundColor: "#FAF1FD"}}>
                <Avatar backgroundColor={color} id="inner" >{name}</Avatar>
                <br/>
                    <span>{formatAmount(amount)} {particle[0]}</span>
                    <br/>
                    {enableTransfer &&
                    <Button color="primary" fullWidth={false} size="small" onClick={() => transferToElement()} variant="outlined">
                        to Element balance
                    </Button>}
                </div>
        </Grid>
    )
}