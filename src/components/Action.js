const Action = ({ locked, text, onClick }) => {
    return <div
        onClick={locked ? () => { } : onClick}
        style={{
            cursor: 'pointer',
            width: '150px',
            height: '150px',
            marginLeft: '10px',
            marginRight: '10px',
            borderRadius: '50%',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
        }}><span style={{
            color: locked ? '#999' : '#000'
        }}>{text + (locked ? " LOCKED!" : "")}</span></div>
}

export default Action