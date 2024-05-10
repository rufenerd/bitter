import Action from "./Action"

const ActionMenu = ({ setActive }) => {
    return <div style={{ height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"Water"} onClick={() => setActive("water")} />
            <Action text={"Template DNA"} onClick={() => setActive("template")} />
            <Action text={"Chelex"} onClick={() => setActive("chelex")} />
            <Action text={"Buffer"} onClick={() => setActive("buffer")} />
            <Action text={"HaeIII"} onClick={() => setActive("haeiii")} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Action text={"Polymerase"} onClick={() => setActive("polymerase")} />
            <Action text={"dNTP"} onClick={() => setActive("dntp")} />
            <Action text={"Primer"} onClick={() => setActive("primer")} />
            <Action text={"Electrophoresis"} onClick={() => setActive("electrophoresis")} />
        </div>
    </div>
}

export default ActionMenu