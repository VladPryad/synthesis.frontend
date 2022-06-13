import { MoleculeList } from "./MoleculeList";
import LinearProgress from "material-ui/LinearProgress";
import store from "../../utils/store";
import { Empty } from "../Empty";
import { useSelector } from "react-redux";

export function Molecule() {

    const isLoading = useSelector(state => state.moleculesBalance.loading);

    return (
        <div>
            { isLoading ? <LinearProgress style={{marginTop: "20px"}} /> :
            <MoleculeList />}
        </div>
    )
}