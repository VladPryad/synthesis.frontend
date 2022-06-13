import { ParticleSwap } from "./ParticleSwap";
import LinearProgress from "material-ui/LinearProgress";
import store from "../../utils/store";
import { useSelector } from "react-redux";

export function Particle() {

    const isLoading = useSelector(state => state.particlesBalance.loading);

    return (
        
        <div>
            { isLoading ? 
            <LinearProgress style={{marginTop: "20px"}} /> :
            < ParticleSwap/> }
        </div>
    )
}