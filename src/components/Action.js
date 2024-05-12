const Action = ({ locked, text, onClick }) => {
    return <div
        onClick={locked ? () => { } : onClick}
        style={{
            cursor: 'pointer',
            minWidth: '200px',
            padding: '10px',
            backgroundColor: 'grey',
            border: "2px black solid",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
        }}> <span style={{
            color: locked ? '#999' : '#000'
        }}>{text + (locked ? " LOCKED!" : "")}</span></div >
}

export default Action