import Action from "./Action"

const ActionMenu = ({ setActive }) => {
    return <div style={{ height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"Water"} onClick={() => setActive("water")} />
            <Action text={"Template DNA"} onClick={() => setActive("template")} />
            <Action text={"Chelex"} onClick={() => setActive("chelex")} />
            <Action text={"Buffer"} onClick={() => setActive("buffer")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"Polymerase"} onClick={() => setActive("polymerase")} />
            <Action text={"dNTP"} onClick={() => setActive("dntp")} />
            <Action text={"Primer"} onClick={() => setActive("primer")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"HaeIII"} onClick={() => setActive("haeiii")} />
            <Action text={"Electrophoresis"} onClick={() => setActive("electrophoresis")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"64ºC"} onClick={() => setActive("64")} />
            <Action text={"72ºC"} onClick={() => setActive("72")} />
            <Action text={"94ºC"} onClick={() => setActive("94")} />
        </div>
    </div>
}

export default ActionMenu