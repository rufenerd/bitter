import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';
import Slide from './Slide'

const Pcr = () => {
    const [active, setActive] = useState();
    const [items, setItems] = useState([]);
    const [unlockTier, setUnlockTier] = useState(0);
    const [factor, setFactor] = useState(1)

    var slideConfig;
    switch (active) {
        case 'water':
            slideConfig = {
                "buttonText": "Add more stuff!"
            }
            break;
        case 'template':
            slideConfig = {
                "buttonText": "DNA to Copy and Analyze"
            }
            break;
        case 'chelex':
            slideConfig = {
                "buttonText": "Chelex to Protect DNA"
            }
            break;
        case 'buffer':
            slideConfig = {
                "buttonText": "Maintain pH, Promote Enzye Activity"
            }
            break;
        case 'polymerase':
            slideConfig = {
                "buttonText": "Taq Polymerase Makes the Copies"
            }
            break;
        case 'dntp':
            slideConfig = {
                "buttonText": "Building Blocks for Copies"
            }
            break;
        case 'primer':
            slideConfig = {
                "buttonText": "Target the Bitter Tasting Gene"
            }
            break;
        case 'haeiii':
            slideConfig = {
                "buttonText": "HaeIII cuts Taster Gene"
            }
            break;
        case 'electrophoresis':
            slideConfig = {
                "buttonText": "Analyze with gel electrophoresis!"
            }
            break;
        case '64':
            slideConfig = {
                "buttonText": "Cool to 64ºC and Anneal"
            }
            break;
        case '72':
            slideConfig = {
                "buttonText": "Set temp to 72ºC and Extend"
            }
            break;
        case '94':
            slideConfig = {
                "buttonText": "Heat to 94ºC and Denature"
            }
            break;
        default:
            slideConfig = {
                "buttonText": "Error!"
            }
            break;
    }

    const handleNewActive = (newActive) => {
        const newItems = [...items, newActive]
        setItems(newItems);
        var newUnlockTier = 0;
        if (newItems.includes("water")) {
            newUnlockTier = 1;
            if (["polymerase", "template", "dntp", "chelex", "primer", "buffer"].every(tierItem => newItems.includes(tierItem))) {
                newUnlockTier = 2;
                if (factor >= 1000000000) {
                    newUnlockTier = 3;
                    if (["haeiii"].every(tierItem => newItems.includes(tierItem))) {
                        newUnlockTier = 4;
                        if (["electrophoresis"].every(tierItem => newItems.includes(tierItem))) {
                            newUnlockTier = 5;
                        }
                    }
                }

            }
        }
        setUnlockTier(newUnlockTier);
        setActive(newActive)
    };

    return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <div>{unlockTier}</div>
        <div>{items?.join(", ") || "Empty"}</div>
        <ActionMenu
            setActive={handleNewActive}
            unlockTier={unlockTier}
        />
        {active && <Slide active={active} config={slideConfig} onClose={() => setActive("")} />}
    </div >
}

export default Pcr