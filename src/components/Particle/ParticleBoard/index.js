import Grid from "@material-ui/core/Grid";
import store from "../../../utils/store";
import { useEffect } from "react";
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice";
import { useWeb3React } from "@web3-react/core";
import particleIndex from "../../../config/particleIndex";
import { ParticleCard } from "../ParticleCard";

export function ParticleBoard() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const { particlesBalance } = store.getState();

    const { electron, proton, neutron } = particlesBalance.balances;

    let balanceList = {
        EEE: electron,
        PPP: proton,
        NNN: neutron
    }

    if(account) {
        store.dispatch(getParticlesBalanceThunk({ provider: library, account }));
    } else {
        console.log("Cannot fetch particle balances, connect wallet");
    }

    const particlesList = Object.entries(particleIndex).map(ent => <ParticleCard key={ent[1]} id={ent[1]} amount={balanceList[ent[0]]} />);

    return (
        <Grid container spacing={2}>
            {particlesList}
            {/* <Grid item xs={4}>
                <div style={{background: "blue"}}>Electron: {electron} EEE</div>
            </Grid>
            <Grid item xs={4}>
                <div style={{background: "red"}}>Proton: {proton} PPP</div>
            </Grid>
            <Grid item xs={4}>
                <div style={{background: "green"}}>Neutron: {neutron} NNN</div>
            </Grid> */}
        </Grid>
    )
}