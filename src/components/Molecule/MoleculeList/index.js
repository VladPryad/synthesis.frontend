import { MoleculeCard } from "../MoleculeCard";
import store from "../../../utils/store";
import { useWeb3React } from "@web3-react/core";
import elements from '../../../config/elementList';
import { getMoleculeBalanceThunk } from "../../../utils/store/moleculeBalanceSlice";
import Grid from "@material-ui/core/Grid";
import elementList from "../../../config/elementList";
import randomColor from "randomcolor";
import { printAmount, printSymbol } from '../../../utils/format'
import Avatar from "material-ui/Avatar";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

export function MoleculeList() {
    const { active, chainId, library, account, connector, activate, deactivate } = useWeb3React()

    const moleculesBalance = useSelector(state => state.moleculesBalance);

    const obtainedList = moleculesBalance.obtained.map(mol => <MoleculeCard key={mol.id} mol={mol} isSpare={false} />);
    const spareList = moleculesBalance.spare.map(mol => <MoleculeCard key={mol.id} mol={mol} isSpare={true} />);

    const lockedElementsList = moleculesBalance.lockedElements
        .map((el, i) => {
            let element = Object.entries(elementList).find(e => e[1].id == i);
            return {
                element,
                amount: el
            }
        })
        .filter(el => !!el.element)
        .sort((a,b) => a.element[1].compound[0] - b.element[1].compound[0])
        .map(el => (
        <Grid item xs={1} key={el.element[1].compound[0]}>
            <div id="outer" style={{marginTop: "30px", marginBottom: "30px", padding: "5px", border: "1px solid white", borderRadius: "50px", backgroundColor: "#FAF1FD"}}>
                <Avatar style={{width: "80px", marginTop: "20px"}} backgroundColor={randomColor()}>{printSymbol(el.element[0], el.element[1].compound[0])}</Avatar>
                <span>{printAmount(el.amount, 10)}</span>
            </div>
        </Grid>));

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}></Grid>
                {lockedElementsList}
                <Grid item xs={1}></Grid>
            </Grid>
            <div style={{backgroundColor: "#f2e6ff", border: "1px solid white"}} id="outer">Your molecules</div>
            <div>
                <Grid container spacing={5}>
                    {obtainedList}
                </Grid>
            </div>
            <div style={{backgroundColor: "#f2e6ff", border: "1px solid white"}} id="outer">Spare molecules</div>
            <div>
                <Grid container spacing={5}>
                    {spareList}
                </Grid>
            </div>
        </div>
    )
}