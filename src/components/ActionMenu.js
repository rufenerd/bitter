import Action from "./Action"

const ActionMenu = ({ setActive, unlockTier }) => {
    return <div style={{ height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"Water"} onClick={() => setActive("water")} />
            <Action locked={unlockTier < 1} text={"Template DNA"} onClick={() => setActive("template")} />
            <Action locked={unlockTier < 1} text={"Chelex"} onClick={() => setActive("chelex")} />
            <Action locked={unlockTier < 1} text={"Buffer"} onClick={() => setActive("buffer")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action locked={unlockTier < 1} text={"Polymerase"} onClick={() => setActive("polymerase")} />
            <Action locked={unlockTier < 1} text={"dNTP"} onClick={() => setActive("dntp")} />
            <Action locked={unlockTier < 1} text={"Primer"} onClick={() => setActive("primer")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action locked={unlockTier < 3} text={"HaeIII"} onClick={() => setActive("haeiii")} />
            <Action locked={unlockTier < 4} text={"Electrophoresis"} onClick={() => setActive("electrophoresis")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action locked={unlockTier < 2} text={"64ºC"} onClick={() => setActive("64")} />
            <Action locked={unlockTier < 2} text={"72ºC"} onClick={() => setActive("72")} />
            <Action locked={unlockTier < 2} text={"94ºC"} onClick={() => setActive("94")} />
        </div>
    </div>
}

export default ActionMenu