import React from 'react';
import { useState } from "react";
import ActionMenu from './ActionMenu';
import Slide from './Slide'
import VideoPlayer from './VideoPlayer';
import Stats from './Stats'

const Pcr = () => {
    const [active, setActive] = useState();
    const [slideConfig, setSlideConfig] = useState({
        "headerText": "The Bitter Truth: Detecting PTC-Taster Allele",
        "bodyText": <div><i>There's one three-millionth of your DNA code that determines whether or not these special pieces of paper taste disgustingly bitter or taste just like normal paper. And I tested that myself using chemistry. And it was awesome.<br />I want you to share my joy.</i><br /><br />Polymerase Chain Reaction (PCR) is a technique used to make copies of a specific segment of DNA. Using PCR, you can make billions of copies of the PTC-bitterness tasting gene TAS2R38. HaeIII is an enzyme that will cut these segments in half, but only if it is the version of the gene for "tasters"; people who can't taste PTC won't have their copies cut. By measuring the length of the chains of TAS2R38 after being mixed with HaeIII, you can determine if the gene codes for "tasting" or "non-tasting", and also if the genome is homozygous or heterozygous.</div>,
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
    const [shownSpinVideo, setShownSpinVideo] = useState(false);
    const [shownElectroVideo, setShownElectroVideo] = useState(false);

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
        setUnlockTier(Math.max(unlockTier, newUnlockTier));


        var bodyText;
        var image;
        switch (newActive) {
            case 'water':
                setSlideConfig({
                    "headerText": "DNase/RNase/Protease-free water",
                    "bodyText": "Ultra-pure H₂O is the solvent that forms the medium where the PCR reaction will occur. This water has no DNase/RNase/Protease, enzymes in the air and normal water that would break down DNA and ruin the experiment. You'll still need Chelex and a buffer to protect the DNA and keep reactions working well, but pure water gets you a better start than if you used tap water.",
                    "image": "water.jpg",
                    "resultText": "Continue adding items from the left to prepare for PCR."
                })
                break;
            case 'template':
                bodyText = "After swishing 5 mL of 0.9% saline in your mouth for 30 seconds, it contains several copies of your DNA to copy."
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
                        </div>,
                    })
                }
                break;
            case 'chelex':
                setSlideConfig({
                    "headerText": "Chelex to Protect DNA",
                    "image": "chelex.jpg",
                    "bodyText": "Chelex's functional groups line up, bind, and deactivate positively charged metals, especially 2+ heavy metal ions that interfere with PCR.",
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
                    "bodyText": "Information in DNA is coded in nucleotides (A, T, C, or G). They consist of a phosphate group, a sugar, and an amino acid. You'll add the read-to-use activated forms, with a triphosphate group (not shown).",
                    "resultText": "Now there's the 'ingredients' that polymerase can use to make more DNA."
                })
                break;
            case 'primer':
                setSlideConfig({
                    "headerText": "Target the Bitter Tasting Gene",
                    "image": "primer.png",
                    "imageHeight": "300px",
                    "bodyText": "A short strand of DNA, about 25 base pairs long, specifically coded to bind to, or \"anneal\", to part of TAS2R38, the gene that codes for whether or not you can taste phenylthiocarbamide (PTC). This ensures the right DNA is copied because it provides the starting point for replication to occur. Because DNA strands are held together via hydrogen bonds, not the strongest bonds, the temperature needs to be low for annealing to occur.",
                    "resultText": "You're ready to target TAS2R38!"
                })
                break;
            case 'spin':
                setUnlockTier(Math.max(unlockTier, 2.5))
                setSlideConfig({
                    "headerText": "Mixed and ready!",
                    "image": "pcrCycle.jpg",
                    "imageCitation": "Edited from   https://www.mun.ca/biology/scarr/PCR_simplified.html",
                    "bodyText": "With everything mixed together properly by the centrifuge, you can now proceed with PCR.",
                    "resultText": "Get it hot to split DNA. Chill to bind primer. Heat to make copies. Repeat!"
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
                    "bodyText": "An electric charge draws DNA across the gel. Shorter molecules effuse faster based on Graham's law, R₁/R₂ = √(M₂/M₁), so how far the strands travel tells you relative length. You can estimate the length against a mixture of known-length DNA segments called a \"DNA ladder\" (on the left). Gel electrophoresis shows that not only did PCR make so many copies of the DNA you can see it without a microscope, you also can now see if you're heterozygous (one bar) or homozygous (two bars), and if you're a taster (shorter strands) or not (uncut, longer strands).",
                    "resultText": "You did it! If you are a heterozygous taster like me, your DNA would result in the two-band pattern in columns 4 and 5 (both mine). If not, you'd have a single band like in most of the other rows, level with my top bar if you're a non-taster or with my bottom bar if you're a homozygous taster.",
                    "image": "electro.jpeg",
                    "imageHeight": "300px"
                })
                break;
            case 'cycler':
                setTemp(20)
                setFactor(2 ** 35)
                setUnlockTier(Math.max(unlockTier, 4))
                setSlideConfig({
                    "headerText": "Thermal Cycler",
                    "image": "cycler.jpeg",
                    "imageHeight": "380px",
                    "bodyText": "Decades ago, chemists had to do PCR by moving the solution between water baths at different temperature. Now there's a machine that can be programmed to quickly change and hold temperatures for various amounts of time.",
                    "resultText": "PCR Complete! Using the thermal cycler PCR program, in a couple hours a total of 35 cycles creates tens of billions times the original amount of TAS2R38!"
                })
                break;

            case '64':
                bodyText = "The lower temperature allows the primer to locate TAS2R38 and bind with hydrogen bonds, providing a starting point for replication."
                image = "anneal.jpg"
                if (denatured && !annealed) {
                    setTemp(64)
                    setAnnealed(true)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Cool to 64ºC and Anneal",
                        "resultText": "Annealing takes place. Ready to make some copies!",
                    })
                } else {
                    setTemp(64)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Set temperature to 64ºC",
                        "resultText": "But the DNA is not denatured and is still double stranded, so no annealing of the primer takes place.",
                    })
                }
                break;
            case '72':
                bodyText = "Around the temperature of a Yellowstone hot spring where Taq comes from, our polymerase operates optimally. The high temperature also reduces other biproducts like primer attaching to itself."
                image = "extension.jpg"
                setTemp(72)
                if (annealed) {
                    const newFactor = factor * 2
                    setFactor(newFactor)
                    if (newFactor >= 8) {
                        setUnlockTier(Math.max(unlockTier, 3))
                    }
                    setDenatured(false)
                    setAnnealed(false)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Set temp to 72ºC and Extend",
                        "resultText": "Doubled the amount of TAS2R38 DNA!"
                    })
                } else if (denatured) {
                    setTemp(72)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Set temp to 72ºC",
                        "resultText": "The already separated DNA strands heat up, but with no primer attached, no copies can be made."
                    })
                } else {
                    setTemp(72)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Set temp to 72ºC",
                        "resultText": "The DNA is not denatured and is still double stranded. More heat is needed to split the DNA."
                    })
                }
                break;
            case '94':
                bodyText = "At this high heat, breaking the hydrogen bonds that attach the DNA strands becomes sponataneous and they break apart. The stronger covalent bonds within the strands remain firmly together, protecting the genetic information."
                image = "denature.jpg"
                if (!denatured) {
                    setTemp(94)
                    setDenatured(true)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "Each strand of DNA separates into two single-strands!",
                    })
                } else if (annealed) {
                    setTemp(94)
                    setAnnealed(false)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "The primers detach from the single-stranded DNA...",
                    })
                } else {
                    setTemp(94)
                    setDenatured(true)
                    setSlideConfig({
                        bodyText,
                        image,
                        "headerText": "Heat to 94ºC and Denature",
                        "resultText": "The already separated DNA strands heat up...",
                    })
                }
                break
            case "references":
                setSlideConfig({
                    "headerText": "Thanks and References",
                    "bodyText": "Special thanks to Brett Schaerer who guided me through every step of this lab!",
                    "image": "thanks.jpg",
                    "resultText": <div style={{
                        fontSize: '12px'
                    }}>
                        <br /><br />
                        <h3>References</h3>
                        (2024). BI212 Labs 1-3 Combined Packet Spring 2024. Portland Community College.
                        <br />
                        Steven M. Carr (2024). PCR Simplified. The Polymerase Chain Reaction. Retrieved April 25, 2024, from https://www.mun.ca/biology/scarr/PCR_simplified.html
                        <br />
                        National Institutes of Health (2024, May 2). National Human Genome Research Institute. The Polymerase Chain Reaction. Retrieved May 5, 2024, from https://www.genome.gov/genetics-glossary/Polymerase-Chain-Reaction
                        <br />
                        Yakovchuk, P., Protozanova, E., & Frank-Kamenetskii, M. D. (2006). Base-stacking and base-pairing contributions into thermal stability of the DNA double helix. Nucleic Acids Research, 34 (2) 564-574 . doi:10.1093/nar/gkj454
                        <br />
                        John Petruska, Myron F. Goodman, Enthalpy-Entropy Compensation in DNA Melting Thermodynamics, Journal of Biological Chemistry, Volume 270, Issue 2, 1995, Pages 746-750, ISSN 0021-9258, https://doi.org/10.1074/jbc.270.2.746.
                        <br />
                        Khan Academy (n.d.). Biomolecules: Melting point and thermodynamics of DNA. Retrieved April 19, 2024, from https://www.khanacademy.org/test-prep/mcat/physical-sciences-practice/x04f6bc56:foundation-5-chemical-processes/e/melting-point-and-thermodynamics-of-double-stranded-dna-1
                        <br />
                        [Quick Biochemistry Basics]. (2020, June 7). Taq DNA polymerase [Video]. YouTube. Viewed April 25, 2024 from https://www.youtube.com/watch?v=Ai9N1fWpdd4
                        <br />
                        Thomas, Sneha & John. J, Georrge. (2020). Stability, Applications and Computational Studies of Thermophilic DNA Polymerase. SSRN Electronic Journal. 10.2139/ssrn.3574599.
                        <br />
                        (2024). Chelex 100 Molecular Biology Grade Resin. Bio Rad. Retrieved April 22, 2024, from https://www.bio-rad.com/en-us/product/chelex-100-molecular-biology-grade-resin
                        <br />
                        The University of Utah (n.d.). PTC The Genetics of Bitter Taste. Learn.Genetics. Retrieved April 19, 2024, from https://learn.genetics.utah.edu/content/basics/ptc
                        <br />
                        Nakamura M, Namiki M, Okuyama A, Koh E, Kondoh N, Takeyama M, Fujioka H, Nishimune Y, Matsumoto K, Matsuda M. Optimal temperature for synthesis of DNA, RNA, and protein by human testis in vitro. Arch Androl. 1988;20(1):41-4. doi: 10.3109/01485018808987051. PMID: 2455487.
                        <br />
                        “Nucleic Acid Thermodynamics.” Wikipedia, Wikimedia Foundation, 7 Mar. 2024, en.m.wikipedia.org/wiki/Nucleic_acid_thermodynamics.
                        < br />
                        “Denaturation(biochemistry)” Wikipedia, Wikimedia Foundation, 7 May. 2024, en.m.wikipedia.org/wiki/Denaturation_(biochemistry).
                        < br />
                        “TAS2R38” Wikipedia, Wikimedia Foundation, 2 May. 2024, en.m.wikipedia.org/wiki/TAS2R38.
                        < br />
                        <br />
                        <br />
                        <h4>Images, accessed 5/25/2024</h4>
                        https://chemcollective.org/activities/tutorials/buffers/buffers3
                        <br />https://byjus.com/biology/difference-between-dntp-and-ddntp/
                        <br />https://www.slideserve.com/lynnrobertson/restriction-enzymes-powerpoint-ppt-presentation
                        <br />https://www.craiyon.com/image/tV_5X8I2QqOaoC4zCcUrjQ
                        <br />https://www.amazon.com/PCR-RT-PCR-Water-100x1-8-ml/dp/B0CH3B93TQ
                        <br />https://www.mun.ca/biology/scarr/PCR_simplified.html
                        <br />https://www.biorender.com/template/primer-annealing
                        <br />https://www.biorender.com/template/pcr-extension
                        <br />https://app.biorender.com/biorender-templates/t-656fa74b2fae29a59be5f20c
                        <br />Brett Schaerer and Dan Rufener collaborated on photographing and filming the lab done at Portland Community College.
                    </div >
                })
            default:
                break;
        }

        setActive(newActive)
    };

    const onReferencesClick = () => {
        setUnlockTier(8)
        handleNewActive("references")
    }

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
            {unlockTier == 2.5 && !shownSpinVideo && < VideoPlayer handleVideoEnded={() => {
                setShownSpinVideo(true)
            }
            } videoPath={"spin.mp4"} />}
            {unlockTier == 6 && !shownElectroVideo && < VideoPlayer doubled handleVideoEnded={() => {
                setShownElectroVideo(true)
                setUnlockTier(7)
            }
            } videoPath={"electrophoresis.mp4"} />}
            <Slide active={active} config={slideConfig} />
            <Stats temp={temp} factor={factor} unlockTier={unlockTier} onReferencesClick={onReferencesClick} />
        </div>
    </div >
}

export default Pcr