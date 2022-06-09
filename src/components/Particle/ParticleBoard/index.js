import Grid from "@material-ui/core/Grid";
import store from "../../../utils/store";
import { useEffect } from "react";
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice";
import { useWeb3React } from "@web3-react/core";

export function ParticleBoard() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const { particlesBalance } = store.getState();

    const { electron, proton, neutron } = particlesBalance.balances;

    if(account) {
        store.dispatch(getParticlesBalanceThunk({ provider: library, account }));
    } else {
        console.log("Cannot fetch particle balances, connect wallet");
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div style={{background: "blue"}}>Electron: {electron} EEE</div>
            </Grid>
            <Grid item xs={4}>
                <div style={{background: "red"}}>Proton: {proton} PPP</div>
            </Grid>
            <Grid item xs={4}>
                <div style={{background: "green"}}>Neutron: {neutron} NNN</div>
            </Grid>
        </Grid>
    )
}