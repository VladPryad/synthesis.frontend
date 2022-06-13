import { useWeb3React } from "@web3-react/core";
import { requestObtainMoleculeThunk } from '../../../utils/store/moleculeInteractionSlice'
import store from "../../../utils/store";
import elementList from "../../../config/elementList";
import elementSequence from "../../../config/elementSequence";
import Grid from "@material-ui/core/Grid";
import Avatar from "material-ui/Avatar";
import { Button } from "@material-ui/core";
import randomColor from "randomcolor";

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

    const color = randomColor();

    return (
        <Grid item xs={1}>
                <div id="outer"  style={{margin: "30px", padding: "5px", border: "1px solid white", borderRadius: "20px", backgroundColor: color}}>
                    <div style={{backgroundColor: 'white', borderRadius: '10px', paddingLeft: "30px", paddingRight: "30px", marginTop: "5px"}}>
                    <span>#{mol.id}</span>
                    </div>
                    <div style={{backgroundColor: 'white', borderRadius: '50px', padding: "10px", margin: "10px"}}><span>{mol.uri}</span></div>
                    <div style={{backgroundColor: 'white', borderRadius: '50px', padding: "10px", marginTop: "10px"}}>
                        <span>{printMoleculeCompound()} </span>
                    </div>
                    <br/>
                    { isSpare && 
                        <Button style={{marginTop: "0px", marginBottom: "10px"}} color="primary" fullWidth={false} size="small" onClick={() => requestObtain()} variant="contained">
                            Obtain
                        </Button>
                    }
                </div>
        </Grid>
    )
}