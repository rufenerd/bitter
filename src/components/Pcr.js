import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';
import Slide from './Slide'
import VideoPlayer from './VideoPlayer';
import Stats from './Stats'

const Pcr = () => {
    const [active, setActive] = useState();
    const [slideConfig, setSlideConfig] = useState(false);
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


        switch (newActive) {
            case 'water':
                setSlideConfig({
                    "headerText": "DNase/RNase/Protease-free water",
                    "bodyText": "Ultra-pure H₂0 is the solvent that forms the medium where the PCR reaction will occur. It is certified free of DNase/RNase/Protease, enzymes in the air and normal water that would break down DNA and ruin the experiment."
                })
                break;
            case 'template':
                const bodyText = "After swishing 5 mL of 0.9% saline in your mouth for 30 seconds, it contains several copies of your DNA to copy."
                if (items.includes("chelex")) {
                    setSlideConfig({
                        "headerText": "DNA to Copy and Analyze",
                        bodyText,
                        "resultText": "After spinning in the centrifuge, it can be separated from the other cell matter and added."
                    })
                } else {
                    reset()
                    setSlideConfig({
                        "headerText": "Runied!",
                        bodyText,
                        "bodyTresultTextext": "But because the DNA was not protected, heavy metals like Mg2+ destroyed your DNA before you could use it. No problem, we'll just need to start over!",
                    })
                }
                break;
            case 'chelex':
                setSlideConfig({
                    "headerText": "Chelex to Protect DNA",
                })
                break;
            case 'buffer':
                setSlideConfig({
                    "headerText": "Maintain pH, Promote Enzyme Activity"
                })
                break;
            case 'polymerase':
                setSlideConfig({
                    "headerText": "Taq Polymerase Makes the Copies"
                })
                break;
            case 'dntp':
                setSlideConfig({
                    "headerText": "Building Blocks for Copies"
                })
                break;
            case 'primer':
                setSlideConfig({
                    "headerText": "Target the Bitter Tasting Gene"
                })
                break;
            case 'haeiii':
                setSlideConfig({
                    "headerText": "HaeIII cuts Taster Gene"
                })
                break;
            case 'electrophoresis':
                setSlideConfig({
                    "headerText": "Analyze with gel electrophoresis!"
                })
                break;
            case 'cycler':
                setTemp(20)
                setFactor(2 ** 30)
                setUnlockTier(4)
                setSlideConfig({
                    "headerText": "Auto-cylce PCR",
                })
                break;

            case '64':
                if (denatured && !annealed) {
                    setTemp(64)
                    setAnnealed(true)
                    setSlideConfig({
                        "headerText": "Cool to 64ºC and Anneal",
                        "resultText": "Annealing takes place. Ready to make some copies!",
                    })
                } else if (denatured && annealed) {
                    setTemp(64)
                    setSlideConfig({
                        "headerText": "Cool to 64ºC",
                        "resultText": "Already annealed. Raise the heat to make some copies!",
                    })
                } else {
                    setTemp(64)
                    setSlideConfig({
                        "headerText": "Set temperature to 64ºC",
                        "resultText": "The DNA is not denatured and is still double stranded, so no annealing of the primer takes place.",
                    })
                }
                break;
            case '72':
                const newFactor = factor * 2
                setTemp(72)
                setFactor(newFactor)
                setDenatured(false)
                setAnnealed(false)
                if (newFactor >= 8) {
                    setUnlockTier(3)
                }
                if (annealed) {
                    setSlideConfig({
                        "headerText": "Set temp to 72ºC and Extend",
                        "resultText": "Doubled the amount of TAS2R38 DNA!"
                    })
                } else if (denatured) {
                    setTemp(72)
                    setSlideConfig({
                        "headerText": "Set temp to 72ºC",
                        "resultText": "The already separated DNA strands heat up, but with no primer attached no copies can be made."
                    })
                } else {
                    setTemp(72)
                    setSlideConfig({
                        "headerText": "Set temp to 72ºC",
                        "resultText": "The DNA is not denatured and is still double stranded. More heat is needed to split the DNA."
                    })
                }
                break;
            case '94':
                if (!denatured) {
                    setTemp(94)
                    setDenatured(true)
                    setSlideConfig({
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "Each strand of DNA separates into two single-strands!",
                    })
                } else if (annealed) {
                    setTemp(94)
                    setAnnealed(false)
                    setSlideConfig({
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "The primers detach from the single-stranded DNA...",
                    })
                } else {
                    setTemp(94)
                    setDenatured(true)
                    setSlideConfig({
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "The already separated DNA strands heat up...",
                    })
                }
                break
            default:
                break;
        }

        setActive(newActive)
    };

    return <div style={{ height: '100%', width: '100%', display: 'flex', alignContent: 'flex-start' }}>
        <ActionMenu
            setActive={handleNewActive}
            unlockTier={unlockTier}
        />
        <Stats temp={temp} factor={factor} />
        {unlockTier == 6 && < VideoPlayer handleVideoEnded={() => setUnlockTier(7)} videoPath={"electrophoresis.mp4"} />}
        {active && <Slide active={active} config={slideConfig} />}
    </div >
}

export default Pcr