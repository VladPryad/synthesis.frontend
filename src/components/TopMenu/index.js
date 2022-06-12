import { TopTabs } from "./TopTabs";
import Grid from "@material-ui/core/Grid";
import { Wallet } from "./Wallet";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo_c.png'


export function TopMenu(props) {
    const { active, account, chainId, library, connector, activate, deactivate } = useWeb3React()

    let navigate = useNavigate(); 

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <div>
                    <img className="rotate90" style={{margin: "10px"}} height={'64px'} onClick={() => navigate("/home")} alt="Particles tab" src={logo}/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{backgroundColor: "#f2e6ff", borderRadius: "50px"}}>
                    <TopTabs setTab={props.setTab} />
                </div>
            </Grid>
            <Grid item xs={1}>
                <div style={{marginTop: "20px"}}> {account ? <span style={{backgroundColor: "#b3ffb3"}}> Network {chainId}</span> : <span style={{backgroundColor: "#ffb3b3"}}> No network</span>}</div>
            </Grid>
            <Grid item xs={1}>
                < Wallet/>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    )
}