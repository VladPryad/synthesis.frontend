import Grid from "@material-ui/core/Grid";

export function TopTabs(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <div onClick={() => props.setTab(0)} style={{background: "gray"}}>Particle</div>
            </Grid>
            <Grid item xs={4}>
                <div onClick={() => props.setTab(1)} style={{background: "gray"}}>Element</div>
            </Grid>
            <Grid item xs={4}>
                <div onClick={() => props.setTab(2)} style={{background: "gray"}}>Molecule</div>
            </Grid>
        </Grid>
    )
}