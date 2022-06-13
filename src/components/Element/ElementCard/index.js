import { useWeb3React } from "@web3-react/core";
import store from "../../../utils/store";
import { requestObtainElementThunk, transferElementToMoleculeThunk } from "../../../utils/store/elementInteractionSlice";
import Grid from "@material-ui/core/Grid";
import Avatar from "material-ui/Avatar";
import { Button } from "@material-ui/core";
import randomColor from "randomcolor";
import BigNumber from "bignumber.js";
import { formatAmount, printAmount, printSymbol } from "../../../utils/format";

export function ElementCard(props) {
    const { amount, symbol, logo, element } = props;

    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

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

    const printCompound = () => {

        return(
            <div style={{backgroundColor: "white", marginTop: "10px", borderRadius: "5px"}}>
                <span style={{color: "#5359FF", marginLeft: "20px"}}> {element.compound[0]} </span>
                <span style={{color: "#FF2E2E", marginLeft: "10px", marginRight: "10px"}}>{element.compound[1]} </span>
                <span style={{color: "#C8D700", marginRight: "20px"}}>{element.compound[2]} </span>
            </div>
        )
    }

    return (
        <Grid item xs={2}>
            <div id="outer" style={{marginTop: "30px", marginBottom: "30px", padding: "5px", border: "1px solid white", borderRadius: "50px", backgroundColor: "#FAF1FD"}}>
                <Avatar style={{width: "80px", marginTop: "20px"}} backgroundColor={randomColor()}>{printSymbol(symbol, element.id)}</Avatar>
                {printCompound()} 
                <br/>
                    <span>{printAmount(amount)}</span>
                    <br/>
                    <Button color="primary" fullWidth={false} size="small" onClick={() => transferToMolecule()} variant="outlined">
                        to Molecule balance
                    </Button>
                    <Button style={{marginTop: "20px", marginBottom: "20px"}} color="primary" fullWidth={false} size="small" onClick={() => requestObtain()} variant="contained">
                        request obtain
                    </Button>
            </div>
        </Grid>
    )
}