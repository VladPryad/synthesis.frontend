import Grid from "@material-ui/core/Grid";
import store from "../../../utils/store";
import { useEffect } from "react";
import { getParticlesBalanceThunk } from "../../../utils/store/particleBalanceSlice";
import { useWeb3React } from "@web3-react/core";
import particleIndex from "../../../config/particleIndex";
import { ParticleCard } from "../ParticleCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

export function ParticleBoard() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const particlesBalance = useSelector(state => state.particlesBalance);

    const { electron, proton, neutron } = particlesBalance.balances;

    let balanceList = {
        EEE: electron,
        PPP: proton,
        NNN: neutron
    }

    const particlesList = Object.entries(particleIndex).map(ent => <ParticleCard enableTransfer={true} key={ent[1]} id={ent[1]} amount={balanceList[ent[0]]} />);

    return (
        <Grid container spacing={2}>
            {particlesList}
        </Grid>
    )
}