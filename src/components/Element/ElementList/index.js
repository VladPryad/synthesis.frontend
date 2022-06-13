import { ElementCard } from "../ElementCard";
import store from "../../../utils/store";
import { useEffect } from "react";
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice";
import { useWeb3React } from "@web3-react/core";
import elements from '../../../config/elementList';
import { getElementBalanceThunk } from "../../../utils/store/elementBalanceSlice";
import particleIndex from "../../../config/particleIndex";
import { ParticleCard } from "../..//Particle/ParticleCard";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

export function ElementList() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const elementsBalance = useSelector(state => state.elementsBalance);

    const elList = [];

    for(let el in elements) {
        let amount = elementsBalance.balances[el];

        elList.push(
            <ElementCard key={el} amount={amount} symbol={el} element={elements[el]} />
        )
    }
    
    const particlesList = Object.entries(particleIndex).map(ent => <ParticleCard enableTransfer={false} key={ent[1]} id={ent[1]} amount={elementsBalance.lockedParticles[ent[1]]} />);

    return (
        <div>
            <Grid container spacing={2}>
                {particlesList}
            </Grid> 
                <div>
                    <Grid container spacing={5}>
                        {elList.sort((a,b) => elements[a.key].compound[0] - elements[b.key].compound[0] )}
                    </Grid>
                </div>
        </div>

    )
}