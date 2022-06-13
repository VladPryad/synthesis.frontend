import { ElementList } from "./ElementList";
import LinearProgress from "material-ui/LinearProgress";
import store from "../../utils/store";
import { useSelector } from "react-redux";

export function Element() {
    const isLoading = useSelector(state => state.elementsBalance.loading);

    return (
        <div>
            { isLoading ? <LinearProgress style={{marginTop: "20px"}} /> :
            <ElementList />}
        </div>

    )
}