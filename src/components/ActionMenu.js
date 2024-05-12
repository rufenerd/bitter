import Action from "./Action"

const ActionMenu = ({ setActive, unlockTier }) => {
    return <div className="actionMenu" style={{ width: '400px', midWidth: "400px", height: '100%' }}>
        <div style={{}}>
            <Action text={"Water"} onClick={() => setActive("water")} />
            <Action locked={unlockTier < 1} text={"Template DNA"} onClick={() => setActive("template")} />
            <Action locked={unlockTier < 1} text={"Chelex"} onClick={() => setActive("chelex")} />
            <Action locked={unlockTier < 1} text={"Buffer"} onClick={() => setActive("buffer")} />
            <Action locked={unlockTier < 1} text={"Polymerase"} onClick={() => setActive("polymerase")} />
            <Action locked={unlockTier < 1} text={"dNTP"} onClick={() => setActive("dntp")} />
            <Action locked={unlockTier < 1} text={"Primer"} onClick={() => setActive("primer")} />
            <Action locked={unlockTier < 2} text={"64ºC"} onClick={() => setActive("64")} />
            <Action locked={unlockTier < 2} text={"72ºC"} onClick={() => setActive("72")} />
            <Action locked={unlockTier < 2} text={"94ºC"} onClick={() => setActive("94")} />
            <Action locked={unlockTier < 3} text={"PCR auto-cycler"} onClick={() => setActive("cycler")} />
            <Action locked={unlockTier < 4} text={"HaeIII"} onClick={() => setActive("haeiii")} />
            <Action locked={unlockTier < 5} text={"Electrophoresis"} onClick={() => setActive("electrophoresis")} />
        </div>
    </div>
}

export default ActionMenu