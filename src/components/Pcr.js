import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';
import Slide from './Slide'
import VideoPlayer from './VideoPlayer';
import Stats from './Stats'

const Pcr = () => {
    const [active, setActive] = useState();
    const [slideConfig, setSlideConfig] = useState({
        "headerText": "The Bitter Truth by Dan Rufener",
        "bodyText": <div><i>There's one three-millionth of your DNA code that determines whether or not these special pieces of paper taste disgusting or just like normal paper. And I tested that myself using chemistry. And it was awesome.<br />I want you to share my joy.</i><br /><br />Polymerase Chain Reaction (PCR) is a technique used to make copies of a specific segment of DNA. Using PCR, you can make billions of copies of the PTC-bitterness tasting gene TAS2R38. HaeIII is an enzyme that will cut these segments in half, but only if it is the version of the gene for "tasters"; people who can't taste PTC won't have their copies cut. By measuring the length of the chains of TAS2R38 after being mixed with HaeIII, you can determine if the gene codes for "tasting" or "non-tasting", and also if the genome is homozygous or heterozygous.</div>,
        "resultText": "Do PCR to make a billion copies by combining reagents (being mindful of the order) and then adjusting the temperature with care. Once you have a billion or more copies, introduce HaeIII and then measure the resulting DNA-segment lengths with a techinique called gel electrophoresis, and win! Start by adding water!",
        "image": "adding.jpeg",
        "imageHeight": "180px",
    });
    const [items, setItems] = useState([]);
    const [unlockTier, setUnlockTier] = useState(-1);
    const [factor, setFactor] = useState(1)
    const [temp, setTemp] = useState(20)
    const [denatured, setDenatured] = useState(false);
    const [annealed, setAnnealed] = useState(false);
    const [shownVideo, setShownVideo] = useState(false);

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
                    "bodyText": "Ultra-pure H₂0 is the solvent that forms the medium where the PCR reaction will occur. This water has no DNase/RNase/Protease, enzymes in the air and normal water that would break down DNA and ruin the experiment. You'll still need Chelex and a buffer to protect the DNA and keep reactions working well, but this gets you off on a much better foot than if you used tap water.",
                    "image": "water.jpg"
                })
                break;
            case 'template':
                const bodyText = "After swishing 5 mL of 0.9% saline in your mouth for 30 seconds, it contains several copies of your DNA to copy."
                if (items.includes("chelex")) {
                    setSlideConfig({
                        "headerText": "DNA to Copy and Analyze",
                        bodyText,
                        "image": "dnaExtract.jpeg",
                        "resultText": "After spinning in the centrifuge, it can be separated from the other cell matter and added. Because you've added Chelex, the DNA is protected from heavy metals and enzymes that would otherwise break it down."
                    })
                } else {
                    reset()
                    setSlideConfig({
                        "headerText": "Runied!",
                        bodyText,
                        image: 'trash.jpg',
                        "resultText": <div>But because the DNA was not protected, heavy metals like Mg2+ destroyed your DNA before you could use it. No problem, we'll just need to start over!
                            <br /><a href="https://www.vecteezy.com/free-vector/garbage-icon">Garbage Icon Vectors by Vecteezy</a>
                        </div>,
                    })
                }
                break;
            case 'chelex':
                setSlideConfig({
                    "headerText": "Chelex to Protect DNA",
                    "image": "chelex.jpg",
                    "bodyText": "The -OH ends are very electronegative so Chelex binds positive molecules, especially 2+ heavy metals that interfere with PCR.",
                    "resultText": "Now you can add your template DNA!"
                })
                break;
            case 'buffer':
                setSlideConfig({
                    "headerText": "Maintain pH, Promote Enzyme Activity",
                    "bodyText": "A mixture of Tris-KCl-MgCl2 acts as a buffer that regulates pH, stabilizing and promoting the polymerase activity in PCR.",
                    "image": "buffer.gif",
                    "resultText": "One step closer to running PCR!"
                })
                break;
            case 'polymerase':
                setSlideConfig({
                    "headerText": "Taq Polymerase",
                    "bodyText": "DNA polymerase is the enzyme that actually replicates DNA. In PCR, the temperature needs to be raised high enough that DNA would spontaneously break apart. Thermus aquaticus (Taq) is a heat-resistant bacteria discovered in Yellowstone's hot springs. We use Taq's polymerase in PCR due to it's heat-resistant molecular structure, streamlining the amplification process.",
                    "image": "hotsprings.jpg",
                    "resultText": "Once the temperature is right, Taq polymerase will make the DNA copies!"
                })
                break;
            case 'dntp':
                setSlideConfig({
                    "headerText": "Building Blocks for Copies",
                    "image": "dntp.png",
                    "bodyText": "Information in DNA is coded in nucleotides (A, T, C, or G). The consist of a sugar an amino acid a phosphate group. You'll add the read-to-use, activated form, with a tri-phosphate group.",
                    "resultText": "Now there's the 'ingredients' that polymerase can use to make more DNA."
                })
                break;
            case 'primer':
                setSlideConfig({
                    "headerText": "Target the Bitter Tasting Gene",
                    "image": "primer.png",
                    "imageHeight": "300px",
                    "bodyText": "A short strand of DNA, about 25 base pairs long, specifically coded to bind to, or \"anneal\", to the gene that codes for whether or not you can taste PTC (TAS2R38). This ensures the right DNA is copied because it provides the starting point for replication to occur. Because DNA strands are held together via hydrogen bonds, not the strongest bonds, the temperature needs to be low for annealing to occur.",
                    "resultText": "You're ready to target TAS2R38!"
                })
                break;
            case 'haeiii':
                setSlideConfig({
                    "headerText": "HaeIII cuts Taster Gene",
                    "image": "cut.png",
                    "imageHeight": "300px",
                    "bodyText": "Bacteria and viruses don't get along. As such, both sides work hard to stop the other. One technique used by bacteria to stop viruses is to recognize foreign DNA and chop it up. HaeIII is an enzyme that finds GGCC segments and cuts them. Since \"tasters\" have GGCC in their TAS2R38 gene and \"non-tasters\" do not, we can use whether or not HaeIII cuts the segments to analyze the DNA.",
                    "resultText": "You're ready to analyze the DNA with gel electrophoresis!"
                })
                break;
            case 'electrophoresis':
                setSlideConfig({
                    "headerText": "Analyzed with gel electrophoresis!",
                    "bodyText": "An electric charge draws DNA across the gel. Shorter molecules effuse faster, so how far the strands travel tells you relative length. You can estimate the length against a mixture of known-length DNA segments called a \"DNA ladder\" (on the bottom). Gel electrophoresis shows that not only did PCR make so many copies of the DNA you can see it without a microscope, you also can now see if you're heterozygous (one bar) or homozygous (two bars), and if you're a taster (shorter strands) or not (uncut, longer strands).",
                    "resultText": "You did it! If you are a heterozygous taster like me, you're DNA would result in the two-band pattern in rows 2 and 3 (both mine). If not, you'd have a single band like in most of the other rows, even with my left bar if you're a non-taster or with my right bar if you're a homozygous taster.",
                    "image": "electro.jpeg",
                    "imageHeight": "300px"
                })
                break;
            case 'cycler':
                setTemp(20)
                setFactor(2 ** 35)
                setUnlockTier(4)
                setSlideConfig({
                    "headerText": "Thermal Cycler",
                    "image": "cycler.jpeg",
                    "bodyText": "Decades ago, chemists had to do PCR by moving the solution between water baths at different temperature. Now there's a machine that can be programmed to quickly change and hold temperatures for various amounts of time.",
                    "resultText": "PCR Complete! Using the thermal cycler PCR program, in a couple hours, a total of 35 cycles creates tens of billions times the original amount of TAS2R38!"
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
            temp={temp}
            included={
                Object.fromEntries(items.map(item => [item, true]))
            }
        />
        <div style={{ width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {unlockTier == 6 && !shownVideo && < VideoPlayer handleVideoEnded={() => {
                setShownVideo(true)
                setUnlockTier(7)
            }
            } videoPath={"electrophoresis.mp4"} />}
            <Slide active={active} config={slideConfig} />
            <Stats temp={temp} factor={factor} unlockTier={unlockTier} />
        </div>
    </div >
}

export default Pcr