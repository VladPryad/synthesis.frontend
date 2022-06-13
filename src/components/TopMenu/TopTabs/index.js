import Grid from "@material-ui/core/Grid";
import IconButton from "material-ui/IconButton";
import { Icon } from "@material-ui/core";
import particle from "../../../assets/images/particle.png";
import element from "../../../assets/images/element.png";
import molecule from "../../../assets/images/molecule.png";

export function TopTabs(props) {
    return (
        <div style={{marginTop: "80px"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img style={{display: "block", margin: "auto"}} height={'75px'} onClick={() => props.setTab(0)} alt="Particles tab" src={particle}/>
                </Grid>
                <Grid item xs={4}>
                    <img style={{display: "block", margin: "auto"}} height={'75px'} onClick={() => props.setTab(1)} alt="Elements tab" src={element}/>
                </Grid>
                <Grid item xs={4}>
                    <img style={{display: "block", margin: "auto"}} height={'75px'} onClick={() => props.setTab(2)} alt="Molecules tab" src={molecule}/>
                </Grid>
            </Grid>
        </div>
    )
}