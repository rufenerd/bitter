import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';
import Slide from './Slide'

const Pcr = () => {
    const [active, setActive] = useState();
    const [items, setItems] = useState([]);
    const [unlockTier, setUnlockTier] = useState(0);
    const [factor, setFactor] = useState(1)
    const [temp, setTemp] = useState(20)
    const [denatured, setDenatured] = useState(false);
    const [annealed, setAnnealed] = useState(false);

    const reset = () => {
        setItems([])
        setUnlockTier(0)
    }

    var slideConfig;
    switch (active) {
        case 'water':
            slideConfig = {
                "headerText": "DNase/RNase/Protease-free water",
                "bodyText": "Ultra-pure H₂0 is the solvent that forms the medium where the PCR reaction will occur. It is certified free of DNase/RNase/Protease, enzymes in the air and normal water that would break down DNA and ruin the experiment."
            }
            break;
        case 'template':
            const bodyText = "After swishing 5 mL of 0.9% saline in your mouth for 30 seconds, it contains several copies of your DNA to copy."
            if (items.includes("chelex")) {
                slideConfig = {
                    "headerText": "DNA to Copy and Analyze",
                    bodyText,
                    "resultText": "After spinning in the centrifuge, it can be separated from the other cell matter and added."
                }
            } else {
                slideConfig = {
                    "headerText": "Runied!",
                    bodyText,
                    "bodyTresultTextext": "But because the DNA was not protected, heavy metals like Mg2+ destroyed your DNA before you could use it. No problem, we'll just need to start over!",
                    onClose: reset
                }
            }
            break;
        case 'chelex':
            slideConfig = {
                "headerText": "Chelex to Protect DNA",
            }
            break;
        case 'buffer':
            slideConfig = {
                "headerText": "Maintain pH, Promote Enzyme Activity"
            }
            break;
        case 'polymerase':
            slideConfig = {
                "headerText": "Taq Polymerase Makes the Copies"
            }
            break;
        case 'dntp':
            slideConfig = {
                "headerText": "Building Blocks for Copies"
            }
            break;
        case 'primer':
            slideConfig = {
                "headerText": "Target the Bitter Tasting Gene"
            }
            break;
        case 'haeiii':
            slideConfig = {
                "headerText": "HaeIII cuts Taster Gene"
            }
            break;
        case 'electrophoresis':
            slideConfig = {
                "headerText": "Analyze with gel electrophoresis!"
            }
            break;
        case 'cycler':
            slideConfig = {
                "headerText": "Auto-cylce PCR",
                "onClose": () => {
                    setTemp(20)
                    setFactor(1000000000)
                    setUnlockTier(4)
                }
            }
            break;

        case '64':
            if (denatured && !annealed) {
                slideConfig = {
                    "headerText": "Cool to 64ºC and Anneal",
                    "resultText": "Annealing takes place. Ready to make some copies!",
                    "onClose": () => {
                        setTemp(64)
                        setAnnealed(true)
                    }
                }
            } else if (denatured && annealed) {
                slideConfig = {
                    "headerText": "Cool to 64ºC",
                    "resultText": "Already annealed. Raise the heat to make some copies!",
                    "onClose": () => {
                        setTemp(64)
                    }
                }
            } else {
                slideConfig = {
                    "headerText": "Set temperature to 64ºC",
                    "resultText": "The DNA is not denatured and is still double stranded, so no annealing of the primer takes place.",
                    "onClose": () => {
                        setTemp(64)
                    }
                }
            }
            break;
        case '72':
            if (annealed) {
                slideConfig = {
                    "headerText": "Set temp to 72ºC and Extend",
                    "onClose": () => {
                        const newFactor = factor * 2
                        setTemp(72)
                        setFactor(newFactor)
                        setDenatured(false)
                        setAnnealed(false)
                        if (newFactor >= 8) {
                            setUnlockTier(3)
                        }
                    },
                    "resultText": "Doubled the amount of TAS2R38 DNA!"
                }
            } else if (denatured) {
                slideConfig = {
                    "headerText": "Set temp to 72ºC",
                    "onClose": () => {
                        setTemp(72)
                    },
                    "resultText": "The already separated DNA strands heat up, but with no primer attached no copies can be made."
                }
            } else {
                slideConfig = {
                    "headerText": "Set temp to 72ºC",
                    "onClose": () => {
                        setTemp(72)
                    },
                    "resultText": "The DNA is not denatured and is still double stranded. More heat is needed to split the DNA."
                }
            }
            break;
        case '94':
            if (!denatured) {
                slideConfig = {
                    "headerText": "Heat to 94ºC and Denature",
                    "resultText": "Each strand of DNA separates into two single-strands!",
                    "onClose": () => {
                        setTemp(94)
                        setDenatured(true)
                    }
                }
            } else if (annealed) {
                slideConfig = {
                    "headerText": "Heat to 94ºC and Denature",
                    "resultText": "The primers detach from the single-stranded DNA...",
                    "onClose": () => {
                        setTemp(94)
                        setAnnealed(false)
                    }
                }
            } else {
                slideConfig = {
                    "headerText": "Heat to 94ºC and Denature",
                    "resultText": "The already separated DNA strands heat up...",
                    "onClose": () => {
                        setTemp(94)
                        setDenatured(true)
                    }
                }
            }
            break
        default:
            slideConfig = {
                "headerText": "Error!"
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
                if (factor >= 8) {
                    newUnlockTier = 3;
                    if (factor >= 1000000000) {
                        newUnlockTier = 4;
                        if (["haeiii"].every(tierItem => newItems.includes(tierItem))) {
                            newUnlockTier = 5;
                            if (["electrophoresis"].every(tierItem => newItems.includes(tierItem))) {
                                newUnlockTier = 6;
                            }
                        }
                    }
                }
            }
        }
        setUnlockTier(newUnlockTier);
        setActive(newActive)
    };

    return <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <div>{`Temperature: ${temp}ºC`}</div>
        <div>{`Replication Factor: ${factor}x`}</div>
        <div>{unlockTier}</div>

        <ActionMenu
            setActive={handleNewActive}
            unlockTier={unlockTier}
        />
        {active && <Slide active={active} config={slideConfig} onClose={() => setActive("")} />}
    </div >
}

export default Pcr