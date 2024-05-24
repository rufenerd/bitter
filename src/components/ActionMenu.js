import Action from "./Action"

const ActionMenu = ({ setActive, unlockTier, included, temp }) => {
    return <div className="actionMenu" style={{ midWidth: "400px", height: '100%' }}>
        <div style={{}}>
            <Action included={included["water"]} text={"Water"} onClick={() => setActive("water")} />
            <Action included={included["template"]} locked={unlockTier < 1} text={"Template DNA"} onClick={() => setActive("template")} />
            <Action included={included["buffer"]} locked={unlockTier < 1} text={"Buffer"} onClick={() => setActive("buffer")} />
            <Action included={included["chelex"]} locked={unlockTier < 1} text={"Chelex"} onClick={() => setActive("chelex")} />
            <Action included={included["polymerase"]} locked={unlockTier < 1} text={"Polymerase"} onClick={() => setActive("polymerase")} />
            <Action included={included["dntp"]} locked={unlockTier < 1} text={"dNTP"} onClick={() => setActive("dntp")} />
            <Action included={included["primer"]} locked={unlockTier < 1} text={"Primer"} onClick={() => setActive("primer")} />
            <Action included={temp == '64'} locked={unlockTier < 2} text={"64ºC"} onClick={() => setActive("64")} />
            <Action included={temp == '72'} locked={unlockTier < 2} text={"72ºC"} onClick={() => setActive("72")} />
            <Action included={temp == '94'} locked={unlockTier < 2} text={"94ºC"} onClick={() => setActive("94")} />
            <Action included={included["cycler"]} locked={unlockTier < 3} text={"PCR auto-cycler"} onClick={() => setActive("cycler")} />
            <Action included={included["haeiii"]} locked={unlockTier < 4} text={"HaeIII"} onClick={() => setActive("haeiii")} />
            <Action included={included["electrophoresis"]} locked={unlockTier < 5} text={"Electrophoresis"} onClick={() => setActive("electrophoresis")} />
        </div>
    </div>
}

export default ActionMenu