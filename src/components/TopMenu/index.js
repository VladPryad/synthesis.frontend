import { TopTabs } from "./TopTabs";
import Grid from "@material-ui/core/Grid";
import { Wallet } from "./Wallet";


export function TopMenu(props) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <div style={{background: "green"}}>Logo</div>
            </Grid>
            <Grid item xs={5}>
                <TopTabs setTab={props.setTab} />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
                <div style={{background: "red"}}>Network</div>
            </Grid>
            <Grid item xs={1}>
                < Wallet/>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}