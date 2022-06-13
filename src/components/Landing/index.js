import background from "../../assets/images/background.jpg";
import Navbar from "../../components/Navbar";
import {LandingFrameMessage} from './LengingText'

export function LandingFrame() {
    const style = {
        backgroundImage: `url(${background})`,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <Navbar />
        <LandingFrameMessage />
    </div>
}