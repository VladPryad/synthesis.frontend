import { TopMenu } from "../../components/TopMenu";
import { useState } from 'react';
import { Particle } from '../../components/Particle';
import { Element } from '../../components/Element';
import { Molecule } from '../../components/Molecule';

export function App() {
    const [tabIndex, setTab] = useState(0);

    const Tabs = {
        PARTICLE: 0,
        ELEMENT: 1,
        MOLECULE: 2
    }

    return (
        <div style={{backgroundColor:"#E0FFF1"}}>
            <TopMenu setTab = {setTab} />
            {tabIndex === Tabs.PARTICLE && 
                <Particle />}
            {tabIndex === Tabs.ELEMENT && 
                <Element />}
            {tabIndex === Tabs.MOLECULE && 
                <Molecule />}
        </div>
    )
}